const EMAILJS_PUBLIC_KEY = "_n8egy95n09ubmcwi";
const EMAILJS_SERVICE_ID = "service_6h9umhj";
const EMAILJS_TEMPLATE_ID = "template_a3x8wi9";

emailjs.init(EMAILJS_PUBLIC_KEY);

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');
    
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            submitBtn.disabled = true;
            submitBtn.textContent = "⏳ Отправка...";
            formStatus.style.display = "block";
            formStatus.textContent = "Отправляю...";
            formStatus.style.background = "rgba(255,140,0,0.1)";
            formStatus.style.color = "#ffaa44";
            
            const templateParams = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            try {
                await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
                
                formStatus.textContent = "✅ Готово! Я отвечу как можно скорее.";
                formStatus.style.background = "rgba(76,175,80,0.1)";
                formStatus.style.color = "#6fbf4c";
                form.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = "✨ Отправить";
                
                setTimeout(() => { formStatus.style.display = "none"; }, 5000);
            } catch (error) {
                console.error(error);
                formStatus.textContent = "❌ Ошибка. Попробуй ещё или напиши на почту.";
                formStatus.style.background = "rgba(255,68,68,0.1)";
                formStatus.style.color = "#ff6666";
                submitBtn.disabled = false;
                submitBtn.textContent = "✨ Отправить";
            }
        });
    }
    
    const emailBtn = document.getElementById('emailLinkBtn');
    if (emailBtn) {
        emailBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = "mailto:arturssir123@gmail.com?subject=Вопрос%20с%20сайта";
        });
    }
});
