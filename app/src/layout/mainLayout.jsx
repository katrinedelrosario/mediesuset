import { Footer } from "../components/footer/footer"
import { Hero } from "../components/hero/hero"
import { Navbar } from "../components/navbar/navbar"
import {Outlet} from "react-router-dom"


export const MainLayout = () => {
    return (
        <main>
            <Navbar/>
            <Hero/>
            <Outlet/>
            <Footer/>
        </main>
    )
}