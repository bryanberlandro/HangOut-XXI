import { Waves } from "../components/Elements/Waves/Waves";
import FormLogin from "../components/Fragments/FormLogin";
import { AuthLayout } from "../components/Layouts/AuthLayout";
import { ButtonSEO } from "../components/Elements/Button/ButtonSEO";

export default function LoginPage(){
    
    return (
        <div className="w-full h-[100dvh] px-[5%] flex justify-center items-center relative">
            <AuthLayout title={"Login"} type={"login"}>
                <FormLogin/>
                <ButtonSEO name={"Google"} image={'/img/google.png'} />
                <ButtonSEO name={"E-mail"} image={'/img/email.png'} bgColor={"bg-neutral-800"} color={"white"}/>
            </AuthLayout>
            <Waves/>
        </div>
    )
}