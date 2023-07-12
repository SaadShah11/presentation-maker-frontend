import LiPoint from "./LiPoint.jsx";
import ButtonGroupSlide from "./SlideButtonGroup.jsx";
import uuid from "react-uuid";
import {useEffect, useState} from "react";

export default function SlideComponents({
                                            points,
                                            setDataJson,
                                            index,
                                            title,
                                            DeleteSlide,
                                            addSlideAbove,
                                            addSlideBelow,
                                        }) {

    function AddPoint() {
        setDataJson((prevDataJSON) => {
                return [
                    ...prevDataJSON.slice(0, index - 1),
                    {...prevDataJSON[index - 1], content: [...prevDataJSON[index - 1].content, ""]},
                    ...prevDataJSON.slice(index)
                ];
            }
        )
    }

    function AddPointAbove(cIndex) {
        setDataJson((prevDataJSON) => {
            return [
                ...prevDataJSON.slice(0, index - 1),
                {
                    ...prevDataJSON[index - 1],
                    content: [
                        ...prevDataJSON[index - 1].content.slice(0, cIndex),
                        "",
                        ...prevDataJSON[index - 1].content.slice(cIndex)
                    ]
                },
                ...prevDataJSON.slice(index)
            ];
        });
    }

    function DeletePoint(cIndex) {
        setDataJson((prevDataJSON) => {
            return [
                ...prevDataJSON.slice(0, index - 1),
                {
                    ...prevDataJSON[index - 1],
                    content: prevDataJSON[index - 1].content.filter((_, i) => i !== cIndex)
                },
                ...prevDataJSON.slice(index)
            ];
        });
    }


    return (
        <li
            className={`p-6 flex flex-col m-2 rounded-lg relative shadow-[5px_7px_3px_rgba(0,0,0,0.1)] drop-shadow-md z-0 bg-[#D6D5E6]`}>
            <div className={"flex"}>
                <button
                    className={"text-white btn-circle btn-ghost flex items-center justify-center my-auto mx-auto w-14 h-14"}
                    onClick={() => {
                        DeleteSlide(index)
                    }}>
                    <span className="text-4xl text-red-600">×</span>
                </button>
                <div className={"w-full justify-center flex "}>
                    <input type="text" placeholder="Type here" onChange={(e) => {
                        setDataJson((dataJSON) => {
                            dataJSON[index - 1].title = e.target.value
                            return dataJSON
                        })
                    }}
                           className="input input-ghost  font-primary w-full text-center text-2xl m-2 text-black"
                           defaultValue={title}/>
                </div>
            </div>

            <div className={"flex flex-col w-full h-full p-3"}>
                <ul className={""}>
                    {points.map((item, cIndex) => {
                        return (
                            <LiPoint point={item} key={uuid()} index={cIndex} pIndex={index} setDataJson={setDataJson}
                                     deletePoint={DeletePoint} addPointAbove={AddPointAbove}
                            />
                        )
                    })}
                </ul>
                <ButtonGroupSlide deleteSlide={() => {
                    DeleteSlide(index)
                }} addPoint={AddPoint} index={index}
                                  addSlideAbove={addSlideAbove} addSlideBelow={addSlideBelow}/>
            </div>
        </li>
    )
}





