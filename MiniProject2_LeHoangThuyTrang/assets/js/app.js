// 1. Khởi tạo AOS (Bài 3)
AOS.init({ duration: 1000, once: false });

// 2. GSAP Hero (Bài 2)
if(document.querySelector('.hero h1')) {
    gsap.from(".hero h1", { opacity: 0, y: 50, duration: 1, ease: "power2.out" });
}

// 3. Xử lý Form & LocalStorage (Bài 4)
const contactForm = document.getElementById('contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Thu thập dữ liệu
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
            date: new Date().toLocaleString()
        };

        // Lưu vào LocalStorage
        localStorage.setItem('userFeedback', JSON.stringify(formData));
        
        // Hiển thị Toast thông báo
        const toast = document.getElementById('toast');
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
            contactForm.reset();
        }, 3000);
    });
}