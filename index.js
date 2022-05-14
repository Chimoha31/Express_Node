console.log("Hello");
const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<ul><li>Item 1</li></ul>");
    res.end();
  }else if(req.url === "/cat") {
    res.setHeader("content-type", "text/html") 
    res.write("<img src='https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80' alt='cat' width='400' />")
    res.end();
  }else if(req.url === "/dog") {
    res.setHeader('content-type', 'text/html') 
    res.write("<img src='https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80' alt='dog' width='400' />");
    res.end();
  }
});

server.listen(PORT, () => console.log("Server is running"));
