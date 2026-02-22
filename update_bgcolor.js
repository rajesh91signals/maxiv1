const fs = require('fs');
const htmlPath = '/Users/rajesh/Maximoat_antigravity/job_booster.html';
let html = fs.readFileSync(htmlPath, 'utf8');

html = html.replace(/<section id="features" style="background: #09090b;/g, '<section id="features" style="background: #11141c;');
html = html.replace(/<!-- Bento Grid Section -->\n        <section style="background: #09090b;/g, '<!-- Bento Grid Section -->\n        <section style="background: #11141c;');

fs.writeFileSync(htmlPath, html);
console.log("Updated background color");
