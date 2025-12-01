document.addEventListener('DOMContentLoaded', () => {
    const signInLink = document.getElementById('signInLink');
    const signUpButton = document.getElementById('signUpButton');

    // จัดการการคลิกที่ปุ่ม "Sign Up"
    if (signUpButton) {
        signUpButton.addEventListener('click', (event) => {
            event.preventDefault(); // ป้องกันการ Submit Form จริง
            alert('คุณคลิกปุ่ม "Sign Up" แล้ว!');
            
            // ตัวอย่าง: การเปลี่ยนไปหน้า Dashboard
            // window.location.href = 'dashboard.html'; 
        });
    }
    
    // จัดการการคลิกที่ลิงก์ "Sign In"
    if (signInLink) {
        signInLink.addEventListener('click', (event) => {
            event.preventDefault(); 
            alert('คุณคลิกที่ "Sign In" แล้ว!');
            
            // ตัวอย่าง: การเปลี่ยนไปหน้า Login
            // window.location.href = 'sign-in.html'; 
        });
    }
});