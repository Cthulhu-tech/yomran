import { changeVisibleAside } from '../../redux/store/aside'
import { useSelector, useDispatch } from 'react-redux'
import { StoreData } from "../../redux/interface"
import { useNavigate } from "react-router-dom"

export const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const openAside = useSelector((store: StoreData) => store.visibleAside.open)

    const backHandler = () => {
        navigate('/')
        dispatch(changeVisibleAside(true))
    }

    return <header>
        {!openAside && <div className='header-wrapper' onClick={backHandler}>
            <div className="burger-container__wrapper-button animation-background_medium" onClick={backHandler}>
                <div className='arrow-left arrow'>
                </div>
            </div>
        </div>}
    </header>
}