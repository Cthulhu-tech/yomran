import { StoreData } from '../../redux/interface'
import { useSelector } from 'react-redux'
import '../../style/animation-style.scss'
import { Popup } from '../popup/popup'
import { Header } from "./header"
import { Footer } from "./footer"
import { Aside } from "./aside"
import { Main } from "./main"
import './layout.scss'

export const Layout = () => {

    const openPopup = useSelector((store: StoreData) => store.visiblePopup.open)

    return <div className='grid'>
        <Header />
        {openPopup && <Popup/>}
        <Aside />
        <Main/>
        <Footer />
    </div>
}