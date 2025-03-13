document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        ar: {
            title: "تسجيل الدخول",
            username: "اسم المستخدم",
            password: "كلمة المرور",
            login: "الدخول",
            success: "تم الدخول بنجاح!"
        },
        en: {
            title: "Login",
            username: "Username",
            password: "Password",
            login: "Sign In",
            success: "Login Successful!"
        }
    };

    let currentLang = 'ar';

    const langBtn = document.querySelector('.lang-btn');
    const loginBtn = document.querySelector('.btn-3d');
    const card = document.querySelector('.login-card');
    const title = document.querySelector('.title');
    const labels = document.querySelectorAll('label');

    // الأحداث
    langBtn.addEventListener('click', toggleLanguage);
    loginBtn.addEventListener('click', handleLogin);

    particlesJS('particles-js', {
        particles: {
            number: { value: 80 },
            color: { value: '#4CAF50' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            }
        },
        retina_detect: true
    });

    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `perspective(1000px) rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
    });

    function toggleLanguage() {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        updateTexts();
        document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
        langBtn.textContent = currentLang === 'ar' ? 'EN' : 'AR';
    }

    function updateTexts() {
        title.textContent = translations[currentLang].title;
        labels[0].textContent = translations[currentLang].username;
        labels[1].textContent = translations[currentLang].password;
        loginBtn.textContent = translations[currentLang].login;
    }

    function handleLogin(e) {
        e.preventDefault();
        this.innerHTML = '<div class="loader"></div>';
        setTimeout(() => {
            this.innerHTML = translations[currentLang].success;
        }, 2000);
    }

    updateTexts();
});