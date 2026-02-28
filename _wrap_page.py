import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Add <div class="page-wrapper" style="background: #ffffff;"> right after <body>
body_open = "<body>"
body_open_new = "<body>\n    <div class=\"page-wrapper\" style=\"background: #ffffff;\">"

# Add </div> right before <!-- Video Modal --> or </body>
body_close = "    <!-- Video Modal -->"
body_close_new = "    </div>\n    <!-- Video Modal -->"

html = html.replace(body_open, body_open_new)
html = html.replace(body_close, body_close_new)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
