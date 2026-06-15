# -*- coding: utf-8 -*-
"""Сборка всех markdown-документов audit/ в один HTML для печати в PDF.

HTML затем печатается в PDF headless-браузером (Chrome/Edge):
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \\
        --headless --print-to-pdf=invoicebox-ui-audit.pdf _combined.html
Зависимость: pip install markdown
"""
import re
from pathlib import Path

import markdown

DOCS = Path(__file__).parent
FILES = [
    'README.md',
    '00-PROJECT-MAP.md',
    '01-BASELINE-METRICS.md',
    '02-resilience.md',
    '03-security.md',
    '04-performance.md',
    '05-accessibility.md',
    '06-architecture-lint.md',
    '07-platform.md',
    '08-tests.md',
    '09-observability.md',
    '10-REFACTOR-PLAN.md',
]

CSS = """
@page { size: A4; margin: 18mm 15mm; }
body { font-family: 'Segoe UI', Arial, sans-serif; font-size: 10.5pt; line-height: 1.45;
       color: #1a1a2e; margin: 0; }
h1 { font-size: 19pt; color: #0d2b52; border-bottom: 3px solid #0d2b52;
     padding-bottom: 6px; margin: 0 0 14px; }
h2 { font-size: 14pt; color: #14437f; margin: 18px 0 8px; }
h3 { font-size: 11.5pt; color: #1a1a2e; margin: 14px 0 6px; }
table { border-collapse: collapse; width: 100%; margin: 8px 0 12px; font-size: 9pt; }
th, td { border: 1px solid #b9c4d4; padding: 4px 7px; text-align: left; vertical-align: top; }
th { background: #e8eef7; color: #0d2b52; }
tr:nth-child(even) td { background: #f6f8fb; }
code { font-family: Consolas, monospace; font-size: 9pt; background: #f0f2f6;
       padding: 1px 4px; border-radius: 3px; }
pre { background: #f0f2f6; border: 1px solid #d8dee8; border-radius: 4px;
      padding: 8px 10px; overflow-x: hidden; white-space: pre-wrap; word-wrap: break-word; }
pre code { background: none; padding: 0; }
a { color: #14437f; text-decoration: none; }
ul, ol { margin: 6px 0; padding-left: 22px; }
li { margin: 2px 0; }
blockquote { border-left: 3px solid #b9c4d4; margin: 8px 0; padding: 2px 12px; color: #444; }
.doc-section { page-break-before: always; }
.doc-section:first-of-type { page-break-before: avoid; }
table, pre { page-break-inside: avoid; }
h1, h2, h3 { page-break-after: avoid; }
.cover { text-align: center; padding-top: 220px; page-break-after: always; }
.cover h1 { border: none; font-size: 26pt; }
.cover p { color: #555; font-size: 12pt; }
.toc { page-break-after: always; }
.toc h1 { font-size: 17pt; }
.toc ol { font-size: 11pt; line-height: 2; }
"""


def md_to_html(text: str) -> str:
    return markdown.markdown(text, extensions=['tables', 'fenced_code'])


def strip_md_links(html: str) -> str:
    # В печатной версии внутренние ссылки на .md-файлы и исходники не кликабельны —
    # оставляем только текст ссылки.
    return re.sub(r'<a href="[^"]*">([^<]*)</a>', r'\1', html)


sections, toc_items = [], []
for f in FILES:
    text = (DOCS / f).read_text(encoding='utf-8')
    title = next(line.lstrip('# ').strip() for line in text.splitlines() if line.startswith('#'))
    toc_items.append(title)
    sections.append(f'<div class="doc-section">{strip_md_links(md_to_html(text))}</div>')

toc = '\n'.join(f'<li>{t}</li>' for t in toc_items)
html = f"""<!DOCTYPE html>
<html lang="ru"><head><meta charset="utf-8"><style>{CSS}</style></head><body>
<div class="cover">
  <h1>Аудит @invoicebox/ui</h1>
  <p>Полный анализ библиотеки React-компонентов и план рефакторинга</p>
  <p>Документация: {len(FILES)} разделов &middot; Июнь 2026</p>
</div>
<div class="toc"><h1>Содержание</h1><ol>{toc}</ol></div>
{''.join(sections)}
</body></html>"""

out = DOCS / '_combined.html'
out.write_text(html, encoding='utf-8')
print(f'OK: {out} ({len(html)} chars, {len(sections)} sections)')

# Отдельный краткий HTML: только обзор (README) — без обложки и оглавления.
summary_html = f"""<!DOCTYPE html>
<html lang="ru"><head><meta charset="utf-8"><style>{CSS}</style></head><body>
{strip_md_links(md_to_html((DOCS / 'README.md').read_text(encoding='utf-8')))}
</body></html>"""
out2 = DOCS / '_summary.html'
out2.write_text(summary_html, encoding='utf-8')
print(f'OK: {out2}')
