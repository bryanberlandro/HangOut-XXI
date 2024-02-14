/* eslint-disable react/prop-types */
import { InputEl } from "./InputEl.";
import { LabelEl } from "./LabelEl";

export default function InputForm({htmlFor, value, type, name, id, placeholder, isLogin}){
    return(
        <div className="flex flex-col gap-1">
            <LabelEl htmlFor={htmlFor} value={value}/>
            <InputEl 
            type={type}
            name={name} 
            id={id} 
            placeholder={placeholder}
            isLogin={isLogin}
            />
        </div>
    )
}