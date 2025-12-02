const express = require('express');
const path = require('path'); 
const cors = require('cors'); 
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'login')));

app.post('/invite', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ 
            success: false, 
            message: 'Email is required' 
        });
    }

    console.log("Invite sent to:", email);

    return res.json({ 
        success: true, 
        message: `Invite sent to ${email}` 
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login', 'login.html'));
});

app.listen(3000, () => console.log('Server running on port 3000'));