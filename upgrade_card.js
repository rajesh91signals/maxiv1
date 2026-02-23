const fs = require('fs');
const htmlPath = '/Users/rajesh/Maximoat_antigravity/job_booster.html';
let html = fs.readFileSync(htmlPath, 'utf8');

const targetStart = `                    <!-- Profile HTML Mockup -->`;
const targetEnd = `                        </div>\n                    </div>\n                </div>\n            </div>`;

const newContent = `                    <!-- Profile HTML Mockup -->
                    <div
                        style="background: #11131a; border-radius: 20px; padding: 32px; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 24px 48px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.1); position: relative; font-family: 'Inter', sans-serif;">
                        <!-- Header -->
                        <div style="margin-bottom:24px; border-bottom:1px solid rgba(255,255,255,0.06); padding-bottom:24px;">
                            <div style="display:flex; align-items:center; gap:16px; margin-bottom: 16px;">
                                <div style="width:56px; height:56px; border-radius:50%; background:linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%); display: flex; align-items:center; justify-content:center; color:#fff; font-size:1.2rem; font-weight:700; border: 2px solid rgba(255,255,255,0.1); box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);">
                                    RK</div>
                                <div>
                                    <h4 style="margin:0 0 6px 0; font-size:1.25rem; color:#f8fafc; font-weight: 700; letter-spacing: -0.01em;">
                                        Rita Kumari</h4>
                                    <span style="color:#10b981; font-weight:600; font-size:0.75rem; background:rgba(16,185,129,0.15); padding:4px 8px; border-radius:6px; display:inline-flex; align-items:center; gap: 4px; border: 1px solid rgba(16,185,129,0.3); letter-spacing: 0.02em; text-transform: uppercase;">Maximoat Verified
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                                            <path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.735c0 5.905 3.324 10.99 8.28 13.18a.75.75 0 00.94 0c4.956-2.19 8.28-7.275 8.28-13.18a12.74 12.74 0 00-.635-3.97.75.75 0 00-.722-.515 11.209 11.209 0 01-7.877-3.08zM10.22 13.91l4.97-4.97a.75.75 0 011.06 1.06l-5.5 5.5a.75.75 0 01-1.06 0l-2.25-2.25a.75.75 0 011.06-1.06l1.72 1.72z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <!-- Tags and Availability -->
                            <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom: 16px;">
                                <span style="font-size: 0.75rem; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); color: #cbd5e1; padding: 4px 10px; border-radius: 20px; font-weight: 500;">Enterprise</span>
                                <span style="font-size: 0.75rem; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); color: #cbd5e1; padding: 4px 10px; border-radius: 20px; font-weight: 500;">Fintech</span>
                                <span style="font-size: 0.75rem; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); color: #cbd5e1; padding: 4px 10px; border-radius: 20px; font-weight: 500;">Mobile app</span>
                            </div>
                            <div style="font-size: 0.85rem; color: #94a3b8; display: flex; align-items: center; gap: 8px; font-weight: 500;">
                                <span style="position: relative; display: flex; width: 10px; height: 10px;">
                                    <span style="position: absolute; display: inline-flex; height: 100%; width: 100%; border-radius: 50%; background-color: #10b981; opacity: 0.4;"></span>
                                    <span style="position: relative; display: inline-flex; border-radius: 50%; height: 10px; width: 10px; background-color: #10b981; border: 2px solid #11131a;"></span>
                                </span>
                                Available in 15 days for On-site & remote
                            </div>
                        </div>

                        <!-- Video Section -->
                        <div style="border-radius:12px; height:180px; overflow: hidden; margin-bottom:24px; position:relative; border: 1px solid rgba(255,255,255,0.05); box-shadow: inset 0 0 20px rgba(0,0,0,0.5);">
                            <video src="assets/uxportfolio_walk.mp4" autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover; display: block; opacity: 0.85;"></video>
                            
                            <!-- Video Overlay Elements -->
                            <div style="position:absolute; inset:0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%); pointer-events:none;"></div>
                            
                            <div style="position:absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width:48px; height:48px; background:rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.2); backdrop-filter: blur(4px); border-radius:50%; display:flex; align-items:center; justify-content:center; cursor: pointer;">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff" style="margin-left: 3px;">
                                    <path d="M5 3l14 9-14 9V3z" />
                                </svg>
                            </div>
                            <div style="position:absolute; bottom:12px; left:16px; font-size:0.8rem; color:#f8fafc; font-weight: 600; text-shadow: 0 2px 4px rgba(0,0,0,0.5); display: flex; align-items: center; gap: 6px;">
                                <span style="display:inline-block; width:6px; height:6px; background:#ef4444; border-radius:50%;"></span>
                                Pitch Recording &bull; 02:30
                            </div>
                        </div>

                        <!-- Stats with Bar Graph -->
                        <div style="color:#d1d5db;">
                            <div style="margin-bottom:18px;">
                                <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.95rem;">
                                    <span style="font-weight: 500; color:#e2e8f0;">Storytelling</span><span style="color:#f8fafc; font-weight: 700;">90/100</span>
                                </div>
                                <div style="width: 100%; background: rgba(255,255,255,0.05); height: 8px; border-radius: 4px; overflow:hidden; border: 1px solid rgba(255,255,255,0.02);">
                                    <div style="width: 90%; background: linear-gradient(90deg, #10b981 0%, #34d399 100%); height: 100%; border-radius: 4px; box-shadow: 0 0 10px rgba(16,185,129,0.3);"></div>
                                </div>
                            </div>
                            
                            <div style="margin-bottom:18px;">
                                <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.95rem;">
                                    <span style="font-weight: 500; color:#e2e8f0;">Product Thinking</span><span style="color:#f8fafc; font-weight: 700;">80/100</span>
                                </div>
                                <div style="width: 100%; background: rgba(255,255,255,0.05); height: 8px; border-radius: 4px; overflow:hidden; border: 1px solid rgba(255,255,255,0.02);">
                                    <div style="width: 80%; background: linear-gradient(90deg, #10b981 0%, #34d399 100%); height: 100%; border-radius: 4px; box-shadow: 0 0 10px rgba(16,185,129,0.3);"></div>
                                </div>
                            </div>
                            
                            <div style="margin-bottom:0;">
                                <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.95rem;">
                                    <span style="font-weight: 500; color:#e2e8f0;">Visual Craft</span><span style="color:#f8fafc; font-weight: 700;">75/100</span>
                                </div>
                                <div style="width: 100%; background: rgba(255,255,255,0.05); height: 8px; border-radius: 4px; overflow:hidden; border: 1px solid rgba(255,255,255,0.02);">
                                    <div style="width: 75%; background: linear-gradient(90deg, #10b981 0%, #34d399 100%); height: 100%; border-radius: 4px; box-shadow: 0 0 10px rgba(16,185,129,0.3);"></div>
                                </div>`;

let startIdx = html.indexOf(targetStart);
let endIdx = html.indexOf(targetEnd);

if (startIdx !== -1 && endIdx !== -1) {
    html = html.substring(0, startIdx) + newContent + html.substring(endIdx);
    fs.writeFileSync(htmlPath, html);
    console.log("Successfully replaced card.");
} else {
    console.error("Tokens missing error!");
}
