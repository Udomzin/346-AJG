document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');
    const emailInput = loginForm.querySelector('input[type="email"]');
    const passwordInput = loginForm.querySelector('input[type="password"]');
    const rememberCheckbox = document.getElementById('remember');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value;

        if (!email || !password) {
            alert('กรุณากรอก Email และ Password');
            return;
        }

        // ดึง users จาก localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // หา user ที่ตรงกับ email + password
        const user = users.find(u => u.email === email && u.password === password);

        if (!user) {
            alert('Email หรือ Password ไม่ถูกต้อง');
            return;
        }

        // สร้าง token ถ้ายังไม่มี
        if (!user.token) {
            user.token = Math.random().toString(36).substr(2) + Date.now();
            // อัพเดต user กลับไปยัง localStorage
            localStorage.setItem('users', JSON.stringify(users));
        }

        // เก็บ token สำหรับ session
        if (rememberCheckbox.checked) {
            localStorage.setItem('currentUserToken', user.token); // จดจำข้าม session
        } else {
            sessionStorage.setItem('currentUserToken', user.token); // session ชั่วคราว
        }

        alert('Login สำเร็จ!');
        window.location.href = '../page/dashboard.html';
    });

    // ลิงก์ Sign Up
    const signupLink = document.querySelector('.signup-link a');
    if (signupLink) {
        signupLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'signup.html';
        });
    }
});
