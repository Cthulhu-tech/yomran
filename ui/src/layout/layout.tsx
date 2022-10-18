import { Outlet } from "react-router-dom"
import { Footer } from "./footer"
import { Aside } from "./aside"

export const Layout = () => {

    return <>
        <Aside />
        <Outlet />
        <Footer />
    </>
}