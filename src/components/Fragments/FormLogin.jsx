/* eslint-disable react/prop-types */
import { ButtonEl } from "../Elements/Button/ButtonEl";
import InputForm from "../Elements/Input";

export default function FormLogin(){
    return (
        <>
        <div className="flex flex-col gap-5">
            <InputForm
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
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
            <div className="text-end">
                <a href="" className="text-btn text-sm">forget your password?</a>
            </div>
            <ButtonEl value={"LOGIN"}/>
            <div className="w-full text-xs my-2 flex items-center justify-center text-neutral-400 gap-2">
                <div className="bg-neutral-300 w-[40%] h-[2px]"></div>
                <h1>OR</h1>
                <div className="bg-neutral-300 w-[40%] h-[2px]"></div>
            </div>
        </div>
        </>
    )
}