#!/usr/bin/env python3
"""Rebuild the English course PDFs (cours/en/*.pdf) from tools/cours-en/md/*.md.

Usage (from the repo root):  python3 tools/cours-en/render.py [D042]
Needs: python3-markdown, Google Chrome (or Chromium) and the DejaVu + Noto Color Emoji fonts.
After rebuilding, update the sizes in data/cours.js (DATA.cours.kbEn) if they changed.
"""
import os,subprocess,tempfile,shutil
HERE=os.path.dirname(os.path.abspath(__file__)); ROOT=os.path.dirname(os.path.dirname(HERE))
import markdown,glob,re,sys
CSS="""@page{size:A4;margin:16mm 14mm}
body{font-family:'DejaVu Sans','Noto Color Emoji',sans-serif;font-size:10pt;line-height:1.5;color:#1f2328;margin:0}
h1{color:#0b3d91;font-size:19pt;line-height:1.3;border-bottom:2px solid #0b3d91;padding-bottom:6px;margin:0 0 14px}
h2{color:#0b3d91;font-size:13.5pt;border-bottom:1px solid #d0d7de;padding-bottom:4px;margin:20px 0 10px}
h3{color:#0b3d91;font-size:11.5pt;margin:16px 0 8px}
blockquote{background:#f3f6fb;border-left:4px solid #0b3d91;margin:10px 0;padding:8px 14px;color:#1f2328}
blockquote p{margin:4px 0}
table{border-collapse:collapse;width:100%;margin:10px 0;font-size:8.8pt;page-break-inside:auto}
tr{page-break-inside:avoid}
th{background:#e8eef9;text-align:left}
th,td{border:1px solid #c9d1d9;padding:4px 7px;vertical-align:top}
tr:nth-child(even) td{background:#fafbfc}
code{font-family:'DejaVu Sans Mono',monospace;background:#eef1f4;border-radius:3px;padding:1px 4px;font-size:.88em}
pre{background:#f6f8fa;border:1px solid #d0d7de;padding:8px 10px;font-size:8.5pt;white-space:pre-wrap}
pre code{background:none;padding:0}
ul,ol{padding-left:22px;margin:6px 0} li{margin:2px 0}
hr{border:0;border-top:1px solid #d0d7de;margin:18px 0}
p{margin:6px 0} a{color:#0b3d91}
"""
md=markdown.Markdown(extensions=["tables","sane_lists","fenced_code"])
only=sys.argv[1] if len(sys.argv)>1 else "*"
tmp=tempfile.mkdtemp()
chrome=shutil.which("google-chrome") or shutil.which("chromium") or shutil.which("chromium-browser")
for f in sorted(glob.glob(os.path.join(HERE,"md",only+".md"))):
    name=os.path.basename(f)[:-3]
    t=open(f).read()
    t=re.sub(r"^(\s*[-*] )\[ \] ",r"\1☐ ",t,flags=re.M); t=re.sub(r"^(\s*[-*] )\[x\] ",r"\1☑ ",t,flags=re.M)
    # blank line before tables / lists that follow a paragraph line (python-markdown needs it)
    LI=re.compile(r"^\s*(?:[-*+]|\d+\.)\s")
    out=[];prev=""
    for ln in t.split("\n"):
        isT=ln.lstrip().startswith("|"); pT=prev.lstrip().startswith("|")
        if prev.strip() and ((isT and not pT) or (pT and not isT and ln.strip()) or (LI.match(ln) and not LI.match(prev) and not prev.startswith((" ","\t")) and not pT)):
            out.append("")
        out.append(ln); prev=ln
    t="\n".join(out)
    md.reset(); body=md.convert(t)
    hp=os.path.join(tmp,name+".html")
    open(hp,"w").write(f"<!doctype html><html lang='en'><head><meta charset='utf-8'><title>{name}</title><style>{CSS}</style></head><body>{body}</body></html>")
    subprocess.run([chrome,"--headless=new","--no-sandbox","--disable-gpu","--user-data-dir="+os.path.join(tmp,"chrome"),"--no-pdf-header-footer","--print-to-pdf="+os.path.join(ROOT,"cours","en",name+".pdf"),"file://"+hp],stderr=subprocess.DEVNULL,check=True)
    print(name)
shutil.rmtree(tmp,ignore_errors=True)
