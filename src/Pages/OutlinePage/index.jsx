import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import FetchOutline from "../../GlobalFuncs/FetchOutline.js";
import uuid from "react-uuid";
import {useNavigate} from "react-router-dom";
import ButtonGroup from "./Components/ButtonGroup.jsx";
import TopText from "./Components/TopText.jsx";
import SlideComponent from "./Components/SlideComponent.jsx";
import {setOutline} from "../../Redux/slices/OutlineSlice.js";


export default function OutlinePage({setLoading, setFinalModal}) {
    const [dataJSON, setDataJSON] = useState([]);
    const [regenerate, setRegenerate] = useState(true)
    const {socketId} = useSelector((state) => state.socket);
    const {reqPrompt, grade, slides, difficulty} = useSelector((state) => state.promptData);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    function genSlides(e) {
        e.preventDefault();
        dispatch(setOutline(dataJSON));
        navigate("/slides-preview");
    }

    function DeleteSlide(index) {
        setDataJSON((prevDataJSON) => {
            for (let i = index; i < prevDataJSON.length; i++) {
                prevDataJSON[i].slide_number -= 1;
            }
            return prevDataJSON.slice(0, index - 1).concat(prevDataJSON.slice(index));
        });
    }

    function AddSlideAbove(index) {
        setDataJSON((prevDataJSON) => {
            const newSlide = {title: "", content: [""], slide_number: prevDataJSON[index - 1].slide_number};
            return [
                ...prevDataJSON.slice(0, index - 1),
                newSlide,
                ...prevDataJSON.slice(index - 1).map((slide) => ({...slide, slide_number: slide.slide_number + 1}))
            ];
        });
    }

    function AddSlideBelow(index) {
        setDataJSON((prevDataJSON) => {
            const newSlide = {title: "", content: [""], slide_number: prevDataJSON[index - 1].slide_number + 1};
            return [
                ...prevDataJSON.slice(0, index),
                newSlide,
                ...prevDataJSON.slice(index).map((slide) => ({...slide, slide_number: slide.slide_number + 1}))
            ];
        });
    }

    useEffect(() => {
        setFinalModal(false)
    }, [])

    useEffect(() => {
        if (socketId === "" || reqPrompt === "" || grade === "" || slides === "" || difficulty === "") {
            navigate("/")
        }
    }, [reqPrompt, grade, slides, difficulty, socketId])
    useEffect(() => {
        if (regenerate) {
            FetchOutline(socketId, reqPrompt, grade, slides, difficulty, setLoading, dispatch).then((data) => {
                console.log(data)
                setDataJSON(JSON.parse(JSON.stringify(data)))
                setRegenerate(false)
            })
        }
    }, [regenerate])

    return (
        <form className={"w-full h-full flex flex-col py-5 px-14 overflow-hidden z-0 relative"}>
            <div className={"w-full flex flex-col"}>
                <TopText/>
            </div>
            <ul
                className={"flex flex-col w-full  rounded-lg mb-2 overflow-auto z-0"}>
                {dataJSON.map((item, index) => {
                    return <SlideComponent setDataJson={setDataJSON} points={item.content} title={item.title}
                                           index={index + 1}
                                           DeleteSlide={DeleteSlide}
                                           key={uuid()} addSlideBelow={AddSlideBelow}
                                           addSlideAbove={AddSlideAbove}/>
                })}
            </ul>
            <ButtonGroup genSlides={genSlides}/>
            <button
                className={"absolute right-0 mr-5 btn-square btn bg-green-primary flex justify-center items-center group"}
                onClick={(e) => {
                    e.preventDefault()
                    setRegenerate(!regenerate)
                }}>

                <svg fill="#000000"
                     className={"w-6 h-6 group-hover:rotate-180 transition-all scale-x-[-1] duration-300"}
                     viewBox="0 0 489.533 489.533"
                >
                    <path
                        d="M268.175,488.161c98.2-11,176.9-89.5,188.1-187.7c14.7-128.4-85.1-237.7-210.2-239.1v-57.6c0-3.2-4-4.9-6.7-2.9 l-118.6,87.1c-2,1.5-2,4.4,0,5.9l118.6,87.1c2.7,2,6.7,0.2,6.7-2.9v-57.5c87.9,1.4,158.3,76.2,152.3,165.6 c-5.1,76.9-67.8,139.3-144.7,144.2c-81.5,5.2-150.8-53-163.2-130c-2.3-14.3-14.8-24.7-29.2-24.7c-17.9,0-31.9,15.9-29.1,33.6 C49.575,418.961,150.875,501.261,268.175,488.161z"/>

                </svg>
            </button>


        </form>
    )
}





