import {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {setForm} from "../../Redux/slices/PromptSlice.js";
import {resetReceivedData} from "../../Redux/slices/SocketSlice.js";
import {resetOutline} from "../../Redux/slices/OutlineSlice.js";
import Form from "./Components/Form.jsx";
import TopText from "./Components/TopText.jsx";
import Image from "./Components/Image.jsx";

export default function MainPage({setLoading, setGenSlides, setFinalModal}) {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(false);
        setGenSlides(false);
        setFinalModal(false);
        dispatch(setForm({reqPrompt: "", grade: "", slides: "", difficulty: ""}));
        dispatch(resetReceivedData());
        dispatch(resetOutline());
    }, []);

    async function onSubmit(data) {
        const {topic, difficultyLevels, grade, numSlides} = data;
        const slides = numSlides.toString();
        const difficulty = difficultyLevels;
        const reqPrompt = topic;
        dispatch(setForm({reqPrompt, grade, slides, difficulty}));
        setLoading(true);
        navigate("/outline");
    }

    return (
        <>
            <div className="w-full h-full flex flex-col py-6 px-14">
                <div className="w-full flex flex-col">
                    <TopText/>
                </div>
                <div className="flex flex-row w-full h-full py-2">
                    <Form
                        handleSubmit={handleSubmit(onSubmit)}
                        register={register}
                        errors={errors}
                    />
                    <div className="w-full h-full flex justify-center items-center">
                        <Image/>
                    </div>
                </div>
            </div>
        </>
    );
}
