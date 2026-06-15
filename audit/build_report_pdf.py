# -*- coding: utf-8 -*-
"""Сборка самостоятельного сводного отчёта REPORT.md в HTML для печати в PDF.

REPORT.md — self-contained отчёт для руководства (контекст, baseline, риски, план),
не дублирует постраничный набор 00–10. HTML затем печатается в PDF headless-браузером:
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \\
        --headless --print-to-pdf=invoicebox-ui-report.pdf _report.html
Зависимость: pip install markdown
"""
import re
from pathlib import Path

import markdown

DOCS = Path(__file__).parent
SRC = DOCS / 'REPORT.md'

CSS = """
@page { size: A4; margin: 18mm 15mm; }
body { font-family: 'Segoe UI', Arial, sans-serif; font-size: 10.5pt; line-height: 1.5;
       color: #1a1a2e; margin: 0; }
h1 { font-size: 18pt; color: #0d2b52; border-bottom: 3px solid #0d2b52;
     padding-bottom: 6px; margin: 0 0 14px; page-break-before: always; }
h1:first-of-type { page-break-before: avoid; }
h2 { font-size: 13.5pt; color: #14437f; margin: 18px 0 8px; }
h3 { font-size: 11.5pt; color: #1a1a2e; margin: 14px 0 6px; }
table { border-collapse: collapse; width: 100%; margin: 8px 0 12px; font-size: 8.6pt; }
th, td { border: 1px solid #b9c4d4; padding: 4px 7px; text-align: left; vertical-align: top; }
th { background: #e8eef7; color: #0d2b52; }
tr:nth-child(even) td { background: #f6f8fb; }
code { font-family: Consolas, monospace; font-size: 8.8pt; background: #f0f2f6;
       padding: 1px 4px; border-radius: 3px; }
pre { background: #0d2b52; color: #e8eef7; border-radius: 4px; padding: 10px 12px;
      overflow-x: hidden; white-space: pre-wrap; word-wrap: break-word; font-size: 8.6pt; }
pre code { background: none; padding: 0; color: inherit; }
a { color: #14437f; text-decoration: none; }
ul, ol { margin: 6px 0; padding-left: 22px; }
li { margin: 3px 0; }
blockquote { border-left: 4px solid #14437f; background: #f6f8fb; margin: 10px 0;
             padding: 6px 14px; color: #2a2a3e; }
table, pre { page-break-inside: avoid; }
h1, h2, h3 { page-break-after: avoid; }
.cover { text-align: center; padding-top: 180px; page-break-after: always; }
.cover .badge { display: inline-block; border: 2px solid #b03030; color: #b03030;
                border-radius: 6px; padding: 4px 14px; font-weight: bold; font-size: 11pt;
                letter-spacing: 1px; margin-bottom: 40px; }
.cover h1 { border: none; font-size: 24pt; page-break-before: avoid; margin: 0 auto 18px;
            max-width: 80%; color: #0d2b52; }
.cover .sub { color: #555; font-size: 13pt; margin: 6px 0; }
.cover .meta { color: #777; font-size: 11pt; margin-top: 40px; line-height: 1.8; }
"""


def md_to_html(text: str) -> str:
    return markdown.markdown(text, extensions=['tables', 'fenced_code'])


def strip_md_links(html: str) -> str:
    # В печатной версии ссылки на .md и исходники не кликабельны — оставляем текст.
    return re.sub(r'<a href="[^"]*">([^<]*)</a>', r'\1', html)


text = SRC.read_text(encoding='utf-8')
body_html = strip_md_links(md_to_html(text))

cover = """
<div class="cover">
  <div class="badge">КОНФИДЕНЦИАЛЬНО &middot; ДЛЯ ВНУТРЕННЕГО ИСПОЛЬЗОВАНИЯ</div>
  <h1>Библиотека компонентов @invoicebox/ui</h1>
  <div class="sub">Итоговый отчёт аудита</div>
  <div class="sub">и план рефакторинга волнами</div>
  <div class="meta">
    Дата аудита: 15 июня 2026<br>
    Безопасность и утечки данных: security@invoicebox.ru
  </div>
</div>
"""

html = f"""<!DOCTYPE html>
<html lang="ru"><head><meta charset="utf-8"><style>{CSS}</style></head><body>
{cover}
{body_html}
</body></html>"""

out = DOCS / '_report.html'
out.write_text(html, encoding='utf-8')
print(f'OK: {out} ({len(html)} chars)')
