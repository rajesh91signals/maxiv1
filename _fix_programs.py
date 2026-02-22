#!/usr/bin/env python3
# Fix broken programs section in index_v2.html

with open('index_v2.html', 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = '            <div class="program-stack">'
end_marker = '    </section> <!-- programs-section -->'

start_idx = content.find(start_marker)
end_idx = content.find(end_marker) + len(end_marker)

if start_idx == -1:
    print('ERROR: start marker not found')
    exit(1)
if end_idx < len(end_marker):
    print('ERROR: end marker not found')
    exit(1)

print(f'Found section: chars {start_idx}-{end_idx}')

new_section = '''            <div class="program-stack">

                <!-- ===== CARD 1: 12-Week Bootcamp ===== -->
                <div class="program-card-wrapper">
                    <div class="program-card" id="accelerator-program">

                        <div class="card-content-side">
                            <div class="card-tag-row">
                                <span class="tag" style="background:rgba(197,160,89,0.15);color:#C5A059;border:1px solid rgba(197,160,89,0.3);margin-bottom:0;">12 Week Cohort</span>
                                <span class="tag" style="background:rgba(16,185,129,0.15);color:#10B981;border:1px solid rgba(16,185,129,0.25);margin-bottom:0;">Live + On-Demand</span>
                            </div>

                            <div class="card-header-row">
                                <div class="card-icon-badge" style="background:rgba(197,160,89,0.1);border:1px solid rgba(197,160,89,0.25);color:#C5A059;">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.5-1 1-4c1.5 0 3 0 3 0"/><path d="M15 15v5s-1 .5-4 1c0-1.5 0-3 0-3"/></svg>
                                </div>
                                <h3 style="font-size:1.8rem;margin:0;color:#1e293b;font-weight:700;">AI-UX Accelerator</h3>
                            </div>

                            <p class="card-description">Master the rare blend of AI-driven design and real agency workflows. Compress 40 hours of work into 4 and build a portfolio that stands out.</p>

                            <div class="audience-grid">
                                <div class="audience-box">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C5A059" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                                    <span>Junior Designers</span>
                                </div>
                                <div class="audience-box">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C5A059" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                    <span>Seasoned UX</span>
                                </div>
                            </div>

                            <div class="pc-accordion" onclick="toggleAcceleratorAccordion(\'curriculum-details\')">
                                <div class="pc-accordion-header">
                                    <div style="display:flex;align-items:center;gap:12px;">
                                        <div class="pc-accordion-icon" style="background:rgba(75,139,245,0.1);color:#4B8BF5;">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                                        </div>
                                        <span class="pc-accordion-title">Full 12-Week Curriculum</span>
                                    </div>
                                    <span id="curriculum-details-icon" class="pc-accordion-chevron">+</span>
                                </div>
                                <div id="curriculum-details-content" class="pc-accordion-content">
                                    <div class="pc-accordion-body">
                                        <div class="pc-phase"><span class="pc-phase-label" style="color:#4B8BF5;">Phase 1 &middot; Build the Base</span><ul><li>&bull; AI Research &amp; Identity Shift</li><li>&bull; NotebookLM &amp; Advanced Search</li><li>&bull; Visual Language &amp; Jitter Motion</li></ul></div>
                                        <div class="pc-phase"><span class="pc-phase-label" style="color:#10B981;">Phase 2 &middot; Master Systems</span><ul><li>&bull; SaaS Architecture &amp; FinTech</li><li>&bull; Component Libraries (AI Gen)</li><li>&bull; Complex Design Patterns</li></ul></div>
                                        <div class="pc-phase"><span class="pc-phase-label" style="color:#F59E0B;">Phase 3 &middot; Deep Work &amp; Career</span><ul><li>&bull; Portfolio Crafting (AI Pitch)</li><li>&bull; Mock Interviews (Agency Focus)</li><li>&bull; Graduation &amp; Job Placement</li></ul></div>
                                    </div>
                                </div>
                            </div>

                            <div class="pc-accordion" onclick="toggleAcceleratorAccordion(\'faq-details\')">
                                <div class="pc-accordion-header">
                                    <div style="display:flex;align-items:center;gap:12px;">
                                        <div class="pc-accordion-icon" style="background:rgba(16,185,129,0.1);color:#10B981;">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                                        </div>
                                        <span class="pc-accordion-title">Frequently Asked Questions</span>
                                    </div>
                                    <span id="faq-details-icon" class="pc-accordion-chevron">+</span>
                                </div>
                                <div id="faq-details-content" class="pc-accordion-content">
                                    <div class="pc-accordion-body">
                                        <div class="pc-faq-item"><strong>Is this for beginners?</strong><p>Yes, we start from foundations but move fast. Suitable for students and career switchers.</p></div>
                                        <div class="pc-faq-item"><strong>What tools are taught?</strong><p>Figma, Midjourney, NotebookLM, Jitter, Claude/GPT-4o, and agency-grade AI plugins.</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card-visual-side">
                            <img src="bootcamp_visual_card_1771704501851.png" alt="AI UX Bootcamp" class="main-visual">
                            <div class="floating-pricing">
                                <span class="fp-label">March cohort &middot; Limited seats</span>
                                <div class="fp-price-row">
                                    <span class="fp-strike">&#8377;1,00,000</span>
                                    <span class="fp-price">&#8377;75,000</span>
                                </div>
                                <span class="fp-save-badge">Save &#8377;25k</span>
                                <ul class="fp-benefits">
                                    <li><span class="fp-check gold">&#10003;</span> Practitioner-Led Live Training</li>
                                    <li><span class="fp-check gold">&#10003;</span> Build 2 Industrial Grade Projects</li>
                                    <li><span class="fp-check gold">&#10003;</span> Master AI-Native Workflows</li>
                                    <li><span class="fp-check gold">&#10003;</span> Agency Grade Craft</li>
                                </ul>
                                <button class="cta-button flagship-btn fp-cta">Enroll Now for &#8377;1,000</button>
                                <div class="fp-trust">
                                    <span class="fp-avatars">
                                        <img src="https://i.pravatar.cc/100?img=11" alt="">
                                        <img src="https://i.pravatar.cc/100?img=12" alt="">
                                        <img src="https://i.pravatar.cc/100?img=13" alt="">
                                    </span>
                                    <span>300+ designers joining</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <!-- ===== CARD 2: 30-Day FastTrack ===== -->
                <div class="program-card-wrapper">
                    <div class="program-card" id="fasttrack-program">

                        <div class="card-content-side">
                            <div class="card-tag-row">
                                <span class="tag" style="background:rgba(183,110,121,0.1);color:#B76E79;border:1px solid rgba(183,110,121,0.3);margin-bottom:0;">30 Day FastTrack</span>
                                <span class="tag" style="background:rgba(16,185,129,0.1);color:#10B981;border:1px solid rgba(16,185,129,0.25);margin-bottom:0;">Outcome Focused</span>
                            </div>

                            <div class="card-header-row">
                                <div class="card-icon-badge" style="background:rgba(183,110,121,0.1);border:1px solid rgba(183,110,121,0.25);color:#B76E79;">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m13 2-2 10h8L7 22l2-10H1L13 2z"/></svg>
                                </div>
                                <h3 style="font-size:1.8rem;margin:0;color:#1e293b;font-weight:700;">UX FastTrack Accelerator</h3>
                            </div>

                            <p class="card-description">High-intensity career acceleration for designers needing faster results. Get interview ready and land offers with expert mentoring in just 30 days.</p>

                            <div class="audience-grid">
                                <div class="audience-box">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B76E79" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                                    <span>Career Switchers</span>
                                </div>
                                <div class="audience-box">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B76E79" stroke-width="2"><path d="M12 2v20"/><path d="m17 7-5-5-5 5"/><path d="m17 17-5 5-5-5"/></svg>
                                    <span>Active Job Seekers</span>
                                </div>
                            </div>

                            <div class="pc-accordion" onclick="toggleAcceleratorAccordion(\'ft-curriculum\')">
                                <div class="pc-accordion-header">
                                    <div style="display:flex;align-items:center;gap:12px;">
                                        <div class="pc-accordion-icon" style="background:rgba(75,139,245,0.1);color:#4B8BF5;">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                                        </div>
                                        <span class="pc-accordion-title">30-Day Execution Roadmap</span>
                                    </div>
                                    <span id="ft-curriculum-icon" class="pc-accordion-chevron">+</span>
                                </div>
                                <div id="ft-curriculum-content" class="pc-accordion-content">
                                    <div class="pc-accordion-body" style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
                                        <div class="pc-phase"><span class="pc-phase-label" style="color:#4B8BF5;">Week 1 &middot; Diagnose &amp; Position</span><ul><li>&bull; Portfolio Gap Analysis</li><li>&bull; Personal Brand Identity</li><li>&bull; LinkedIn Optimization</li></ul></div>
                                        <div class="pc-phase"><span class="pc-phase-label" style="color:#10B981;">Week 2 &middot; Transformation</span><ul><li>&bull; UX Storytelling Framework</li><li>&bull; Metric Narrative Building</li><li>&bull; Expert Iteration Rounds</li></ul></div>
                                        <div class="pc-phase"><span class="pc-phase-label" style="color:#8B5CF6;">Week 3 &middot; Interview Ready</span><ul><li>&bull; Product Thinking Playbook</li><li>&bull; Whiteboard Mock Sessions</li><li>&bull; Confidence Coaching</li></ul></div>
                                        <div class="pc-phase"><span class="pc-phase-label" style="color:#F59E0B;">Week 4 &middot; Hiring Access</span><ul><li>&bull; Recruiter Profile Drops</li><li>&bull; Private Network Intro</li><li>&bull; Job Search Execution</li></ul></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card-visual-side">
                            <img src="fasttrack_visual_card_1771704523704.png" alt="UX FastTrack" class="main-visual">
                            <div class="floating-pricing">
                                <span class="fp-label">Monthly Enrollment &middot; Limited Seats</span>
                                <div class="fp-price-row">
                                    <span class="fp-strike">&#8377;45,000</span>
                                    <span class="fp-price">&#8377;30,000</span>
                                </div>
                                <span class="fp-save-badge" style="background:rgba(183,110,121,0.9);">Save &#8377;15k</span>
                                <div class="fp-step-box">
                                    <span class="fp-step-label">Step 1</span>
                                    <strong>Career Consultation</strong>
                                    <span>1:1 Audit &amp; Assessment for <b>&#8377;1,000</b></span>
                                </div>
                                <ul class="fp-benefits">
                                    <li><span class="fp-check rose">&#10003;</span> 3 Live 1:1 Mentoring Sessions</li>
                                    <li><span class="fp-check rose">&#10003;</span> Recruiter Network Access</li>
                                    <li><span class="fp-check rose">&#10003;</span> Mock Interview Feedback</li>
                                    <li><span class="fp-check rose">&#10003;</span> Portfolio Gap Audit</li>
                                </ul>
                                <button class="cta-button jb-btn fp-cta">Book Consultation</button>
                                <div class="fp-trust">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                                    <span>Instant confirmation</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div> <!-- /program-stack -->

            <div class="mentor-badge" style="margin-top: 80px;">
                <span class="mentor-badge-text">Our designers &amp; mentors have worked with</span>
                <div class="mentor-logos-tiny">
                    <img src="https://www.vectorlogo.zone/logos/google/google-ar21.svg" alt="Google">
                    <img src="https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg" alt="Amazon">
                    <img src="https://www.vectorlogo.zone/logos/ey/ey-ar21.svg" alt="EY">
                    <img src="https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg" alt="Microsoft">
                    <img src="https://www.vectorlogo.zone/logos/flipkart/flipkart-ar21.svg" alt="Flipkart">
                    <img src="https://www.vectorlogo.zone/logos/sandisk/sandisk-ar21.svg" alt="SanDisk">
                </div>
            </div>

        </div> <!-- /container -->
    </section> <!-- programs-section -->'''

new_content = content[:start_idx] + new_section + content[end_idx:]

with open('index_v2.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Done! Programs section replaced successfully.')
print(f'Original size: {len(content)} chars, New size: {len(new_content)} chars')
