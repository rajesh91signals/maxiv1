const fs = require('fs');
const htmlPath = '/Users/rajesh/Maximoat_antigravity/job_booster.html';
let html = fs.readFileSync(htmlPath, 'utf8');

const targetStart = `        <div class="profile-feature">
            <div class="pf-text">
                <span class="pf-tag"
                    style="background: rgba(79, 70, 229, 0.15); color: #818cf8; border: 1px solid rgba(79, 70, 229, 0.4);">Hiring`;

const targetEndSearch = `                    </div>
                </div>
            </div>
        </div>

        <div class="profile-feature" style="margin-top: 40px;">`;

const newStartBlock = `        <style>
            .merged-features {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 24px;
                margin-bottom: 60px;
            }
            @media (max-width: 900px) {
                .merged-features { grid-template-columns: 1fr; }
            }
        </style>

        <div class="merged-features">
            <!-- 1) We help build your portfolio -->
            <div style="background:#11131a; border: 1px solid rgba(255,255,255,0.06); border-radius:24px; box-shadow:inset 0 1px 1px rgba(255,255,255,0.05); padding:40px; display:flex; flex-direction:column;">
                <span class="pf-tag" style="background: rgba(217, 119, 6, 0.15); color: #fbbf24; border: 1px solid rgba(217, 119, 6, 0.4); margin-bottom: 20px; align-self: flex-start;">Portfolio Transformation</span>
                <h2 style="font-size: 2rem; color: #f8fafc; margin-bottom: 20px; line-height: 1.2;">We help <span style="color:#fbbf24;">build your portfolio.</span></h2>
                <p style="color: #94a3b8; font-size: 1.05rem; line-height: 1.6; margin-bottom: 32px;">Stop using generic bootcamp structures. We re-engineer your flagship case study to speak the language of product-led companies and prove business impact.</p>
                
                <div style="background:#09090b; border: 1px solid rgba(255,255,255,0.05); border-radius:16px; padding:24px; position:relative; overflow:hidden; margin-top: auto;">
                    <div style="background:#11131a; border:2px dashed rgba(255,255,255,0.1); border-radius:12px; height:80px; display:flex; align-items:center; justify-content:center; margin-bottom:20px;">
                        <span style="color:#64748b; font-size:0.9rem; font-weight:500;">Generic Case Study.pdf</span>
                    </div>
                    <div style="display:flex; justify-content:center; margin-bottom:20px;">
                        <span style="background:linear-gradient(135deg, #fbbf24 0%, #d97706 100%); color:#fff; padding:6px 14px; border-radius:20px; font-weight:bold; font-size:0.8rem; display:flex; align-items:center; gap:6px; box-shadow: 0 4px 12px rgba(217,119,6,0.2);">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 5v14M5 12l7 7 7-7" />
                            </svg>
                            Transform
                        </span>
                    </div>
                    <div style="background:#1e222d; border: 1px solid rgba(255,255,255,0.1); border-radius:12px; padding:20px; color:#fff;">
                        <span style="background:rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.3); color:#34d399; font-size:0.7rem; padding:4px 8px; border-radius:4px; font-weight:bold; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px; display:inline-block;">Hireable Asset</span>
                        <h4 style="margin:0 0 6px 0; font-size:1.05rem; color:#f8fafc;">B2B SaaS Growth Initiative</h4>
                        <div style="height:8px; width: 80%; background:rgba(255,255,255,0.1); border-radius:4px;"></div>
                    </div>
                </div>
            </div>

            <!-- 2) Prepare you for Job & Life -->
            <div style="background:#11131a; border: 1px solid rgba(255,255,255,0.06); border-radius:24px; box-shadow:inset 0 1px 1px rgba(255,255,255,0.05); padding:40px; display:flex; flex-direction:column;">
                <span class="pf-tag" style="background: rgba(79, 70, 229, 0.15); color: #818cf8; border: 1px solid rgba(79, 70, 229, 0.4); margin-bottom: 20px; align-self: flex-start;">Hiring Manager Perspective</span>
                <h2 style="font-size: 2rem; color: #f8fafc; margin-bottom: 20px; line-height: 1.2;"><span style="color:#818cf8;">Prepare you for Job & Life.</span></h2>
                <p style="color: #94a3b8; font-size: 1.05rem; line-height: 1.6; margin-bottom: 32px;">Build your Decision-Ready Profile. Gain validated competency ratings, recorded mock interviews, and the confidence to perform well on the job itself.</p>
                
                <div style="background:#09090b; border: 1px solid rgba(255,255,255,0.05); border-radius:16px; padding:24px; margin-top: auto;">
                    <div style="display:flex; align-items:center; gap:16px; margin-bottom:20px; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:20px;">
                        <div style="width:50px; height:50px; border-radius:50%; background:#1e222d;"></div>
                        <div>
                            <h4 style="margin:0; font-size:1.1rem; color:#f8fafc;">Your Name</h4>
                            <span style="color:#10B981; font-weight:bold; font-size:0.8rem; background:rgba(16,185,129,0.1); padding:2px 6px; border-radius:4px; border: 1px solid rgba(16,185,129,0.2);">Maximoat Verified ✓</span>
                        </div>
                    </div>
                    <div style="color: #cbd5e1;">
                        <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:0.9rem;">
                            <span>Storytelling</span><span style="color:#34d399;">Strong</span>
                        </div>
                        <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:0.9rem;">
                            <span>Product Thinking</span><span style="color:#34d399;">Advanced</span>
                        </div>
                        <div style="display:flex; justify-content:space-between; margin-bottom:0; font-size:0.9rem;">
                            <span>Visual Craft</span><span style="color:#34d399;">Proficient</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="profile-feature" style="margin-top: 40px;">`;

let startIdx = html.indexOf(targetStart);
let endIdx = html.indexOf(targetEndSearch);

if (startIdx !== -1 && endIdx !== -1) {
    html = html.substring(0, startIdx) + newStartBlock + html.substring(endIdx + targetEndSearch.length);
    fs.writeFileSync(htmlPath, html);
    console.log("Successfully replaced block.");
} else {
    console.error("Could not find start or end index.");
}
