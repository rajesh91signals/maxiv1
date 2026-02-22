import re

with open("index_v2.html", "r") as f:
    html = f.read()

# The handwritten callout snippet
callout_start = '<div style="display: flex; align-items: center; gap: 12px; margin: 20px 0;">\n                                <span style="font-family: \'Just Another Hand\''

# Remove callout from Bootcamp content side
callout_bootcamp_regex = r'<div style="display: flex; align-items: center; gap: 12px; margin: 20px 0;">\s*<span[^>]*>See\s*pricing</span>\s*<svg[^>]*>.*?</svg>\s*</div>'
html = re.sub(callout_bootcamp_regex, '', html, count=1, flags=re.DOTALL)

# Add Bootcamp callout to visual side
bootcamp_pricing_start = '<div class="pricing-card pricing-blue">'
bootcamp_callout = """<div style="display: flex; align-items: flex-end; gap: 8px; margin-bottom: 20px; width: 100%; max-width: 380px;">
                                <span style="font-family: 'Just Another Hand', cursive; font-size: 2.2rem; color: #fff; transform: rotate(-5deg); display: inline-block;">For freshers & career upgraders</span>
                                <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(60deg) translateY(-10px);">
                                    <path d="M10 10C20 20 40 40 50 50" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M30 50C40 50 48 50 50 50C50 48 50 40 50 30" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            """
html = html.replace(bootcamp_pricing_start, bootcamp_callout + bootcamp_pricing_start)

# Remove callout from Fasttrack content side
html = re.sub(callout_bootcamp_regex, '', html, count=1, flags=re.DOTALL)

# Add Fasttrack callout to visual side
fasttrack_pricing_start = '<div class="pricing-card pricing-yellow">'
fasttrack_callout = """<div style="display: flex; align-items: flex-end; gap: 8px; margin-bottom: 20px; width: 100%; max-width: 380px;">
                                <span style="font-family: 'Just Another Hand', cursive; font-size: 2.2rem; color: #fff; transform: rotate(-5deg); display: inline-block;">For career switchers & job seekers</span>
                                <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(60deg) translateY(-10px);">
                                    <path d="M10 10C20 20 40 40 50 50" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M30 50C40 50 48 50 50 50C50 48 50 40 50 30" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            """
html = html.replace(fasttrack_pricing_start, fasttrack_callout + fasttrack_pricing_start)

with open("index_v2.html", "w") as f:
    f.write(html)
