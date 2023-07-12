import Svg from "./Svg.jsx";

export default function Header() {
    return (
        <header className={"w-full flex h-14 px-5"}>
            <div className={"w-full flex justify-start items-center"}>
                <Svg/>
            </div>
            <div className={"w-full flex justify-end items-center"}>
                <h1 className="font-normal text-base leading-8 text-white">Write and engaging presentation in a
                    minute</h1>
            </div>
        </header>
    )
}

