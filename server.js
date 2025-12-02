const express = require('express');
const path = require('path'); // อย่าลืม require path
const cors = require('cors'); // ควรจะติดตั้งและ require cors
const app = express();

app.use(cors());
app.use(express.json()); // สำหรับการรับข้อมูล POST
app.use(express.static(path.join(__dirname, 'login'))); // <-- ต้องชี้ไปที่โฟลเดอร์ 'login'

// Route สำหรับหน้าหลัก
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login', 'login.html'));
});

// // Signup
// app.post('/signup', (req, res) => { ... });

// // Login
// app.post('/login', (req, res) => { ... });

// Start server
app.listen(3000, () => console.log('Server running on port 3000'));