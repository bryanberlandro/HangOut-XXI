/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { ButtonEl } from "../Elements/Button/ButtonEl";
import InputForm from "../Elements/Input";
import { UserProfile } from "../../context/User";

export default function FormLogin(){
    const [isLogin, setIsLogin] = useState(true)
    const {user, setUser} = useContext(UserProfile)
    
    function handleLogin(e){
        e.preventDefault()
        const userEmail = JSON.stringify(user[0].email).slice(1, -1)
        const userPassword = JSON.stringify(user[0].password).slice(1, -1)
        const emailLogin = e.target.email.value
        const passwordLogin = e.target.password.value
        
        if(emailLogin == "" && passwordLogin == ""){
            setIsLogin(false)
            return alert('Please fill this section below')
        }

        if(emailLogin == ""){
            setIsLogin(false)
            return alert('Please enter your email')
        }

        if(passwordLogin == ""){
            setIsLogin(false)
            return alert('Please enter your password')
        }
        
        if(userEmail !== emailLogin || userPassword !== passwordLogin){
            setIsLogin(false)
            alert('Email atau password yang anda masukan salah')
            return
        }

        setIsLogin(true)
        if(isLogin && userEmail){
            window.location.href = '/'
        } else {
            alert('Email atau password yang anda masukan salah')
        }
    }
    



        return (
            <>
            <form onSubmit={handleLogin} className="flex flex-col gap-5">
                <InputForm
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
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
                <div className="text-end">
                    <a href="" className="text-btn text-sm">forget your password?</a>
                </div>
                <ButtonEl value={"LOGIN"}/>
                <div className="w-full text-xs my-2 flex items-center justify-center text-neutral-400 gap-2">
                    <div className="bg-neutral-300 w-[40%] h-[2px]"></div>
                    <h1>OR</h1>
                    <div className="bg-neutral-300 w-[40%] h-[2px]"></div>
                </div>
            </form>
            </>
        )
    }
