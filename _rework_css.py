css = """
/* New Pricing Cards from Images */
.pricing-card {
    position: relative;
    border-radius: 20px;
    padding: 30px;
    width: 100%;
    max-width: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.pricing-blue {
    background-color: #bde0fe; /* Light baby blue */
    font-family: inherit;
}

.pricing-yellow {
    background-color: #fce78b; /* Soft yellow */
    font-family: inherit;
    padding-top: 40px; /* space for top pill */
}

/* White Breakdown Pill inside Blue Card */
.pc-breakdown-pill {
    background-color: white;
    border-radius: 12px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.pc-breakdown-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.pc-b-title {
    font-size: 0.9rem;
    font-weight: 600;
    color: #1e293b;
    line-height: 1.3;
}

.pc-b-price {
    font-size: 1.1rem;
    font-weight: 700;
    color: #000;
}

.pc-b-plus {
    font-size: 1.5rem;
    font-weight: 500;
    color: #94a3b8;
    padding: 0 10px;
}

/* Green Badges */
.pc-green-badge {
    background-color: #2ebc15; /* distinct green */
    color: white;
    font-size: 0.95rem;
    font-weight: 600;
    padding: 10px 16px;
    border-radius: 6px;
    margin-bottom: 24px;
}

.pc-green-badge-small {
    background-color: #10b981;
    color: white;
    font-size: 0.95rem;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 6px;
    margin-bottom: 10px;
}

/* Prices */
.pc-strike-price {
    font-size: 1.5rem;
    font-weight: 600;
    color: #8faac7; /* grayish blue */
    text-decoration: line-through;
    margin-bottom: 4px;
}

.pricing-yellow .pc-strike-price {
    color: #b1a77e; /* grayish yellow */
}

.pc-big-price {
    font-size: 3.5rem;
    font-weight: 800;
    color: #0f172a;
    line-height: 1;
    margin-bottom: 30px;
    letter-spacing: -2px;
}

.pricing-yellow .pc-big-price {
    margin-bottom: 16px;
}

/* Top Pill (Yellow Card) */
.pc-top-pill {
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    color: #000;
    font-size: 0.9rem;
    font-weight: 700;
    padding: 10px 16px;
    border-radius: 8px;
    white-space: nowrap;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

/* Black CTA Button */
.pc-black-btn {
    background-color: #000;
    color: white;
    border: none;
    border-radius: 16px;
    width: 100%;
    padding: 18px;
    font-size: 1.4rem;
    font-weight: 700;
    cursor: pointer;
    margin-bottom: 20px;
    transition: transform 0.2s, background 0.2s;
}

.pc-black-btn:hover {
    transform: translateY(-2px);
    background-color: #1a1a1a;
}
.pc-black-btn.mt-4 {
    margin-top: 16px;
}

/* Learn More Link */
.pc-learn-more {
    font-size: 1.05rem;
    font-weight: 700;
    color: #0f172a;
    text-decoration: none;
}
.pc-learn-more:hover {
    text-decoration: underline;
}
.pc-learn-more.block-link {
    text-decoration: underline;
    line-height: 1.4;
}

.pt-6 {
    padding-top: 24px;
}
"""

with open("styles.css", "a") as f:
    f.write(css)
