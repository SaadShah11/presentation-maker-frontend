export default function ButtonGroupSlide({deleteSlide, addPoint, addSlideAbove, addSlideBelow, index}) {
    return (
        <div className={"w-full flex justify-end"}>
            <ul className="menu ghost menu-horizontal">
                <li>
                    <button
                        className={"w-12 h-12 bg-purple-secondary hover:scale-105 hover:bg-purple-500 flex rounded-full ml-2"}
                        type="button" onClick={() => {
                        addSlideBelow(index)

                    }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.9393 23.0607C11.5251 23.6464 12.4749 23.6464 13.0607 23.0607L22.6066 13.5147C23.1924 12.9289 23.1924 11.9792 22.6066 11.3934C22.0208 10.8076 21.0711 10.8076 20.4853 11.3934L12 19.8787L3.51472 11.3934C2.92893 10.8076 1.97918 10.8076 1.3934 11.3934C0.807611 11.9792 0.807611 12.9289 1.3934 13.5147L10.9393 23.0607ZM10.5 0L10.5 22H13.5L13.5 0L10.5 0Z"
                                fill="white"/>
                        </svg>


                    </button>

                </li>
                <li>
                    <button
                        className={"w-12 h-12 bg-purple-secondary hover:scale-105 hover:bg-purple-500 flex rounded-full ml-2"}
                        type="button" onClick={() => {
                        addSlideAbove(index)

                    }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.0607 0.93934C12.4749 0.353553 11.5251 0.353553 10.9393 0.93934L1.3934 10.4853C0.807612 11.0711 0.807612 12.0208 1.3934 12.6066C1.97918 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.93934ZM13.5 24L13.5 2H10.5L10.5 24H13.5Z"
                                fill="white"/>
                        </svg>

                    </button>

                </li>
            </ul>
        </div>
    )
}
