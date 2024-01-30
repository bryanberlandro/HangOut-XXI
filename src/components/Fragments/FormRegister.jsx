/* eslint-disable react/prop-types */
import { ButtonEl } from "../Elements/Button/ButtonEl";
import InputForm from "../Elements/Input";

export default function FormRegister(){
    return (
        <>
        <div className="flex flex-col gap-4 mt-6">
            <InputForm
            type="text"
            name="username"
            id="username"
            placeholder="create your name"
            htmlFor="username"
            value={"Username"}
            />
            <InputForm
            type="email"
            name="email"
            id="email"
            placeholder="example@example.com"
            htmlFor="email"
            value={"E-mail"}
            />
            <InputForm
            type="password"
            name="password"
            id="password"
            placeholder="********"
            htmlFor="password"
            value={"Password"}
            />
            <ButtonEl value={"Create Your Account"}/>
            
        </div>
        </>
    )
}