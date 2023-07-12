import {useState} from "react";

export default function LargeTile({data}) {
    const [loading, setLoading] = useState(true);
    return (
        <>
            <div
                className="transition-all rounded-lg bg-white shadow-2xl bg-cover bg-center mx-auto h-[90%] aspect-[16/9] flex flex-col ">
                <h1 className={"text-center h-[15%] text-[200%] p-[2%]"}>{data.title}</h1>
                <div className={"flex w-full h-[85%] flex-row-reverse items-center"}>
                    <div className={"h-full w-full flex justify-center items-center"}>
                        <div className={"w-[80%] h-[80%] grid place-items-center outline outline-2"}>
                            {loading ?
                                <div
                                    className={"animate-spin border-4 border-l-black w-20 h-20 rounded-full"}></div> :
                                <img src={"https://picsum.photos/seed/1/1080"} alt={"image"}
                                     className={"w-full h-full"}/>}
                        </div>
                    </div>

                    <div className={"[&>li]:text-[100%] flex justify-center pl-[2.4%] flex-col w-full h-full"}>
                        {data.content.map((i, index) => {
                            return (
                                <li key={index}>{i}</li>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
