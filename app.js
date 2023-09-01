const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify([
        { id: 1, title: "first" },
        { id: 2, title: "secend" },
        { id: 3, title: "third" },
      ])
    );
    res.end();
  } else if (req.method === "GET" && req.url === "/post") {
    res.write("wellcome to node post page ");
    res.end();
  } else if (req.method === "GET" && req.url === "/book") {
    res.write("wellcome to node book page ");
    res.end();
  } else if (req.method === "GET" && req.url === "/shope") {
    res.write("wellcome to book shope");
    res.end();
  } else {
    res.write("page not found");
    res.end();
  }
});

server.listen(7000, () => {
  console.log("server start on port 7000 ");
});
