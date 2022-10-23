import { Action, Rooms } from "../interface"

const defaultState = [
        {   id: 1,
            name: 'very_long_room_name',
            creator: 'admin',
            img: null,
            lastMessage: 'very_long_room_new-message room_1',
            lastMessageDate: '1666528215063',
            lastMessageUserImg: ''
        },
        {   id: 2,
            name: 'small',
            creator: 'admin',
            img: '',
            lastMessage: 'new-message',
            lastMessageDate: '1666528215463',
            lastMessageUserImg: ''
        },
]

const addRoomsState = "add_state_rooms"
const updateRoomsState = "update_state_rooms"
const deleteRoomsState = "delete_state_rooms"

export const roomsStore = (state = defaultState, action:Action<string, Rooms[] | Rooms>) => {
    switch (action.type){
        case updateRoomsState: 
            return {...state, ...action.payload as Rooms[]}
        case deleteRoomsState: 
            return {...state.filter((element) => element.id !== (action.payload as Rooms).id)}
        case addRoomsState: 
            return state.push(action.payload as Rooms)
        default:
            return state
    }
}

export const addRooms = (payload: Rooms) => ({ type: updateRoomsState, payload });
export const deleteRooms = (payload: Rooms) => ({ type: deleteRoomsState, payload });
export const updateRooms = (payload: Rooms[]) => ({ type: updateRoomsState, payload });
