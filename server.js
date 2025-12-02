const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const crypto = require('crypto');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// ไฟล์เก็บ users
const USERS_FILE = './users.json';

// อ่านไฟล์ users
function readUsers() {
    if (!fs.existsSync(USERS_FILE)) return [];
    const data = fs.readFileSync(USERS_FILE);
    return JSON.parse(data);
}

// เขียนไฟล์ users
function writeUsers(users) {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// Sign Up
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    let users = readUsers();

    if(users.some(u => u.email === email)) {
        return res.status(400).json({ message: 'Email ถูกใช้งานแล้ว' });
    }

    // สร้าง token แบบ random
    const token = crypto.randomBytes(16).toString('hex');

    users.push({ username, email, password, token });
    writeUsers(users);

    res.json({ message: 'Sign Up สำเร็จ', token });
});

// Login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    let users = readUsers();

    const user = users.find(u => u.email === email && u.password === password);
    if(!user) {
        return res.status(401).json({ message: 'Email หรือ Password ไม่ถูกต้อง' });
    }

    res.json({ message: 'Login สำเร็จ', token: user.token });
});

// Start server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
