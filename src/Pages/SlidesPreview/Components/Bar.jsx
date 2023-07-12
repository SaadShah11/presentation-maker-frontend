export default function Bar({loading, setFinalModal}) {
    return (
        <>
            <div className={"h-[10%] justify-between items-center flex w-full"}>
                <h1 className={"font-black text-black"}>PREVIEW</h1>
                <button onClick={() => {
                    setFinalModal(true);
                }}
                        className={loading ? "btn no-animation" : "btn bg-green-primary text-white border-0"}>Get
                    Slides<span
                        className={loading ? `loading` : "hidden"}/></button>
            </div>
        </>
    )
}