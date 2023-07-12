import {setReceivedData, setSocketId} from "../Redux/slices/SocketSlice.js";

export default async function initializeSocketConnection(dispatch) {
    let socket = await io.connect(`${import.meta.env["VITE_SERVER_URL"]}`)
    socket.on('connect', () => {
        socket.emit('connection')
        console.log("Connected to server :", socket.id)
        dispatch(setSocketId(socket.id.toString()))
    });
    socket.on("slide_content_created", (data) => {
        console.log(data);
        dispatch(setReceivedData(data))
    });
    return socket
}