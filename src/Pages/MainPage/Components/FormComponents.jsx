export function FormSlider({
                               label,
                               name,
                               max,
                               min,
                               register,
                               error,
                               ...props
                           }) {
    return (
        <div className="mb-2">
            <label htmlFor={name} className="w-full flex mb-2">
        <span className="text-sm font-medium flex items-center justify-start text-gray-900 w-full text-start ">
          {label}
        </span>
            </label>
            <input
                type="range"
                min={min}
                max={max}
                className="range"
                id={name}
                step="5"
                {...register(name, {...props})}
            />
            <div className={"flex justify-center"}>
                <div className="w-full flex justify-between text-xs px-2">
                    <span>5</span>
                    <span>10</span>
                    <span>15</span>
                </div>
            </div>
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
}

export function FormInput({
                              label,
                              name,
                              type,
                              placeholder,
                              register,
                              error,
                              ...props
                          }) {
    return (
        <div className="mb-2">
            <label htmlFor={name} className="w-full flex mb-2">
        <span className="text-sm font-medium flex items-center justify-start text-gray-900 w-full text-start ">
          {label}
        </span>
            </label>
            <input
                type={type}
                id={name}
                className={`bg-gray-50 border ${
                    error ? "border-red-500" : "border-gray-300"
                } text-gray-900 text-sm rounded-lg w-full p-2.5`}
                placeholder={placeholder}
                {...register(name, {...props})}
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
}

export function FormRadioGroup({
                                   label,
                                   name,
                                   options,
                                   register,
                                   error,
                                   ...props
                               }) {
    return (
        <div className="flex mt-5 flex-col">
            <h1 className="w-full flex mb-2 text-sm">{label}</h1>
            <ul className="grid w-full gap-6 md:grid-cols-3 mb-2">
                {options.map((option, index) => (
                    <li key={index}>
                        <input
                            type="radio"
                            id={option.value}
                            name={name}
                            value={option.value}
                            className="hidden peer"
                            {...register(name, {...props})}
                        />
                        {option.value === "easy" ? (
                            <label
                                htmlFor={option.value}
                                className={`inline-flex items-center border-2 border-slate-300 justify-center w-full p-2 text-slate-800 bg-white rounded-lg cursor-pointer peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100`}
                            >
                                <div className="block">
                                    <div className="w-full text-lg font-normal">
                                        {option.label}
                                    </div>
                                </div>
                            </label>
                        ) : option.value === "medium" ? (
                            <label
                                htmlFor={option.value}
                                className={`inline-flex items-center border-2 border-slate-300 justify-center w-full p-2 text-slate-800 bg-white rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100`}
                            >
                                <div className="block">
                                    <div className="w-full text-lg font-normal">
                                        {option.label}
                                    </div>
                                </div>
                            </label>
                        ) : option.value === "hard" ? (
                            <label
                                htmlFor={option.value}
                                className={`inline-flex items-center border-2 border-slate-300 justify-center w-full p-2 text-slate-800 bg-white rounded-lg cursor-pointer peer-checked:border-red-600 peer-checked:text-red-600 hover:text-gray-600 hover:bg-gray-100`}
                            >
                                <div className="block">
                                    <div className="w-full text-lg font-normal">
                                        {option.label}
                                    </div>
                                </div>
                            </label>
                        ) : null}
                    </li>
                ))}
            </ul>
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
}

export function FormSelect({
                               label,
                               name,
                               options,
                               register,
                               error,
                               ...props
                           }) {
    return (
        <div className="mb-2">
            <label
                htmlFor={name}
                className="block mb-2 text-sm font-medium text-gray-900"
            >
                {label}
            </label>
            <select
                id={name}
                className={`bg-gray-50 border ${
                    error ? "border-red-500" : "border-gray-300"
                } select select-bordered w-full`}
                {...register(name)}
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
}
