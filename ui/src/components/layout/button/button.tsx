import { StoreData } from '../../../redux/interface';
import { useSelector } from 'react-redux';
import './button.scss'

export const Button = () => {

    const open = useSelector((store: StoreData) => store.visibleAside.open)

    return  <div className={open ? 'button-container button-container_column' : 'button-container button-container_row'}>
        <button className='button-create'>
            создать комнату
        </button>
        <button className='button-create'>
            подключиться
        </button>
    </div>
}