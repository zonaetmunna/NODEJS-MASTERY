// http module
const http = require('http');

const server = http.createServer((req, res) => {
  // This function will be called for every incoming HTTP request

  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send a response
  res.end('Hello, World!\n');
});

// The server listens on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
