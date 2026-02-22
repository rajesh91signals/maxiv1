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

# Replace Card 1 Curriculum Accordion
acc1_start = '<div class="pc-accordion" onclick="toggleAcceleratorAccordion(\'curriculum-details\')">'
acc1_end = '</div>\n                            </div>\n\n                            <div class="pc-accordion" onclick="toggleAcceleratorAccordion(\'faq-details\')">'

acc1_replacement = """<ul class="pc-outline-list">
                                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <strong>Phase 1:</strong> Build the Base</li>
                                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <strong>Phase 2:</strong> Master Systems</li>
                                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <strong>Phase 3:</strong> Deep Work & Career</li>
                            </ul>

                            <div class="pc-accordion" onclick="toggleAcceleratorAccordion('faq-details')">"""

html = replace_between(html, acc1_start, acc1_end, acc1_replacement)

# Replace Card 2 Curriculum Accordion
acc2_start = '<div class="pc-accordion" onclick="toggleAcceleratorAccordion(\'ft-curriculum\')">'
acc2_end = '</div>\n                            </div>\n                        </div>\n\n                        <div class="card-visual-side">'

acc2_replacement = """<ul class="pc-outline-list ft-outline-list">
                                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <strong>Week 1:</strong> Diagnose & Position</li>
                                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <strong>Week 2:</strong> Transformation</li>
                                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <strong>Week 3:</strong> Interview Ready</li>
                                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <strong>Week 4:</strong> Hiring Access</li>
                            </ul>
                        </div>

                        <div class="card-visual-side">"""

html = replace_between(html, acc2_start, acc2_end, acc2_replacement)

with open("index_v2.html", "w") as f:
    f.write(html)

css_addition = """
/* Program Card Outline List */
.pc-outline-list {
    list-style: none;
    padding: 0;
    margin: 24px 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.pc-outline-list li {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.95rem;
    color: #475569;
    line-height: 1.4;
    background: #f8fafc;
    padding: 12px 16px;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
}

.pc-outline-list li svg {
    flex-shrink: 0;
    color: #C5A059; /* Bootcamp Theme */
}

.pc-outline-list.ft-outline-list li svg {
    color: #B76E79; /* FastTrack Theme */
}

.pc-outline-list li strong {
    color: #1e293b;
}

"""

with open("styles.css", "a") as f:
    f.write(css_addition)

print("Done")
