// app.js
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes for each section
app.get('/', (req, res) => {
    console.log('Request for main page received.');
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/events', (req, res) => {
    console.log('Request for events page received.');
    res.sendFile(path.join(__dirname, 'views', 'events.html'));
});

app.get('/gallery', (req, res) => {
    console.log('Request for gallery page received.');
    res.sendFile(path.join(__dirname, 'views', 'gallery.html'));
});

app.get('/members', (req, res) => {
    console.log('Request for members page received.');
    res.sendFile(path.join(__dirname, 'views', 'members.html'));
});

app.get('/notice', (req, res) => {
    console.log('Request for notice page received.');
    res.sendFile(path.join(__dirname, 'views', 'notice.html'));
});

app.get('/best-events', (req, res) => {
    console.log('Request for best events page received.');
    res.sendFile(path.join(__dirname, 'views', 'best-events.html'));
});

app.get('/simple', (req, res) => {
    console.log('Request for best events page received.');
    res.sendFile(path.join(__dirname, 'views', 'simple.html'));
});

// Catch-all route to send the main page HTML
app.get('*', (req, res) => {
    console.log('Request for unknown page received. Redirecting to main page.');
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
