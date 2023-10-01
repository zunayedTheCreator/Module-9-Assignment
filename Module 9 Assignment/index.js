const express = require('express');
const app = express();
const port = process.env.RUNNING_PORT || 8080;
const apiRoutes = require('./src/Routes/api');

// Middleware and security configurations go here (in app.js).

app.use('/api', apiRoutes);

// Undefined route handler
app.use((req, res, next) => {
  res.status(404).json({ status: 'error', message: 'Not Found' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
