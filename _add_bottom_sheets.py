import re

with open("index_v2.html", "r") as f:
    html = f.read()

def replace_accordion_with_trigger(html, accordion_id, title_text, icon_html):
    pattern = rf'<div class="pc-accordion" onclick="toggleAcceleratorAccordion\(\'{accordion_id}\'\)">.*?<div id="{accordion_id}-content" class="pc-accordion-content">.*?<div class="pc-accordion-body">(.*?)</div>\s*</div>\s*</div>'
    
    match = re.search(pattern, html, flags=re.DOTALL)
    if not match:
        print(f"Warning: {accordion_id} not found")
        return html, ""
        
    content = match.group(1).strip()
    
    trigger_btn = f"""<button class="bs-trigger" onclick="openBottomSheet('sheet-{accordion_id}')">
                                <div style="display:flex;align-items:center;gap:12px;">
                                    {icon_html}
                                    <span class="bs-trigger-title">{title_text}</span>
                                </div>
                                <span class="bs-trigger-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                </span>
                            </button>"""
                            
    new_html = html[:match.start()] + trigger_btn + html[match.end():]
    
    sheet_html = f"""
    <!-- Bottom Sheet: {accordion_id} -->
    <div class="bottom-sheet-overlay" id="sheet-{accordion_id}" onclick="closeBottomSheet('sheet-{accordion_id}')">
        <div class="bottom-sheet-content" onclick="event.stopPropagation()">
            <div class="bs-header">
                <h3>{title_text}</h3>
                <button class="bs-close" onclick="closeBottomSheet('sheet-{accordion_id}')">&times;</button>
            </div>
            <div class="bs-body">
                {content}
            </div>
        </div>
    </div>
    """
    
    return new_html, sheet_html

# 1. Bootcamp Curriculum
curriculum_icon = """<div class="pc-accordion-icon" style="background:rgba(75,139,245,0.1);color:#4B8BF5;">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                        </svg>
                                    </div>"""
html, sheet_curriculum = replace_accordion_with_trigger(html, "curriculum-details", "Full 12-Week Curriculum", curriculum_icon)

# 2. Bootcamp FAQ
faq_icon = """<div class="pc-accordion-icon" style="background:rgba(16,185,129,0.1);color:#10B981;">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                            <line x1="12" y1="17" x2="12.01" y2="17" />
                                        </svg>
                                    </div>"""
html, sheet_faq = replace_accordion_with_trigger(html, "faq-details", "Frequently Asked Questions", faq_icon)

# 3. FastTrack FAQ
ft_faq_icon = """<div class="pc-accordion-icon" style="background:rgba(183,110,121,0.1);color:#B76E79;">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                            <line x1="12" y1="17" x2="12.01" y2="17" />
                                        </svg>
                                    </div>"""
html, sheet_ft_faq = replace_accordion_with_trigger(html, "ft-faq-details", "Frequently Asked Questions", ft_faq_icon)

# Add sheets to end of body
sheets_container = f"\n{sheet_curriculum}\n{sheet_faq}\n{sheet_ft_faq}\n</body>"
html = html.replace("</body>", sheets_container)

# Add JS functions for bottom sheets
js_snippet = """
    <script>
        function openBottomSheet(id) {
            document.getElementById(id).classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeBottomSheet(id) {
            document.getElementById(id).classList.remove('active');
            document.body.style.overflow = '';
        }
    </script>
"""
html = html.replace("</body>", js_snippet + "\n</body>")

with open("index_v2.html", "w") as f:
    f.write(html)

# Add CSS to styles.css
css_snippet = """
/* Bottom Sheet Trigger Button */
.bs-trigger {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 20px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: left;
    margin-bottom: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.02);
}

.bs-trigger:hover {
    background: #f8fafc;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.05);
}

.bs-trigger-title {
    font-size: 1.05rem;
    font-weight: 700;
    color: #1e293b;
}

.bs-trigger-icon {
    color: #94a3b8;
    transition: transform 0.2s ease;
    display: flex;
}

.bs-trigger:hover .bs-trigger-icon {
    transform: translateX(4px);
    color: #0f172a;
}

/* Bottom Sheet Modal / Side Pane */
.bottom-sheet-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(4px);
    z-index: 9999;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease;
    display: flex;
    justify-content: flex-end; /* right aligned like a side pane on desktop */
}

.bottom-sheet-overlay.active {
    visibility: visible;
    opacity: 1;
}

.bottom-sheet-content {
    background: #ffffff;
    width: 100%;
    max-width: 450px; /* Side panel width on desktop */
    height: 100%;
    display: flex;
    flex-direction: column;
    transform: translateX(100%); /* Slide in from right */
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: -10px 0 40px rgba(0,0,0,0.1);
}

.bottom-sheet-overlay.active .bottom-sheet-content {
    transform: translateX(0);
}

/* Mobile responsive - converts to true bottom sheet */
@media (max-width: 768px) {
    .bottom-sheet-overlay {
        align-items: flex-end; /* align to bottom on mobile */
        justify-content: center;
    }
    
    .bottom-sheet-content {
        max-width: 100%;
        height: 85vh; /* 85% of screen height */
        border-radius: 24px 24px 0 0;
        transform: translateY(100%); /* Slide up from bottom */
    }
    
    .bottom-sheet-overlay.active .bottom-sheet-content {
        transform: translateY(0);
    }
}

.bs-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 30px;
    border-bottom: 1px solid #e2e8f0;
}

.bs-header h3 {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 700;
    color: #0f172a;
}

.bs-close {
    background: #f1f5f9;
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #64748b;
    transition: all 0.2s;
}

.bs-close:hover {
    background: #e2e8f0;
    color: #0f172a;
}

.bs-body {
    padding: 30px;
    overflow-y: auto;
    flex: 1;
}

/* Reuse accordion interior styles for bs-body */
.bs-body .pc-phase {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 16px;
}
.bs-body .pc-phase-label {
    font-size: 0.95rem;
    font-weight: 700;
    display: block;
    margin-bottom: 12px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
}
.bs-body .pc-phase ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.bs-body .pc-phase li {
    font-size: 0.95rem;
    color: #475569;
    display: flex;
    align-items: center;
    gap: 8px;
}
.bs-body .pc-faq-item {
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #f1f5f9;
}
.bs-body .pc-faq-item:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
}
.bs-body .pc-faq-item strong {
    display: block;
    color: #1e293b;
    font-size: 1.05rem;
    margin-bottom: 8px;
}
.bs-body .pc-faq-item p {
    color: #475569;
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;
}
"""

with open("styles.css", "a") as f:
    f.write(css_snippet)

print("Done")
