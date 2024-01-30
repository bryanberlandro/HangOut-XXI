import { Waves } from "../components/Elements/Waves/Waves";
import FormLogin from "../components/Fragments/FormLogin";
import { AuthLayout } from "../components/Layouts/AuthLayout";
import { ButtonSEO } from "../components/Elements/Button/ButtonSEO";
import googleLogo from "../assets/img/google.png";
import emailLogo from "../assets/img/email.png";

export default function LoginPage(){
    return (
        <div className="w-full h-[100dvh] px-[5%] flex justify-center items-start relative">
            
            <AuthLayout title={"Login"} type={"login"}>
                <FormLogin/>
                <ButtonSEO name={"Google"} image={googleLogo} />
                <ButtonSEO name={"E-mail"} image={emailLogo} bgColor={"neutral-950"} color={"white"}/>
            </AuthLayout>
            <Waves/>
        </div>
    )
}