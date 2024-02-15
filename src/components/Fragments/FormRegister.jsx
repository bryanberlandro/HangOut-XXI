/* eslint-disable react/prop-types */
import { ButtonEl } from "../Elements/Button/ButtonEl";
import InputForm from "../Elements/Input";

export default function FormRegister(){

    function handleRegister(e){
        e.preventDefault()
        const target = e.target
        const userName = target.username.value
        const email = target.email.value
        const password = target.password.value
        const id = Math.floor(Math.random() * 100)

        if(userName == ""){
            return alert("Please enter your username")
        }
        if(email == ""){
            return alert("Please enter your email")
        }
        if(password == ""){
            return alert("Please enter your password")
        }

        localStorage.setItem('id', id)
        localStorage.setItem('username', userName)
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
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