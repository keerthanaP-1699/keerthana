var express = require("express");
var http = require("http");
var mysql = require("mysql");
var app = express();
var server = http.createServer(app);

var io = require("socket.io")(server);
var path = require("path");

var pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  debug: false,
});

app.use(express.static(path.join(__dirname, "./views")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

var name,clients = 0;

io.on("connection", (socket) => {
  console.log("new user connected");
  socket.on("joining msg", (username) => {
    name = username;
    io.emit("chat message", `---${name} joined the chat---`);
    clients++;
    io.emit("chat message", `---${clients}  clients connected!`);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
    io.emit("chat message", `---${name} left the chat---`);
    clients--;
    socket.broadcast.emit("chat message", `${clients} clients connected!`);
  });

  socket.on("typing", () => {
    socket.broadcast.emit("typing");
  });

  socket.on("chat message", (msg) => {
    socket.broadcast.emit("chat message", msg);
    send(msg, (res) => {
      if (res) {
        io.emit("refresh feed", msg);
      } else {
        io.emit("error");
      }
    });
  });
});

let send = (msg, callback) => {
  pool.getConnection((err, connection) => {
    if (err) {
      callback(false);
      return;
    }
    connection.query("CREATE TABLE IF NOT EXISTS status(`status_id` INT NOT NULL AUTO_INCREMENT,`s_text` TEXT,`t_status` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,PRIMARY KEY ( `status_id` ))",(err) => {
      connection.query("INSERT INTO status (`s_text`) VALUES ('" + msg + "')",(err, rows) => {
        if (!err) {
          callback(true);
        }
      });
    });
    connection.on("error", (err) => {
      callback(false);
      return;
    });
  });
};

server.listen(3000, () => {
  console.log("Server listening on :3000");
});
