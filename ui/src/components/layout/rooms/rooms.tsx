import { changeVisiblePopup } from '../../../redux/store/popup'
import { RoomsType, StoreData } from '../../../redux/interface'
import { dataFormater } from '../../../utils/dataFormater'
import { deleteRooms } from '../../../redux/store/rooms'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../button/button'
import { Image } from '../../image/image'
import './rooms.scss'

export const Rooms = () => {

    const dispatch = useDispatch()
    const rooms = useSelector((store: StoreData) => store.roomsStore)
    const open = useSelector((store: StoreData) => store.visibleAside.open)
    const openPopup = useSelector((store: StoreData) => store.visiblePopup.open)

    const deleteRoom = (room: RoomsType) => { 
        dispatch(changeVisiblePopup({
            open: openPopup, 
            callback: () => dispatch(deleteRooms(room)), 
            message: `Удалить все данные из комнаты ${room.id}?`
        }))
    }

    return <>
    <Button/>
    <section className="rooms-container">
        {rooms.map((room) => {
            return <section className={open ? "room-wrapper room_open" : "room-wrapper room_close"} key={room.id}>
                <div className={ open ? 'room-wrapper_data_open' : 'room-wrapper_data_close'}>
                    <Image {...{width: '28px', src: room.img, alt: room.name, className: "room-image"}} />
                    <p className={open ? 'room__message_name room__message room__message_name_open' : 'room__message_name room__message room__message_name_close'}>{room.name}</p>
                    {open && <p className='room__message room__message_last-message_data'>{dataFormater(new Date(+room.lastMessageDate))}</p>}
                    {open && <div className='close-button animation-background_medium' onClick={() => deleteRoom(room)}>
                        <div className='burger-container__button open'/>
                    </div>}
                </div>
                {open && <div className={ open ? 'room-wrapper_data_open' : 'room-wrapper_data_close'}>
                    <Image {...{width: '28px', src: room.lastMessageUserImg, alt: room.name, className: "room-image"}} />
                    <p className='room__message room__message_last-message'>{room.lastMessage}</p>
                </div>}
            </section>
        })}
    </section>
    </>
}