import '../../style/animation-style.scss'
import { Header } from "./header"
import { Footer } from "./footer"
import { Aside } from "./aside"
import { Main } from "./main"
import './layout.scss'

export const Layout = () => {

    return <>
        <Header />
        <Aside />
        <Main/>
        <Footer />
    </>
}