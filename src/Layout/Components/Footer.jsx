export default function Footer() {
    return (
        <footer className={"w-full flex justify-center items-center px-5 h-8"}>
            <div className={"w-full font-black text-lg leading-8 text-white flex items-center"}><p>
                <span className={"text-[0.7rem] font-light"}>&copy; Copyright</span> OneScreen</p></div>
            <div className={"w-full flex justify-end items-center"}>
                <p className="font-normal text-sm leading-8 text-white">Contact us
                    at <span className={"font-bold"}>teams&#64;presentation.ai</span></p>
            </div>
        </footer>
    )
}
