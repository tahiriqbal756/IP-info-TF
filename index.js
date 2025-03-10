const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// Aapka API Token
const API_TOKEN = '8d874ae33e367e';  // Aapka token yahan add kiya gaya hai

// IP Geolocation Endpoint
app.get('/get-ip-info/:ip', async (req, res) => {
    const ip = req.params.ip;
    try {
        const response = await axios.get(`https://ipinfo.io/${ip}?token=${API_TOKEN}`);
        res.json({
            status: 'success',
            api: 'Made by HACKER TF',
            message: 'Welcome to the HACKER TF IP information!',
            ipInfo: response.data
        });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching IP information' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
