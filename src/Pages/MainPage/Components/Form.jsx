import {FormInput, FormRadioGroup, FormSlider, FormSelect} from "./FormComponents.jsx";
import {Link} from "react-router-dom";

export default function Form({handleSubmit, register, errors}) {
    return (
        <div className="flex flex-col w-full h-full justify-center">
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Tell us about the topic"
                    name="topic"
                    type="text"
                    placeholder="Topic of the Presentation"
                    register={register}
                    required
                    error={errors.topic && "Please enter a topic"}
                />
                <FormSelect
                    label="Select Subject"
                    name="subj"
                    options={[
                        {value: "math", label: "Math"},
                        {value: "science", label: "Science"},
                        {value: "history", label: "History"},
                        {value: "english", label: "English"},
                        {value: "geography", label: "Geography"},
                        {value: "other", label: "Other"},
                    ]}
                    register={register}
                    required
                />
                <FormRadioGroup
                    label="Difficulty levels"
                    name="difficultyLevels"
                    options={[
                        {value: "easy", label: "Easy", color: "green-600"},
                        {value: "medium", label: "Medium", color: "blue-600"},
                        {value: "hard", label: "Hard", color: "blue-primary"},
                    ]}
                    register={register}
                    required
                    error={errors.difficultyLevels && "Please select a difficulty level"}
                />
                <FormSelect
                    label="Select Grade"
                    name="grade"
                    options={[
                        {value: "1", label: "Grade 1"},
                        {value: "2", label: "Grade 2"},
                        {value: "3", label: "Grade 3"},
                        {value: "4", label: "Grade 4"},
                        {value: "5", label: "Grade 5"},
                        {value: "6", label: "Grade 6"},
                        {value: "7", label: "Grade 7"},
                        {value: "8", label: "Grade 8"},
                        {value: "9", label: "Grade 9"},
                        {value: "10", label: "Grade 10"},
                        {value: "11", label: "Grade 11"},
                        {value: "12", label: "Grade 12"},
                    ]}
                    register={register}
                    required
                />
                <FormSlider
                    label="Choose the number of slides"
                    name="numSlides"
                    type="number"
                    min="5"
                    max="15"
                    register={register}
                    required
                />

                <button
                    className={"btn flex justify-center border-indigo-secondary hover:bg-transparent hover:border-indigo-secondary bg-indigo-secondary border-2 group items-center"}
                    type={"submit"}>

                        <span
                            className={"h-full w-full items-center text-white duration-100 group-hover:text-black justify-center flex"}>
                        Generate Outline
                        </span>
                </button>
            </form>
        </div>
    );
}