/* ========== متغيرات الألوان ========== */
:root {
    --primary-yellow: #D4AF37;
    --primary-orange: #CC5500;
    --dark-black: #0A0A0A;
    --bg-dark: #1A1A1A;
    --card-dark: #252525;
    --text-light: #F5F5F5;
    --border-color: #3A3A3A;
    --hover-yellow: #FFD700;
    --hover-orange: #FF6F00;
}

/* ========== إعدادات عامة ========== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, var(--dark-black) 0%, var(--bg-dark) 100%);
    color: var(--text-light);
    line-height: 1.6;
    min-height: 100vh;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* ========== شريط التنقل ========== */
.navbar {
    background: linear-gradient(90deg, var(--dark-black) 0%, var(--card-dark) 100%);
    padding: 1rem 0;
    box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 2px solid var(--primary-yellow);
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
}

.logo {
    font-size: 1.8rem;
    font-weight: bold;
    background: linear-gradient(45deg, var(--primary-yellow), var(--primary-orange));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 30px rgba(212, 175, 55, 0.5);
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    color: var(--text-light);
    text-decoration: none;
    font-size: 1.1rem;
    padding: 0.5rem 1.2rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    position: relative;
}

.nav-menu a::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--primary-yellow), var(--primary-orange));
    transition: width 0.3s ease;
}

.nav-menu a:hover::before,
.nav-menu a.active::before {
    width: 80%;
}

.nav-menu a:hover,
.nav-menu a.active {
    color: var(--primary-yellow);
    transform: translateY(-2px);
}

/* ========== قسم البطل ========== */
.hero-section {
    background: linear-gradient(135deg, var(--primary-orange) 0%, var(--primary-yellow) 100%);
    padding: 4rem 0;
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
    overflow: hidden;
}

.hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="none"/><path d="M0 50 Q 25 25, 50 50 T 100 50" stroke="rgba(0,0,0,0.1)" fill="none"/></svg>');
    opacity: 0.3;
}

.hero-title {
    font-size: 3rem;
    color: var(--dark-black);
    margin-bottom: 1rem;
    position: relative;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

.hero-subtitle {
    font-size: 1.3rem;
    color: var(--dark-black);
    position: relative;
}

/* ========== المحتوى الرئيسي ========== */
.main-content {
    padding: 2rem 0;
    min-height: 60vh;
}

.section-title {
    font-size: 2.5rem;
    color: var(--primary-yellow);
    margin-bottom: 2rem;
    text-align: center;
    text-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
}

/* ========== البطاقات ========== */
.info-card {
    background: var(--card-dark);
    border-radius: 15px;
    padding: 2rem;
    margin-bottom: 2rem;
    border: 2px solid var(--border-color);
    box-shadow: 0 8px 32px rgba(212, 175, 55, 0.1);
    transition: all 0.3s ease;
}

.info-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(212, 175, 55, 0.2);
    border-color: var(--primary-yellow);
}

.info-card h3 {
    color: var(--primary-orange);
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid var(--primary-yellow);
    padding-bottom: 0.5rem;
}

/* ========== شبكة الفريق ========== */
.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
}

.team-member {
    background: var(--bg-dark);
    padding: 1.5rem;
    border-radius: 10px;
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
}

.team-member:hover {
    border-color: var(--primary-orange);
    transform: scale(1.02);
    box-shadow: 0 5px 20px rgba(204, 85, 0, 0.3);
}

.team-member h4 {
    color: var(--primary-yellow);
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
}

.team-member p {
    color: var(--text-light);
    margin: 0.3rem 0;
}

.student-id {
    color: var(--primary-orange);
    font-weight: bold;
    margin-top: 0.5rem;
}

/* ========== صندوق الرابط ========== */
.link-box {
    background: var(--bg-dark);
    padding: 1.5rem;
    border-radius: 10px;
    border: 2px dashed var(--primary-yellow);
    text-align: center;
}

.publish-link {
    display: inline-block;
    color: var(--primary-yellow);
    font-size: 1.2rem;
    text-decoration: none;
    padding: 1rem 2rem;
    background: var(--card-dark);
    border-radius: 8px;
    margin-bottom: 1rem;
    transition: all 0.3s ease;
}

.publish-link:hover {
    background: var(--primary-yellow);
    color: var(--dark-black);
    transform: scale(1.05);
    box-shadow: 0 5px 20px rgba(212, 175, 55, 0.4);
}

.note {
    color: var(--primary-orange);
    font-size: 0.9rem;
    font-style: italic;
}

/* ========== قائمة الملاحظات ========== */
.notes-list {
    list-style: none;
    padding: 0;
}

.notes-list li {
    background: var(--bg-dark);
    padding: 1rem 1.5rem;
    margin: 0.8rem 0;
    border-right: 4px solid var(--primary-orange);
    border-radius: 5px;
    transition: all 0.3s ease;
}

.notes-list li:hover {
    border-right-width: 8px;
    border-right-color: var(--primary-yellow);
    transform: translateX(-5px);
}

/* ========== الجداول ========== */
table {
    width: 100%;
    border-collapse: collapse;
    background: var(--card-dark);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
}

thead {
    background: linear-gradient(90deg, var(--primary-orange), var(--primary-yellow));
}

thead th {
    padding: 1.2rem;
    text-align: right;
    color: var(--dark-black);
    font-weight: bold;
    font-size: 1.1rem;
}

tbody tr {
    border-bottom: 1px solid var(--border-color);
    transition: all 0.3s ease;
}

tbody tr:hover {
    background: var(--bg-dark);
}

tbody td {
    padding: 1rem;
    color: var(--text-light);
}

.details-row {
    background: var(--bg-dark) !important;
    border-top: 2px solid var(--primary-yellow);
}

.details-content {
    padding: 1.5rem;
}

.app-logo {
    font-size: 3rem;
    text-align: center;
    margin: 1rem 0;
}

/* ========== النماذج ========== */
.form-container {
    background: var(--card-dark);
    padding: 2.5rem;
    border-radius: 15px;
    border: 2px solid var(--border-color);
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
}

.form-group {
    margin-bottom: 1.5rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--primary-yellow);
    font-weight: bold;
    font-size: 1.1rem;
}

input[type="text"],
input[type="url"],
select,
textarea {
    width: 100%;
    padding: 0.9rem;
    background: var(--bg-dark);
    border: 2px solid var(--border-color);
    border-radius: 8px;
    color: var(--text-light);
    font-size: 1rem;
    transition: all 0.3s ease;
}

input[type="text"]:focus,
input[type="url"]:focus,
select:focus,
textarea:focus {
    outline: none;
    border-color: var(--primary-yellow);
    box-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
}

textarea {
    resize: vertical;
    min-height: 120px;
    font-family: inherit;
}

.radio-group {
    display: flex;
    gap: 2rem;
    margin-top: 0.5rem;
}

.radio-group label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: normal;
    color: var(--text-light);
}

input[type="radio"] {
    width: 20px;
    height: 20px;
    accent-color: var(--primary-orange);
}

/* ========== الأزرار ========== */
.btn-group {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    justify-content: center;
}

button,
.btn {
    padding: 0.9rem 2.5rem;
    font-size: 1.1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;
}

.btn-primary {
    background: linear-gradient(45deg, var(--primary-orange), var(--primary-yellow));
    color: var(--dark-black);
}

.btn-primary:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
}

.btn-secondary {
    background: var(--card-dark);
    color: var(--text-light);
    border: 2px solid var(--primary-yellow);
}

.btn-secondary:hover {
    background: var(--bg-dark);
    border-color: var(--primary-orange);
}

.toggle-btn {
    background: var(--primary-yellow);
    color: var(--dark-black);
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
}

.toggle-btn:hover {
    background: var(--primary-orange);
    transform: scale(1.1);
}

/* ========== رسائل الخطأ ========== */
.error {
    border-color: #FF4444 !important;
}

.error-message {
    color: #FF6B6B;
    font-size: 0.9rem;
    margin-top: 0.3rem;
    display: none;
}

.error-message.show {
    display: block;
}

/* ========== التذييل ========== */
.footer {
    background: var(--dark-black);
    color: var(--text-light);
    text-align: center;
    padding: 2rem 0;
    margin-top: 4rem;
    border-top: 3px solid var(--primary-yellow);
}

/* ========== صفحة من نحن ========== */
.about-content p {
    line-height: 1.8;
    margin: 1rem 0;
    color: var(--text-light);
}

.goals-list {
    list-style: none;
    padding: 0;
    margin-top: 1rem;
}

.goals-list li {
    background: var(--bg-dark);
    padding: 1rem 1.5rem;
    margin: 0.5rem 0;
    border-right: 4px solid var(--primary-yellow);
    border-radius: 5px;
    transition: all 0.3s ease;
}

.goals-list li:hover {
    border-right-color: var(--primary-orange);
    transform: translateX(-5px);
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
}

.feature-box {
    background: var(--bg-dark);
    padding: 1.5rem;
    border-radius: 10px;
    text-align: center;
    border: 2px solid var(--border-color);
    transition: all 0.3s ease;
}

.feature-box:hover {
    border-color: var(--primary-orange);
    box-shadow: 0 5px 20px rgba(204, 85, 0, 0.3);
}

.feature-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.feature-box h5 {
    color: var(--primary-yellow);
    font-size: 1.2rem;
    margin: 0.5rem 0;
}

.feature-box p {
    color: var(--text-light);
    font-size: 0.9rem;
}

.contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
}

.contact-item {
    background: var(--bg-dark);
    padding: 1.5rem;
    border-radius: 10px;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    border: 2px solid var(--border-color);
    transition: all 0.3s ease;
}

.contact-item:hover {
    border-color: var(--primary-yellow);
    transform: translateY(-3px);
}

.contact-icon {
    font-size: 2.5rem;
}

.contact-details h5 {
    color: var(--primary-orange);
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
}

.contact-details p {
    color: var(--text-light);
    margin: 0.3rem 0;
    font-size: 0.95rem;
}

.social-media {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 2px solid var(--border-color);
}

.social-icons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.social-link {
    background: linear-gradient(45deg, var(--primary-orange), var(--primary-yellow));
    color: var(--dark-black);
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
}

.social-link:hover {
    transform: scale(1.1);
    box-shadow: 0 5px 20px rgba(212, 175, 55, 0.4);
}

/* ========== رسائل النجاح والخطأ ========== */
.success-message {
    position: fixed;
    top: 100px;
    right: 20px;
    background: linear-gradient(45deg, #28a745, #20c997);
    color: white;
    padding: 1rem 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(40, 167, 69, 0.4);
    z-index: 9999;
    display: none;
    animation: slideInRight 0.4s ease;
}

.error-banner {
    position: fixed;
    top: 100px;
    right: 20px;
    background: linear-gradient(45deg, #dc3545, #c82333);
    color: white;
    padding: 1rem 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(220, 53, 69, 0.4);
    z-index: 9999;
    display: none;
    animation: slideInRight 0.4s ease;
}

@keyframes slideInRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

/* ========== تحسينات الجدول ========== */
table a {
    color: var(--primary-yellow);
    text-decoration: none;
    transition: all 0.3s ease;
}

table a:hover {
    color: var(--primary-orange);
    text-decoration: underline;
}

.details-content strong {
    color: var(--primary-orange);
}

/* ========== تحسينات إضافية للأزرار ========== */
button:disabled,
.btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

button:active,
.btn:active {
    transform: scale(0.95);
}

/* ========== Scrollbar تخصيص ========== */
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: var(--dark-black);
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, var(--primary-orange), var(--primary-yellow));
    border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, var(--primary-yellow), var(--primary-orange));
}

/* ========== تأثيرات الحركة ========== */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in {
    animation: fadeIn 0.6s ease;
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
}

.pulse {
    animation: pulse 2s infinite;
}

/* ========== تحسينات النماذج ========== */
select option {
    background: var(--card-dark);
    color: var(--text-light);
    padding: 0.5rem;
}

input::placeholder,
textarea::placeholder {
    color: #666;
    opacity: 0.7;
}

/* ========== Loading Spinner ========== */
.spinner {
    border: 4px solid var(--border-color);
    border-top: 4px solid var(--primary-yellow);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    margin: 2rem auto;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* ========== Badge للحالات ========== */
.badge {
    display: inline-block;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: bold;
}

.badge-free {
    background: linear-gradient(45deg, #28a745, #20c997);
    color: white;
}

.badge-paid {
    background: linear-gradient(45deg, var(--primary-orange), var(--primary-yellow));
    color: var(--dark-black);
}

.badge-partial {
    background: linear-gradient(45deg, #ffc107, #ff9800);
    color: var(--dark-black);
}

/* ========== Cards مع تأثيرات 3D ========== */
.card-3d {
    transform-style: preserve-3d;
    transition: transform 0.6s;
}

.card-3d:hover {
    transform: rotateY(5deg) rotateX(5deg);
}

/* ========== التجاوب المحسّن ========== */
@media (max-width: 1024px) {
    .features-grid,
    .contact-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .nav-menu {
        flex-direction: column;
        gap: 1rem;
    }
    
    .hero-title {
        font-size: 2rem;
    }
    
    .hero-subtitle {
        font-size: 1rem;
    }
    
    .team-grid,
    .features-grid,
    .contact-grid {
        grid-template-columns: 1fr;
    }
    
    .section-title {
        font-size: 1.8rem;
    }
    
    table {
        font-size: 0.85rem;
    }
    
    thead th, tbody td {
        padding: 0.5rem 0.3rem;
    }
    
    .btn-group {
        flex-direction: column;
    }
    
    button, .btn {
        width: 100%;
    }
    
    .social-icons {
        flex-direction: column;
    }
    
    .success-message,
    .error-banner {
        right: 10px;
        left: 10px;
        top: 80px;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 15px;
    }
    
    .logo {
        font-size: 1.4rem;
    }
    
    .hero-title {
        font-size: 1.5rem;
    }
    
    .info-card {
        padding: 1.5rem;
    }
    
    .form-container {
        padding: 1.5rem;
    }
    
    table {
        font-size: 0.75rem;
    }
    
    .toggle-btn {
        padding: 0.3rem 0.6rem;
        font-size: 0.9rem;
    }
}

/* ========== طباعة ========== */
@media print {
    .navbar,
    .hero-section,
    .footer,
    .btn,
    button {
        display: none;
    }
    
    body {
        background: white;
        color: black;
    }
    
    .info-card {
        border: 1px solid #000;
        page-break-inside: avoid;
    }
}

/* ========== التجاوب ========== */
@media (max-width: 768px) {
    .nav-menu {
        flex-direction: column;
        gap: 1rem;
    }
    
    .hero-title {
        font-size: 2rem;
    }
    
    .hero-subtitle {
        font-size: 1rem;
    }
    
    .team-grid {
        grid-template-columns: 1fr;
    }
    
    .section-title {
        font-size: 1.8rem;
    }
    
    table {
        font-size: 0.9rem;
    }
    
    thead th, tbody td {
        padding: 0.5rem;
    }
}