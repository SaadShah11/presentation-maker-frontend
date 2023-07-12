import {createSlice} from '@reduxjs/toolkit'

const DUMMY = [{
    "title": "", "content": [""]
}, {
    "title": "", "content": [""]
}, {
    "title": "", "content": [""]
}, {
    "title": "", "content": [""]
}, {
    "title": "", "content": [""]
}, {
    "title": "", "content": [""]
}, {
    "title": "", "content": [""]
}, {
    "title": "", "content": [""]
}, {
    "title": "", "content": [""]
}, {
    "title": "", "content": [""]
}, {
    "title": "", "content": [""]
}, {
    "title": "", "content": [""]
},
]
let flag = false
const initialState = {
    socketId: '',
    receivedData: DUMMY
}

const SocketSlice = createSlice({
    name: 'socket',
    initialState,
    reducers: {
        setSocketId: (state, action) => {
            const socketId = action.payload
            return {...state, socketId: socketId}
        },
        setReceivedData: (state, action) => {
            if (flag === false) {
                flag = true
                return {...state, receivedData: [action.payload]}
            } else {
                let data = action.payload
                console.log(state.receivedData)
                return {...state, receivedData: [...state.receivedData, data]}
            }
        },
        resetReceivedData: (state) => {
            return {...state, receivedData: DUMMY}
        }
    },
})
export const {setSocketId, setReceivedData, resetReceivedData} = SocketSlice.actions

export default SocketSlice.reducer