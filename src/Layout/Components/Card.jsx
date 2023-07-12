export default function Card({children}) {
    return (
        <div className="w-full h-full p-2 px-10">
            <div className={"w-full h-full bg-white flex rounded-lg"}>
                {children}
            </div>
        </div>
    )
}