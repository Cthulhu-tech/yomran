import { Rooms } from "./rooms/rooms"
import '../../style/shadow.scss'

export const Aside = () => {

    return <aside className='aside_open aside'>
        <div className="burger-container">
            <div className="burger-container__wrapper-button animation-background_medium">
                <div className="burger-container__button close"/>
            </div>
        </div>
        <Rooms/>
    </aside>
}