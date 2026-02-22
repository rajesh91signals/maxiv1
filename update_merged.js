const fs = require('fs');
const htmlPath = '/Users/rajesh/Maximoat_antigravity/job_booster.html';
let html = fs.readFileSync(htmlPath, 'utf8');

const targetStart = `<div class="merged-features">`;
const targetEndSearch = `        <div class="profile-feature" style="margin-top: 40px;">`;

const newStartBlock = `<div class="merged-features">
            <!-- 1) NEW SPANNING ITEM: Decision-Ready Profile -->
            <div style="grid-column: 1 / -1; background:#11131a; border: 1px solid rgba(255,255,255,0.06); border-radius:32px; box-shadow:inset 0 1px 1px rgba(255,255,255,0.05); padding:60px; display:flex; gap: 60px; align-items: center;" class="profile-span-card">
                <style>
                    @media (max-width: 900px) {
                        .profile-span-card {
                            flex-direction: column;
                            padding: 32px !important;
                            gap: 32px !important;
                        }
                    }
                </style>
                <div style="flex: 1;">
                    <h2 style="font-size: 2.5rem; color: #f8fafc; margin-bottom: 24px; line-height: 1.2; font-family: 'Inter', sans-serif; font-weight: 700; letter-spacing: -0.02em;">
                        We don't just fix your portfolio. We build your <span style="color:#818cf8;">Decision-Ready Profile.</span>
                    </h2>
                    <p style="color: #94a3b8; font-size: 1.15rem; line-height: 1.6; margin-bottom: 32px;">
                        Traditional resumes get 5 seconds of attention. We prepare you to give recruiters exactly what they need to say "Yes."
                    </p>
                    <ul style="list-style: none; padding: 0;">
                        <li style="display:flex; align-items:center; gap:16px; margin-bottom:20px; color:#e2e8f0; font-weight:500; font-size: 1.05rem;">
                            <span style="background:rgba(79, 70, 229, 0.15); padding:8px; border-radius:50%; width:36px; height:36px; display:flex; align-items:center; justify-content:center; border: 1px solid rgba(79, 70, 229, 0.4); font-size: 1.2rem;">🎥</span>
                            Recorded Mock Interview Asset
                        </li>
                        <li style="display:flex; align-items:center; gap:16px; margin-bottom:20px; color:#e2e8f0; font-weight:500; font-size: 1.05rem;">
                            <span style="background:rgba(79, 70, 229, 0.15); padding:8px; border-radius:50%; width:36px; height:36px; display:flex; align-items:center; justify-content:center; border: 1px solid rgba(79, 70, 229, 0.4); font-size: 1.2rem;">📊</span>
                            Validated Competency Ratings
                        </li>
                        <li style="display:flex; align-items:center; gap:16px; margin-bottom:0; color:#e2e8f0; font-weight:500; font-size: 1.05rem;">
                            <span style="background:rgba(79, 70, 229, 0.15); padding:8px; border-radius:50%; width:36px; height:36px; display:flex; align-items:center; justify-content:center; border: 1px solid rgba(79, 70, 229, 0.4); font-size: 1.2rem;">🏅</span>
                            "Maximoat Verified" Tag for our network
                        </li>
                    </ul>
                </div>
                
                <div style="flex: 1; max-width: 450px; width: 100%;">
                    <!-- Profile HTML Mockup -->
                    <div style="background: #ffffff; border-radius: 20px; padding: 32px; box-shadow: 0 20px 40px rgba(0,0,0,0.3); position: relative; font-family: 'Inter', sans-serif;">
                        <!-- Header -->
                        <div style="display:flex; align-items:center; gap:16px; margin-bottom:20px; border-bottom:1px solid #f1f5f9; padding-bottom:20px;">
                            <div style="width:64px; height:64px; border-radius:50%; background:#e2e8f0;"></div>
                            <div>
                                <h4 style="margin:0 0 4px 0; font-size:1.3rem; color:#0f172a; font-weight: 700;">Your Name</h4>
                                <span style="color:#10b981; font-weight:600; font-size:0.85rem; background:#ecfdf5; padding:6px 10px; border-radius:6px; display:inline-block;">Maximoat Verified ✓</span>
                            </div>
                        </div>
                        
                        <!-- Video Section -->
                        <div style="background:#0f172a; border-radius:12px; height:160px; display:flex; align-items:center; justify-content:center; margin-bottom:24px; position:relative;">
                            <div style="width:50px; height:50px; background:rgba(255,255,255,0.2); border-radius:50%; display:flex; align-items:center; justify-content:center; transition: background 0.2s ease; cursor: pointer;">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" style="margin-left: 4px;">
                                    <path d="M5 3l14 9-14 9V3z"/>
                                </svg>
                            </div>
                            <span style="position:absolute; bottom:12px; left:16px; font-size:0.85rem; color:#f8fafc; font-weight: 500;">Pitch Recording &bull; 02:30</span>
                        </div>
                        
                        <!-- Stats -->
                        <div style="color:#475569;">
                            <div style="display:flex; justify-content:space-between; margin-bottom:16px; font-size:1rem;">
                                <span>Storytelling</span><span style="color:#10b981; font-weight: 600;">Strong</span>
                            </div>
                            <div style="display:flex; justify-content:space-between; margin-bottom:16px; font-size:1rem;">
                                <span>Product Thinking</span><span style="color:#10b981; font-weight: 600;">Advanced</span>
                            </div>
                            <div style="display:flex; justify-content:space-between; margin-bottom:0; font-size:1rem;">
                                <span>Visual Craft</span><span style="color:#10b981; font-weight: 600;">Proficient</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 2) Craft portfolio that resonates -->
            <div
                style="background:#11131a; border: 1px solid rgba(255,255,255,0.06); border-radius:24px; box-shadow:inset 0 1px 1px rgba(255,255,255,0.05); padding:40px; display:flex; flex-direction:column;">
                <h2
                    style="font-size: 2rem; color: #f8fafc; margin-bottom: 20px; line-height: 1.2; font-family: 'Inter', sans-serif; font-weight: 600;">
                    Craft portfolio that resonates</h2>
                <p style="color: #94a3b8; font-size: 1.05rem; line-height: 1.6; margin-bottom: 32px;">Stop using generic
                    bootcamp structures. We re-engineer your flagship case study to speak the language of product-led
                    companies and prove business impact.</p>

                <div style="margin-top: auto; border-radius: 12px; overflow: hidden; position: relative;">
                    <img src="assets/portfolio.png" alt="Portfolio Upgrade"
                        style="width: 100%; height: 200px; object-fit: cover; display: block; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); box-shadow: inset 0 0 40px rgba(0,0,0,0.8);">
                </div>
            </div>

            <!-- 3) Be confident in interviews -->
            <div
                style="background:#11131a; border: 1px solid rgba(255,255,255,0.06); border-radius:24px; box-shadow:inset 0 1px 1px rgba(255,255,255,0.05); padding:40px; display:flex; flex-direction:column;">
                <h2
                    style="font-size: 2rem; color: #f8fafc; margin-bottom: 20px; line-height: 1.2; font-family: 'Inter', sans-serif; font-weight: 600;">
                    Be confident in interviews.</h2>
                <p style="color: #94a3b8; font-size: 1.05rem; line-height: 1.6; margin-bottom: 32px;">Build your
                    Decision-Ready Profile. Gain validated competency ratings, recorded mock interviews, and the
                    confidence to perform well on the job itself.</p>

                <div style="margin-top: auto; border-radius: 12px; overflow: hidden; position: relative;">
                    <img src="assets/mentorship.png" alt="Job and Life"
                        style="width: 100%; height: 200px; object-fit: cover; display: block; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); box-shadow: inset 0 0 40px rgba(0,0,0,0.8);">
                </div>
            </div>
        </div>

        <div class="profile-feature" style="margin-top: 40px;">`;

let startIdx = html.indexOf(targetStart);
let endIdx = html.indexOf(targetEndSearch);

if (startIdx !== -1 && endIdx !== -1) {
    html = html.substring(0, startIdx) + newStartBlock + html.substring(endIdx + targetEndSearch.length);
    fs.writeFileSync(htmlPath, html);
    console.log("Successfully substituted.");
} else {
    console.error("Tokens missing error!");
}

