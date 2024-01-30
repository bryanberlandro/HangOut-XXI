import { Link } from "react-router-dom";
import { ButtonEl } from "../Elements/Button/ButtonEl";
import InputForm from "../Elements/Input";

export default function FormLogin(){
    return (
        <>
        <div className="flex flex-col gap-4 mt-6">
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
            <div className="text-center">
            <h1 className="font-light text-sm">Already have an account? <Link to={"/register"} className="text-btn font-semibold">Register</Link></h1>
            </div>
        </div>
        </>
    )
}