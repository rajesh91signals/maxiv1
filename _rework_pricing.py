import re

def replace_between(content, start_marker, end_marker, replacement):
    start = content.find(start_marker)
    if start == -1: return content
    end = content.find(end_marker, start)
    if end == -1: return content
    end += len(end_marker)
    return content[:start] + replacement + content[end:]

with open("index_v2.html", "r") as f:
    html = f.read()

# Bootcamp Card Pricing
bootcamp_start = '<div class="floating-pricing">'
bootcamp_end = '<span>300+ designers joining</span>\n                                    </div>\n                                </div>\n                            </div>'

bootcamp_replacement = """<div class="pricing-card pricing-blue">
                                <div class="pc-breakdown-pill">
                                    <div class="pc-breakdown-item">
                                        <div class="pc-b-title">12 Weeks<br>Bootcamp</div>
                                        <div class="pc-b-price">&#8377;70,000</div>
                                    </div>
                                    <div class="pc-b-plus">+</div>
                                    <div class="pc-breakdown-item">
                                        <div class="pc-b-title">90 Day Job<br>Booster</div>
                                        <div class="pc-b-price">&#8377;30,000</div>
                                    </div>
                                </div>
                                <div class="pc-green-badge">Enroll today and save &#8377;25,000</div>
                                
                                <div class="pc-strike-price">&#8377;1,00,000</div>
                                <div class="pc-big-price">&#8377;75,000</div>
                                
                                <button class="pc-black-btn">Send Enquiry</button>
                                <a href="#" class="pc-learn-more">Learn more</a>
                            </div>"""

html = replace_between(html, bootcamp_start, bootcamp_end, bootcamp_replacement)

# Fasttrack Card Pricing
fasttrack_start = '<div class="floating-pricing">'
fasttrack_end = '<span>Instant confirmation</span>\n                                    </div>\n                                </div>\n                            </div>'

fasttrack_replacement = """<div class="pricing-card pricing-yellow">
                                <div class="pc-top-pill">Book a session with design mentor</div>
                                
                                <div class="pc-strike-price pt-6">&#8377;2,500</div>
                                <div class="pc-big-price">&#8377;1,000</div>
                                
                                <div class="pc-green-badge-small">Save 20% Today</div>
                                
                                <button class="pc-black-btn mt-4">Book Now</button>
                                <a href="#" class="pc-learn-more block-link">Learn about job booster 30 day<br>program</a>
                            </div>"""

html = replace_between(html, fasttrack_start, fasttrack_end, fasttrack_replacement)

with open("index_v2.html", "w") as f:
    f.write(html)
