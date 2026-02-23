const fs = require('fs');
const htmlPath = '/Users/rajesh/Maximoat_antigravity/job_booster.html';
let html = fs.readFileSync(htmlPath, 'utf8');

// The boundaries
const split1 = html.indexOf('<!-- Bento Grid Section -->');
let split2 = html.indexOf('<div class="merged-features">', split1);
const split3 = html.indexOf('<!-- Pricing / Apply -->', split2);

if (split1 !== -1 && split2 !== -1 && split3 !== -1) {
    let bentoSection = html.substring(split1, split2);
    let mergedSection = html.substring(split2, split3);

    // We need to fix the bentoSection styling for light mode
    // 1. Section bg
    bentoSection = bentoSection.replace(/background: #11141c;/g, 'background: #ffffff;');

    // 2. .bento-card
    bentoSection = bentoSection.replace(
        /background: #11131a;\s*border: 1px solid rgba\(255, 255, 255, 0\.06\);\s*border-radius: 24px;\s*padding: 32px;\s*display: flex;\s*flex-direction: column;\s*box-shadow: inset 0 1px 1px rgba\(255, 255, 255, 0\.05\);/g,
        'background: #ffffff;\n                        border: 1px solid #e2e8f0;\n                        border-radius: 24px;\n                        padding: 32px;\n                        display: flex;\n                        flex-direction: column;\n                        box-shadow: 0 10px 30px rgba(0,0,0,0.05);'
    );

    // 3. .bento-title
    bentoSection = bentoSection.replace(/color: #e2e8f0;/g, 'color: #0f172a;');

    // 4. .job-box
    bentoSection = bentoSection.replace(/background: #181b24;/g, 'background: #f8fafc;');
    bentoSection = bentoSection.replace(/border: 1px solid rgba\(255, 255, 255, 0\.05\);/g, 'border: 1px solid #e2e8f0;');
    bentoSection = bentoSection.replace(/color: #cbd5e1;/g, 'color: #475569;');
    bentoSection = bentoSection.replace(/background: #1e222d;/g, 'background: #f1f5f9;'); // hover
    bentoSection = bentoSection.replace(/border-color: rgba\(255, 255, 255, 0\.1\);/g, 'border-color: #cbd5e1;'); // hover

    // 5. Card 4 Private Hiring Networks styles
    bentoSection = bentoSection.replace(/background:#09090b;/g, 'background:#f8fafc;');
    bentoSection = bentoSection.replace(/border:1px solid rgba\(255,255,255,0\.05\);/g, 'border:1px solid #e2e8f0;');
    bentoSection = bentoSection.replace(/background:#1e222d;/g, 'background:#e2e8f0;');
    bentoSection = bentoSection.replace(/color:#f8fafc;/g, 'color:#0f172a;');
    bentoSection = bentoSection.replace(/color:#94a3b8;/g, 'color:#475569;');
    bentoSection = bentoSection.replace(/border: 1px solid rgba\(255,255,255,0\.1\);/g, 'border: 1px solid #cbd5e1;');

    // gradient fade out text
    bentoSection = bentoSection.replace(/background: linear-gradient\(to top, #11131a, transparent\);/g, 'background: linear-gradient(to top, #ffffff, transparent);');

    // Re-swap them
    let finalHtml = html.substring(0, split1) + mergedSection + bentoSection + html.substring(split3);

    fs.writeFileSync(htmlPath, finalHtml);
    console.log("Swapped and styling updated!");
} else {
    console.log("Could not find boundaries.");
}
