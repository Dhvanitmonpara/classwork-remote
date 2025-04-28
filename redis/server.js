import net from "net"

const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    console.log(data.toString())
    socket.write("+OK\r\n")
  })
})

server.listen(8000, ()=>{
  console.log("server is listening on port 8000");
})