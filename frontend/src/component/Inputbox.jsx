
import 'tailwindcss/tailwind.css';

export function Inputbox({placeholder,setvalue,type}) {
    return <div className="flex justify-center w-full">
    <input className="w-11/12 p-1 pl-3 text-xs font-thin text-gray-500 border border-1.5 border-gray-400 rounded-lg outline-none shadow-3xl"
    type={type}
    onChange={(e)=>{
        setvalue(e.target.value)
    }} 
    placeholder={placeholder}></input>
    </div>
}