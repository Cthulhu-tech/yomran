import { StoreData } from '../../../redux/interface';
import { useSelector } from 'react-redux';
import './button.scss'

export const Button = () => {

    const open = useSelector((store: StoreData) => store.visibleAside.open)

    const connectionRoom = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation()
        console.log('connection')
    }

    return  <div className={open ? 'button-container button-container_column' : 'button-container button-container_row'}>
        <button className='button-create'>
            создать комнату
        </button>
        <button className='button-create' onClick={connectionRoom}>
            подключиться
        </button>
    </div>
}