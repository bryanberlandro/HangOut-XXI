/* eslint-disable react/prop-types */
import { useState } from "react";
import { ButtonEl } from "../Elements/Button/ButtonEl";
import InputForm from "../Elements/Input";

export default function FormRegister(){
    const [isLogin, setIsLogin] = useState(true)


    function handleRegister(e){
        e.preventDefault()
        const target = e.target
        const fullname = target.fullname.value
        const userName = target.username.value
        const email = target.email.value
        const password = target.password.value
        const id = Math.floor(Math.random() * 100)

        if(userName == ""){
            setIsLogin(false)
            alert("Please enter your username")
            return 
        }
        if(email == ""){
            setIsLogin(false)
            alert("Please enter your email")
            return 
        }
        if(password == ""){
            setIsLogin(false)
            alert("Please enter your password")
            return 
        }

        localStorage.setItem('id', id)
        localStorage.setItem('fullname', fullname)
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
            name="fullname"
            id="fullname"
            placeholder="insert your full name"
            htmlFor="fullname"
            value={"Fullname"}
            isLogin={isLogin}
            />
            <InputForm
            type="text"
            name="username"
            id="username"
            placeholder="create your name"
            htmlFor="username"
            value={"Username"}
            isLogin={isLogin}
            />
            <InputForm
            type="email"
            name="email"
            id="email"
            placeholder="example@example.com"
            htmlFor="email"
            value={"E-mail"}
            isLogin={isLogin}
            />
            <InputForm
            type="password"
            name="password"
            id="password"
            placeholder="********"
            htmlFor="password"
            value={"Password"}
            isLogin={isLogin}
            />
            <ButtonEl value={"Create Your Account"} onSubmit={() => handleRegister()}/>
            
        </form>
        </>
    )
}