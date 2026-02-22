import re

with open("index_v2.html", "r") as f:
    text = f.read()

# First card replacement
first_card_old = """<div style="display: flex; align-items: flex-end; gap: 8px; margin-bottom: 20px; width: 100%; max-width: 380px;">
                                <span style="font-family: 'Just Another Hand', cursive; font-size: 2.2rem; color: #fff; transform: rotate(-5deg); display: inline-block;">For freshers & career upgraders</span>
                                <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(60deg) translateY(-10px);">
                                    <path d="M10 10C20 20 40 40 50 50" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M30 50C40 50 48 50 50 50C50 48 50 40 50 30" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>"""

first_card_new = """<div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 20px; width: 100%; max-width: 380px;">
                                <span style="font-family: 'Just Another Hand', cursive; font-size: 2.2rem; color: #fff; display: inline-block; flex: 1; text-align: left; line-height: 1;">For freshers & mid-level career upgraders</span>
                                <svg width="40" height="45" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; transform: translateY(10px);">
                                    <path d="M10 10 Q 30 15 45 45" stroke="#fff" stroke-width="2" stroke-linecap="round" fill="none"/>
                                    <path d="M35 43 L 45 45 L 43 35" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                                </svg>
                            </div>"""

second_card_old = """<div style="display: flex; align-items: flex-end; gap: 8px; margin-bottom: 20px; width: 100%; max-width: 380px;">
                                <span style="font-family: 'Just Another Hand', cursive; font-size: 2.2rem; color: #fff; transform: rotate(-5deg); display: inline-block;">For career switchers & job seekers</span>
                                <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(60deg) translateY(-10px);">
                                    <path d="M10 10C20 20 40 40 50 50" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M30 50C40 50 48 50 50 50C50 48 50 40 50 30" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>"""

second_card_new = """<div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 20px; width: 100%; max-width: 380px;">
                                <span style="font-family: 'Just Another Hand', cursive; font-size: 2.2rem; color: #fff; display: inline-block; flex: 1; text-align: left; line-height: 1;">For career switchers &amp; job seekers</span>
                                <svg width="40" height="45" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0; transform: translateY(10px);">
                                    <path d="M10 10 Q 30 15 45 45" stroke="#fff" stroke-width="2" stroke-linecap="round" fill="none"/>
                                    <path d="M35 43 L 45 45 L 43 35" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                                </svg>
                            </div>"""

text = text.replace(first_card_old, first_card_new)
text = text.replace(second_card_old, second_card_new)

with open("index_v2.html", "w") as f:
    f.write(text)

print("Done")
