import { Outlet } from "react-router";
import AppFooter from "../components/AppFooter";
import AppHeader from "../Components/AppHeader";
import AppMain from "../Components/AppMain";


export default function defaultLayout() {
    return (
        <>
            <AppHeader />
            <AppMain />
            <AppFooter />
        </>
    )
}