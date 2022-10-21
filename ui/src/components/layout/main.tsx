import { Outlet } from "react-router-dom"
import '../../style/shadow.scss'

export const Main = () => {

    return <main className="shadow_left-inset">
        <Outlet/>
    </main>
}