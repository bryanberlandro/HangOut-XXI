/* eslint-disable react/prop-types */
import { ButtonEl } from "../Elements/Button/ButtonEl";
import InputForm from "../Elements/Input";

export default function FormRegister(){
    function handleRegister(e){
        e.preventDefault()
        localStorage.setItem('username', e.target.username.value)
        localStorage.setItem('email', e.target.email.value)
        localStorage.setItem('password', e.target.password.value)
        window.location.href = '/login'
    }

    return (
        <>
        <form onSubmit={handleRegister} className="flex flex-col gap-5 mt-4">
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
            <ButtonEl value={"Create Your Account"} onSubmit={() => handleRegister()}/>
            
        </form>
        </>
    )
}