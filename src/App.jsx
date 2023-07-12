import {useState} from "react";
import {LoadingScreen, FinalModal, GenSlidesModal} from "./Loaders"
import Layout from "./Layout";
import {Route} from "react-router-dom";
import MainPage from "./Pages/MainPage/index.jsx";
import OutlinePage from "./Pages/OutlinePage/index.jsx";
import NotFound from "./Pages/NotFound/index.jsx";
import SlidesPreview from "./Pages/SlidesPreview/index.jsx";

export default function App() {
    const [loading, setLoading] = useState(false);
    const [finalModal, setFinalModal] = useState(false);
    const [genSlides, setGenSlides] = useState(false);
    return (
        <>
            {loading && <LoadingScreen/>}
            {genSlides && <GenSlidesModal/>}
            {finalModal && <FinalModal/>}
            <Layout>

                <Route path="/" element={<MainPage setLoading={setLoading}
                                                   setGenSlides={setGenSlides}
                                                   setFinalModal={setFinalModal}
                />}/>
                <Route path="/outline" element={<OutlinePage setLoading={setLoading}
                                                             setGenSlides={setGenSlides}
                                                             setFinalModal={setFinalModal}
                />}/>
                <Route path={"/slides-preview"} element={<SlidesPreview setFinalModal={setFinalModal}
                />}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path={"/test"} element={<Test/>}/>
            </Layout>
        </>
    );
}


function Test() {
    return (
        <div className={"h-72 w-[60rem] bg-gray-600 rounded-lg grid-cols-3 grid grid-rows-4 p-2"}>

            <div className={"p-2 w-full h-full"}>
                <select className={"h-full w-full bg-gray-300"}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </div>
            <div className={"p-2 w-full h-full"}>
                <select className={"h-full w-full bg-gray-300"}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </div>
            <div className={"p-2 w-full h-full"}>
                <select className={"h-full w-full bg-gray-300"}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </div>
            <div className={"p-2 w-full h-full"}>
                <select className={"h-full w-full bg-gray-300"}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </div>

        </div>
    )
}