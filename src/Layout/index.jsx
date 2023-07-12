import Card from "./Components/Card.jsx";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import {BrowserRouter, Routes} from "react-router-dom";
import {useEffect} from "react";
import initializeSocketConnection from "../GlobalFuncs/SocketConn.js";
import {useDispatch} from "react-redux";


export default function Layout({children}) {
    const dispatch = useDispatch();
    useEffect(() => {
        initializeSocketConnection(dispatch);
    }, []);
    return (
        <div className="flex flex-col w-full h-full overflow-hidden">
            <Header/>
            <main className={"w-full h-[calc(100vh-5.5rem)]"}>
                <Card>
                    <BrowserRouter>
                        <Routes>{children}</Routes>
                    </BrowserRouter>
                </Card>
            </main>
            <Footer/>
        </div>
    );
}


