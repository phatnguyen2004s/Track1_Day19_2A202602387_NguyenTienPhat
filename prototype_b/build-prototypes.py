"""Build three self-contained Option C HTML prototypes from common sources."""
from pathlib import Path

ROOT = Path(__file__).resolve().parent
VARIANTS = [
    ('text', 'C1 — Chọn văn bản', 'prototype-c1-text.html'),
    ('region', 'C2 — Khoanh vùng sơ đồ', 'prototype-c2-region.html'),
    ('block', 'C3 — Chọn khối nội dung', 'prototype-c3-block.html'),
]

def build():
    template = (ROOT / 'template.html').read_text(encoding='utf-8')
    css = (ROOT / 'styles.css').read_text(encoding='utf-8')
    script = (ROOT / 'app-c.js').read_text(encoding='utf-8')
    for variant, label, filename in VARIANTS:
        html = template.replace('__VARIANT__', variant).replace('__LABEL__', label)
        html = html.replace('<link rel="stylesheet" href="styles.css">', '<style>\n' + css + '\n</style>')
        html = html.replace('<script src="app-c.js"></script>', '<script>\n' + script + '\n</script>')
        (ROOT / filename).write_text(html, encoding='utf-8')
        print(f'Built {filename}')

if __name__ == '__main__':
    build()
