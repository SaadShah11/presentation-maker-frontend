import {Link} from "react-router-dom";

export default function ButtonGroup({genSlides}) {
    return (
        <div className={"w-full flex justify-end"}>
            <ul className="grid grid-cols-2 gap-2">
                <li>
                    <button
                        className={"h-full btn flex justify-center border-indigo-secondary hover:border-indigo-secondary bg-indigo-secondary border-2 group items-center"}
                        type={"button"}
                        onClick={genSlides}>
                        <span
                            className={"h-full w-full items-center text-white duration-100 group-hover:text-black justify-center flex"}>

                        Generate Slides
                        </span>
                    </button>
                </li>
                <li>
                    <Link to={"/"}
                          className={"h-full flex btn border-2 border-orange-primary bg-transparent hover:bg-transparent justify-center items-center"}>
                        <span
                            className={"h-full w-full items-center text-black justify-center flex"}>
                        Cancel
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
