import re

with open("index_v2.html", "r") as f:
    html = f.read()

# Update the ul styling
ul_start = '<ul class="pc-outline-list">'
ul_end = '</ul>\n\n                            <div class="pc-accordion" onclick="toggleAcceleratorAccordion(\'faq-details\')">'

ul_replacement = """<ul class="pc-clean-list">
                                <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2ebc15"
                                        stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg> AI Powered job fit analysis</li>
                                <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2ebc15"
                                        stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg> Get 1:1 expert guidance</li>
                                <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2ebc15"
                                        stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg> Learn agency level Pro skills</li>
                                <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2ebc15"
                                        stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg> Master story telling</li>
                                <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2ebc15"
                                        stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg> Ace interviews</li>
                            </ul>

                            <div class="pc-accordion" onclick="toggleAcceleratorAccordion('curriculum-details')">
                                <div class="pc-accordion-header">
                                    <div style="display:flex;align-items:center;gap:12px;">
                                        <div class="pc-accordion-icon"
                                            style="background:rgba(75,139,245,0.1);color:#4B8BF5;">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2">
                                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                            </svg>
                                        </div>
                                        <span class="pc-accordion-title">Full 12-Week Curriculum</span>
                                    </div>
                                    <span id="curriculum-details-icon" class="pc-accordion-chevron">+</span>
                                </div>
                                <div id="curriculum-details-content" class="pc-accordion-content">
                                    <div class="pc-accordion-body">
                                        <div class="pc-phase"><span class="pc-phase-label" style="color:#4B8BF5;">Phase
                                                1 &middot; Build the Base</span>
                                            <ul>
                                                <li>&bull; AI Research &amp; Identity Shift</li>
                                                <li>&bull; NotebookLM &amp; Advanced Search</li>
                                                <li>&bull; Visual Language &amp; Jitter Motion</li>
                                            </ul>
                                        </div>
                                        <div class="pc-phase"><span class="pc-phase-label" style="color:#10B981;">Phase
                                                2 &middot; Master Systems</span>
                                            <ul>
                                                <li>&bull; SaaS Architecture &amp; FinTech</li>
                                                <li>&bull; Component Libraries (AI Gen)</li>
                                                <li>&bull; Complex Design Patterns</li>
                                            </ul>
                                        </div>
                                        <div class="pc-phase"><span class="pc-phase-label" style="color:#F59E0B;">Phase
                                                3 &middot; Deep Work &amp; Career</span>
                                            <ul>
                                                <li>&bull; Portfolio Crafting (AI Pitch)</li>
                                                <li>&bull; Mock Interviews (Agency Focus)</li>
                                                <li>&bull; Graduation &amp; Job Placement</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="pc-accordion" onclick="toggleAcceleratorAccordion('faq-details')">"""

start = html.find(ul_start)
end = html.find(ul_end, start) + len(ul_end)
html = html[:start] + ul_replacement + html[end:]

with open("index_v2.html", "w") as f:
    f.write(html)
