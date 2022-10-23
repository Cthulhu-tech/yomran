import { dataFormater } from '../../utils/dataFormater'
import { StoreData } from '../../redux/interface'
import { useSelector } from 'react-redux'
import { Image } from '../image/image'
import './rooms.scss'

export const Rooms = () => {

    const rooms = useSelector((store: StoreData) => store.roomsStore)
    const open = useSelector((store: StoreData) => store.visibleAside.open)

    return <section className="rooms-container">

        <div className='button-container'>
            <button className='button-create'>
                создать комнату
            </button>
        </div>

        {rooms.map((room) => {
            return <section className={open ? "room-wrapper room_open" : "room-wrapper room_close"}>
                <div className={ open ? 'room-wrapper_data_open' : 'room-wrapper_data_close'}>
                    <Image {...{width: '28px', src: room.img, alt: room.name, className: "room-image"}} />
                    <p className={open ? 'room__message_name room__message room__message_name_open' : 'room__message_name room__message room__message_name_close'}>{room.name}</p>
                    {open && <p className='room__message room__message_last-message_data'>{dataFormater(new Date(+room.lastMessageDate))}</p>}
                </div>
                {open && <div className={ open ? 'room-wrapper_data_open' : 'room-wrapper_data_close'}>
                    <Image {...{width: '28px', src: room.lastMessageUserImg, alt: room.name, className: "room-image"}} />
                    <p className='room__message room__message_last-message'>{room.lastMessage}</p>
                </div>}
            </section>
        })}
    </section>
}