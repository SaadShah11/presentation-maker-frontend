export default function LiPoint({point, pIndex, setDataJson, deletePoint, index, addPointAbove}) {
    function autoExpand(event) {
        const textarea = event.target;
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    }

    return (
        <li className="relative flex w-full">
            <ul>
                <li className={"list-disc"}></li>
            </ul>
            <div className={"w-full"}>
        <textarea
            onInput={autoExpand}
            className="p-1 textarea-xs text-lg font-primary h-auto text-black focus:text-black overflow-hidden w-full resize-none textarea textarea-ghost pr-24"
            defaultValue={point}
            onChange={(e) => {
                setDataJson(temp => {
                    temp[pIndex - 1].content[index] = e.target.value;
                    return temp;
                });
            }}
        />
                <div
                    className={"top-0 right-0 absolute"}>
                    <button
                        type="button"
                        onClick={() => {
                            addPointAbove(index);
                        }}
                        className="text-white btn-circle btn-ghost"
                    >
                        <span className="text-2xl text-blue-primary">+</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            deletePoint(index);
                        }}
                        className="text-white btn-circle btn-ghost"
                    >
                        <span className="text-2xl text-red-600">×</span>
                    </button>
                </div>
            </div>
        </li>
    );
}
