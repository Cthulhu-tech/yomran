import { changeVisibleAside } from "../../redux/store/aside"
import { useDispatch, useSelector } from "react-redux"
import { StoreData } from "../../redux/interface"
import '../../style/shadow.scss'

export const Aside = () => {

    const dispatch = useDispatch()
    const visible = useSelector((store: StoreData) => store.visibleAside.open)
    
    const changeVisability = () => dispatch(changeVisibleAside(visible))

    return <aside className={visible ? 'aside_open shadow_right-inset' : 'aside_close shadow_right-inset'}>
        <div className="burger-container">
            <div className="burger-container__wrapper-button animation-background_medium" onClick={changeVisability}>
                <div className={visible ? "burger-container__button open" : "burger-container__button close"}/>
            </div>
        </div>
    </aside>
}