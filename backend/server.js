const express = require('express');
const app = express();
const port = 5000;

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


// const express = require('express');
// const path = require('path');
// const app = express();
// const port = 5000;

// // Serve the static files from the React app
// app.use(express.static(path.join(__dirname, 'frontend/build')));

// app.get('/api', (req, res) => {
//   res.json({ message: 'Hello from the backend!' });
// });

// // Catch-all handler for any requests to an unknown route
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
