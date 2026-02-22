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

# Bootcamp Card
bootcamp_start = '<div class="floating-pricing">'
bootcamp_end = '<span>300+ designers joining</span>\n                                </div>'
bootcamp_replacement = """<div class="floating-pricing">
                                <ul class="fp-benefits" style="margin-top:0;">
                                    <li><span class="fp-check gold">&#10003;</span> Practitioner-Led Live Training</li>
                                    <li><span class="fp-check gold">&#10003;</span> Build 2 Industrial Grade Projects</li>
                                    <li><span class="fp-check gold">&#10003;</span> Master AI-Native Workflows</li>
                                    <li><span class="fp-check gold">&#10003;</span> Agency Grade Craft</li>
                                </ul>
                                
                                <div class="fp-action-box">
                                    <span class="fp-label">March cohort &middot; Limited seats</span>
                                    <div style="display: flex; justify-content: space-between; align-items: flex-end;">
                                        <div class="fp-price-row">
                                            <span class="fp-strike">&#8377;1,00,000</span>
                                            <span class="fp-price">&#8377;75,000</span>
                                        </div>
                                        <span class="fp-save-badge">Save &#8377;25k</span>
                                    </div>
                                    <button class="cta-button flagship-btn fp-cta">Enroll</button>
                                    <div class="fp-trust">
                                        <span class="fp-avatars">
                                            <img src="https://i.pravatar.cc/100?img=11" alt="">
                                            <img src="https://i.pravatar.cc/100?img=12" alt="">
                                            <img src="https://i.pravatar.cc/100?img=13" alt="">
                                        </span>
                                        <span>300+ designers joining</span>
                                    </div>
                                </div>"""

html = replace_between(html, bootcamp_start, bootcamp_end, bootcamp_replacement)

# Fasttrack Card
fasttrack_start = '<div class="floating-pricing">'
fasttrack_end = '<span>Instant confirmation</span>\n                                </div>'
fasttrack_replacement = """<div class="floating-pricing">
                                <ul class="fp-benefits" style="margin-top:0;">
                                    <li><span class="fp-check rose">&#10003;</span> 3 Live 1:1 Mentoring Sessions</li>
                                    <li><span class="fp-check rose">&#10003;</span> Recruiter Network Access</li>
                                    <li><span class="fp-check rose">&#10003;</span> Mock Interview Feedback</li>
                                    <li><span class="fp-check rose">&#10003;</span> Portfolio Gap Audit</li>
                                </ul>

                                <div class="fp-action-box">
                                    <span class="fp-label">Monthly Enrollment &middot; Limited Seats</span>
                                    <div style="display: flex; justify-content: space-between; align-items: flex-end;">
                                        <div class="fp-price-row">
                                            <span class="fp-strike">&#8377;45,000</span>
                                            <span class="fp-price">&#8377;30,000</span>
                                        </div>
                                        <span class="fp-save-badge" style="background:rgba(183,110,121,0.1);color:#B76E79;border:1px solid rgba(183,110,121,0.25);">Save &#8377;15k</span>
                                    </div>
                                    <button class="cta-button jb-btn fp-cta" style="display:flex; flex-direction:column; padding: 14px 20px; text-align: left; gap: 4px;">
                                        <div style="font-size: 0.75rem; color: #94a3b8; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Step 1 &middot; Career Consultation</div>
                                        <div style="font-size: 1.05rem; font-weight: 700;">Book 1:1 Audit for &#8377;1,000</div>
                                    </button>
                                    <div class="fp-trust">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                        <span>Instant confirmation</span>
                                    </div>
                                </div>"""

html = replace_between(html, fasttrack_start, fasttrack_end, fasttrack_replacement)

with open("index_v2.html", "w") as f:
    f.write(html)

css_addition = """
/* Action Box */
.fp-action-box {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 4px;
}
"""

with open("styles.css", "a") as f:
    f.write(css_addition)
