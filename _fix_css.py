#!/usr/bin/env python3

with open('styles.css', 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = '/* Stacked Cards Layout */'
# Find the end: the programs-comparison-grid block starts a bit further
# Use a marker that comes AFTER all the old program card clutter
end_marker = '/* Programs Stacked Layout (Light Theme) */'

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1:
    print('ERROR: start marker not found')
    # Try to find it
    print(content[25000:26500])
    exit(1)

if end_idx == -1:
    print('ERROR: end marker not found, searching...')
    # Show around for manual identification
    print(content[29000:31000])
    exit(1)

print(f'Replacing CSS chars {start_idx} to {end_idx}')

new_css = '''/* ============================================================
   PROGRAM CARDS - STACKED LAYOUT
   ============================================================ */

.programs-section {
    padding: 100px 0 220px;
    background: #fafaf8;
    overflow: visible;
}

/* Stack container */
.program-stack {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    margin-top: 64px;
}

/* Sticky wrapper - each card sticks at top as you scroll */
.program-card-wrapper {
    position: sticky;
    top: 100px;
    width: 100%;
    max-width: 1220px;
    margin-bottom: 280px;
    will-change: transform;
    transform-origin: top center;
}

.program-card-wrapper:last-child {
    margin-bottom: 80px;
}

/* The card itself */
.program-card {
    background: #ffffff;
    border-radius: 48px;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    min-height: 700px;
    overflow: hidden;
    box-shadow:
        0 4px 6px -1px rgba(0,0,0,0.04),
        0 20px 50px -10px rgba(0,0,0,0.08),
        0 40px 80px -20px rgba(0,0,0,0.06);
    border: 1px solid rgba(0,0,0,0.05);
    transition: box-shadow 0.4s ease;
}

.program-card:hover {
    box-shadow:
        0 4px 6px -1px rgba(0,0,0,0.06),
        0 25px 60px -10px rgba(0,0,0,0.12),
        0 50px 100px -20px rgba(0,0,0,0.08);
}

/* Left content column */
.card-content-side {
    padding: 56px 52px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    background: #ffffff;
}

/* Icon badge next to heading */
.card-icon-badge {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.card-header-row {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 4px;
}

.card-tag-row {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 4px;
}

.card-description {
    color: #64748b;
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;
}

/* Audience pills */
.audience-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
}

.audience-box {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 10px 14px;
    font-size: 0.82rem;
    font-weight: 600;
    color: #475569;
}

/* ==== Accordion ==== */
.pc-accordion {
    background: #f8fafc;
    border: 1px solid #e8edf4;
    border-radius: 14px;
    overflow: hidden;
    cursor: pointer;
    transition: border-color 0.2s;
}

.pc-accordion:hover {
    border-color: #cbd5e1;
}

.pc-accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
}

.pc-accordion-icon {
    width: 30px;
    height: 30px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.pc-accordion-title {
    font-size: 0.95rem;
    font-weight: 600;
    color: #1e293b;
}

.pc-accordion-chevron {
    font-size: 1.1rem;
    color: #94a3b8;
    transition: transform 0.3s ease;
    line-height: 1;
    font-weight: 300;
}

.pc-accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    background: #ffffff;
    border-top: 0px solid #e8edf4;
}

.pc-accordion-content.open {
    max-height: 600px;
    border-top-width: 1px;
}

.pc-accordion-body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.pc-phase {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.pc-phase-label {
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
}

.pc-phase ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 3px;
    color: #64748b;
    font-size: 0.875rem;
    line-height: 1.5;
}

.pc-faq-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.pc-faq-item strong {
    color: #334155;
    font-size: 0.9rem;
}

.pc-faq-item p {
    color: #64748b;
    font-size: 0.85rem;
    margin: 0;
    line-height: 1.5;
}

/* ==== Right: Visual + Floating Pricing ==== */
.card-visual-side {
    position: relative;
    background: #0f172a;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-visual-side img.main-visual {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.72;
    transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.program-card:hover .main-visual {
    transform: scale(1.06);
}

/* Floating glassmorphic pricing card */
.floating-pricing {
    position: relative;
    z-index: 2;
    width: 82%;
    max-width: 340px;
    padding: 36px;
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(28px);
    -webkit-backdrop-filter: blur(28px);
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 32px;
    color: white;
    box-shadow:
        0 8px 32px rgba(0,0,0,0.3),
        inset 0 1px 0 rgba(255,255,255,0.1);
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-align: left;
}

.fp-label {
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: rgba(255,255,255,0.6);
}

.fp-price-row {
    display: flex;
    align-items: baseline;
    gap: 10px;
}

.fp-strike {
    font-size: 1rem;
    text-decoration: line-through;
    color: rgba(255,255,255,0.4);
}

.fp-price {
    font-size: 2rem;
    font-weight: 800;
    color: #ffffff;
    line-height: 1;
}

.fp-save-badge {
    display: inline-block;
    background: rgba(16,185,129,0.8);
    color: white;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    padding: 4px 12px;
    border-radius: 100px;
    align-self: flex-start;
}

.fp-step-box {
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 14px;
    padding: 14px 16px;
    display: flex;
    flex-direction: column;
    gap: 3px;
}

.fp-step-label {
    font-size: 0.65rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(183,110,121,0.9);
}

.fp-step-box strong {
    font-size: 0.9rem;
    color: white;
}

.fp-step-box span {
    font-size: 0.8rem;
    color: rgba(255,255,255,0.6);
}

.fp-benefits {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 7px;
    font-size: 0.85rem;
    color: rgba(255,255,255,0.85);
}

.fp-benefits li {
    display: flex;
    align-items: center;
    gap: 8px;
}

.fp-check {
    font-size: 0.75rem;
    font-weight: 700;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.fp-check.gold {
    background: rgba(197,160,89,0.25);
    color: #E8C46A;
    border: 1px solid rgba(197,160,89,0.4);
}

.fp-check.rose {
    background: rgba(183,110,121,0.25);
    color: #E8A0AD;
    border: 1px solid rgba(183,110,121,0.4);
}

.fp-cta {
    width: 100%;
    text-align: center;
    margin-top: 4px;
}

.fp-trust {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.72rem;
    color: rgba(255,255,255,0.55);
    justify-content: center;
}

.fp-avatars {
    display: flex;
    margin-left: 6px;
}

.fp-avatars img {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2px solid rgba(255,255,255,0.3);
    margin-left: -8px;
    object-fit: cover;
}

/* Responsive */
@media (max-width: 1024px) {
    .program-card {
        grid-template-columns: 1fr;
        min-height: auto;
    }
    .card-visual-side {
        height: 480px;
    }
    .program-card-wrapper {
        margin-bottom: 120px;
    }
}

@media (max-width: 768px) {
    .card-content-side {
        padding: 40px 32px;
    }
    .floating-pricing {
        width: 88%;
        padding: 28px;
    }
    .program-card-wrapper {
        top: 80px;
    }
}

'''

new_content = content[:start_idx] + new_css + content[end_idx:]

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Done! CSS updated successfully.')
print(f'Original: {len(content)} chars, New: {len(new_content)} chars')
