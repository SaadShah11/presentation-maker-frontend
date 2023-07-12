import {useSelector} from "react-redux";

export default function TopText() {
    const Prompt = useSelector((state) => state.promptData);
    return (
        <>
            <h1 className={"text-center font-bold text-3xl"}>Outline Preview</h1>
            <p className={"text-center font-thin text-gray-500 my-2"}>
                Outline for the Topic <span className={"font-black text-black"}>"{Prompt.reqPrompt}"</span> for
                Grade <span
                className={"font-black text-black"}>{Prompt.grade}</span> with
                Difficulty <span className={"font-black text-black"}>{Prompt.difficulty}</span> and <span
                className={"font-black text-black"}>{Prompt.slides}</span> Slide/Slides.
            </p>
        </>
    )
}
