import re

with open("index_v2.html", "r") as f:
    html = f.read()

# Replace tag inline styles
html = re.sub(r'<span class="tag"\s*style="[^"]*">', r'<span class="pc-tag">', html)
html = html.replace('<span class="tag"', '<span class="pc-tag"')

with open("index_v2.html", "w") as f:
    f.write(html)

css_addition = """
/* Simple Program Card Tags */
.pc-tag {
    display: inline-block;
    padding: 6px 12px;
    background: #f1f5f9;
    color: #334155;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 0;
    border: 1px solid #e2e8f0;
}
"""

with open("styles.css", "a") as f:
    f.write(css_addition)
