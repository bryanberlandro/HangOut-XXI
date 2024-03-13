/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ButtonEl } from "../Elements/Button/ButtonEl";
import InputForm from "../Elements/Input";

export default function FormRegister(){
    const [isLogin, setIsLogin] = useState(true)
    const [user, setUser] = useState([])


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

        const updateUser = 
        [...user, 
            {
                fullname: fullname, 
                username: userName,
                email: email,
                password: password,
                user_id: id
            } 
        ]

        setUser(updateUser)
        window.location.href = '/login'
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

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