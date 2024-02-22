import React from "react";

function CustomSelector ({options, id, handlerSelect}) {
    const [defaultValue, setDefaultValue] = React.useState(true)
    return (
        <select 
            onChange={(e) => {
                if(e.target.value !== ""){
                    setDefaultValue(false)
                    handlerSelect(e, id)
                }
            }}
            id={id}
            className="min-w-full bg-stone-800 border-none outline-none text-md text-stone-300  px-2 py-1 font-medium appearance-none overflow-hidden"
        >
            <option value="" disabled={defaultValue ? false : true}>{`Select`}</option>
            {options.map(item => (
                <option key={item.id} value={item.id}>{item.name} - {item.price}$</option>
            ))}
        </select>
    )
}
export default CustomSelector