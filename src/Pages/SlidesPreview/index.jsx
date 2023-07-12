import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import LargeTile from "./Components/LargeTile";
import SmallTile from "./Components/SmallTile";
import Bar from "./Components/Bar.jsx";
import {useNavigate} from "react-router-dom";

export default function SlidesPreview({setFinalModal}) {
    const slidesData = useSelector((state) => state.outline.outline);
    const socket = useSelector((state) => state.socket.socketId);
    const [loading, setLoading] = useState(false);
    const slidesRes = useSelector((state) => state.socket.receivedData);
    const [selected, setSelected] = useState(0); // Update to hold the index
    const {reqPrompt, grade, slides, difficulty} = useSelector((state) => state.promptData);
    const navigate = useNavigate();

    useEffect(() => {
        if (socket === "" || reqPrompt === "" || grade === "" || slides === "" || difficulty === "" || slidesData.length === 0) {
            navigate("/")
        }
    }, [])

    useEffect(() => {
        setSelected(0);
    }, [slidesRes]);

    useEffect(() => {
        setLoading(true);

        const updateSlides = async () => {
            try {
                console.log(slidesData);
                const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/update_slides?socketID=${socket}`, {
                    method: "POST",
                    redirect: 'follow',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({text: `<START>${JSON.stringify(slidesData)}<END>`})
                });
                setLoading(false);
                if (response.ok) {

                } else {
                    // Handle error if necessary
                    console.error('Error updating slides:', response.status, response.statusText);
                }
            } catch (error) {
                // Handle fetch error
                console.error('Error updating slides:', error);
            }
        };
        updateSlides();
    }, []);

    // Get the selected tile based on the selected index
    const selectedTile = slidesRes[selected];

    return (
        <div className="w-full flex flex-row rounded-lg bg-gray-300">
            <div className="h-full w-1/6 grid grid-cols-1 rounded-l-lg justify-center overflow-auto">
                {slidesRes.map((tile, index) => (
                    <div className="p-2" key={index}>
                        <SmallTile
                            data={tile}
                            setSelected={() => setSelected(index)} // Pass the index
                            selected={selected === index} // Check if current tile is selected
                        />
                    </div>
                ))}
            </div>
            <div className="w-5/6 flex p-5 flex-col h-full">
                <div className="w-full h-full flex flex-col">
                    <LargeTile data={selectedTile}/> {/* Pass the selected tile */}
                    <Bar loading={loading} setFinalModal={setFinalModal}/>
                </div>
            </div>
        </div>
    );
}
