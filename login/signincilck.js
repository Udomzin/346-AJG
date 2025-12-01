document.addEventListener('DOMContentLoaded', () => {
    const signInLink = document.querySelector('#signInLink');
    const signUpButton = document.querySelector('#signUpButton');

    if (signUpButton) {
        signUpButton.addEventListener('click', (e) => {
            e.preventDefault();
            alert('คุณคลิกปุ่ม "Sign Up" แล้ว!');
            window.location.href = '../page/dashboard.html';
        });
    }

    if (signInLink) {
        signInLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert('คุณคลิกที่ "Sign In" แล้ว!');
            // window.location.href = 'sign-in.html';
        });
    }
});
