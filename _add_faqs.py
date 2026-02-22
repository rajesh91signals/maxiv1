import re

with open("index_v2.html", "r") as f:
    html = f.read()

# Replace the Bootcamp FAQ
bootcamp_faq_start = """<div class="pc-accordion" onclick="toggleAcceleratorAccordion('faq-details')">
                                <div class="pc-accordion-header">
                                    <div style="display:flex;align-items:center;gap:12px;">
                                        <div class="pc-accordion-icon"
                                            style="background:rgba(16,185,129,0.1);color:#10B981;">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2">
                                                <circle cx="12" cy="12" r="10" />
                                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                                <line x1="12" y1="17" x2="12.01" y2="17" />
                                            </svg>
                                        </div>
                                        <span class="pc-accordion-title">Frequently Asked Questions</span>
                                    </div>
                                    <span id="faq-details-icon" class="pc-accordion-chevron">+</span>
                                </div>
                                <div id="faq-details-content" class="pc-accordion-content">
                                    <div class="pc-accordion-body">
                                        <div class="pc-faq-item"><strong>Is this for beginners?</strong>
                                            <p>Yes, we start from foundations but move fast. Suitable for students and
                                                career switchers.</p>
                                        </div>
                                        <div class="pc-faq-item"><strong>What tools are taught?</strong>
                                            <p>Figma, Midjourney, NotebookLM, Jitter, Claude/GPT-4o, and agency-grade AI
                                                plugins.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>"""

bootcamp_new_faq = """<div class="pc-accordion" onclick="toggleAcceleratorAccordion('faq-details')">
                                <div class="pc-accordion-header">
                                    <div style="display:flex;align-items:center;gap:12px;">
                                        <div class="pc-accordion-icon" style="background:rgba(16,185,129,0.1);color:#10B981;">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <circle cx="12" cy="12" r="10" />
                                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                                <line x1="12" y1="17" x2="12.01" y2="17" />
                                            </svg>
                                        </div>
                                        <span class="pc-accordion-title">Frequently Asked Questions</span>
                                    </div>
                                    <span id="faq-details-icon" class="pc-accordion-chevron">+</span>
                                </div>
                                <div id="faq-details-content" class="pc-accordion-content">
                                    <div class="pc-accordion-body">
                                        <div class="pc-faq-item"><strong>Who is this program for?</strong>
                                            <p>For ambitious freshers, career switchers, pixel-pushers seeking complex work, and aspiring freelancers.</p>
                                        </div>
                                        <div class="pc-faq-item"><strong>What tools will I learn?</strong>
                                            <p>You will master an AI-native stack including NotebookLM, AI Studio, Figma AI, Jitter, and Claude/GPT-4o.</p>
                                        </div>
                                        <div class="pc-faq-item"><strong>What projects will I build?</strong>
                                            <p>You will build two industry-grade products: an E-Learning platform and a complex FinTech experience.</p>
                                        </div>
                                        <div class="pc-faq-item"><strong>Who are the mentors?</strong>
                                            <p>You'll learn from experienced practitioners and agency veterans who design, ship, and lead real products.</p>
                                        </div>
                                        <div class="pc-faq-item"><strong>Will this help me get a job?</strong>
                                            <p>Yes, the program focuses equally on craft, portfolio building, soft skills, and direct networking with founders to make you job-ready.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>"""

# Ensure exact copy from file
html = html.replace(bootcamp_faq_start, bootcamp_new_faq)
if bootcamp_new_faq not in html:
    print("WARNING: bootcamp FAQ not replaced. Check matching string.")


# Add fasttrack FAQ below the outline list
fasttrack_ul_end = 'Master story telling & ace interviews</li>\n                            </ul>'

jobbooster_faq = """
                            <div class="pc-accordion" onclick="toggleAcceleratorAccordion('ft-faq-details')">
                                <div class="pc-accordion-header">
                                    <div style="display:flex;align-items:center;gap:12px;">
                                        <div class="pc-accordion-icon" style="background:rgba(183,110,121,0.1);color:#B76E79;">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <circle cx="12" cy="12" r="10" />
                                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                                <line x1="12" y1="17" x2="12.01" y2="17" />
                                            </svg>
                                        </div>
                                        <span class="pc-accordion-title">Frequently Asked Questions</span>
                                    </div>
                                    <span id="ft-faq-details-icon" class="pc-accordion-chevron">+</span>
                                </div>
                                <div id="ft-faq-details-content" class="pc-accordion-content">
                                    <div class="pc-accordion-body">
                                        <div class="pc-faq-item"><strong>Who is the Job Booster program for?</strong>
                                            <p>It is ideal for designers with basic training, self-taught designers, or career switchers struggling to get interviews.</p>
                                        </div>
                                        <div class="pc-faq-item"><strong>What can I expect in 30 days?</strong>
                                            <p>You will have a recruiter-ready portfolio, strong storytelling, a structured job strategy, and active interview calls.</p>
                                        </div>
                                        <div class="pc-faq-item"><strong>Is this a purely self-paced course?</strong>
                                            <p>No, you receive dedicated career mentoring, 3 live 1:1 sessions, weekly group coaching, and portfolio review clinics.</p>
                                        </div>
                                        <div class="pc-faq-item"><strong>Does the program help me find jobs?</strong>
                                            <p>We provide structured job search execution, weekly recruiter profile drops, and private hiring network access.</p>
                                        </div>
                                        <div class="pc-faq-item"><strong>How do I enroll in the program?</strong>
                                            <p>Start with a Career Consultation & Assessment, which includes a portfolio audit and an improvement report.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
"""

html = html.replace(fasttrack_ul_end, fasttrack_ul_end + jobbooster_faq)

with open("index_v2.html", "w") as f:
    f.write(html)
print("Done")
