// =============MY CODE ===============================

const io = require('socket.io')(8900, {
    cors: {
      origin: '*',
    }
  });

// =============VIDEO CODE ===============================

// const io = require('socket.io')(8900,{
//     cors:{
//         origin: "http://localhost:3000/"
//     },
// });
// =============VIDEO CODE ===============================
let users = [];

const addUser = (userId, socketId) =>{
    !users.some((user)=> user.userId === userId) &&
    users.push({userId, socketId});
}

const removeUser = (socketId)=>{
    users = users.filter(user=>user.socketId !== socketId);
}

io.on("connection",(socket)=>{
    console.log(" a user connected");
    //take userId from socketId from user
    socket.on("addUser", userId=>{
        addUser(userId, socket.id);
        io.emit("getUsers", users);
    });
    socket.on("disconnect", ()=>{
        console.log("a user disconnected");
        removeUser(socket.id);
        io.emit("getUsers", users);

    })
});




