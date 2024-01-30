import { Waves } from "../components/Elements/Waves/Waves";
import FormLogin from "../components/Fragments/FormLogin";
import { AuthLayout } from "../components/Layouts/AuthLayout";

export default function LoginPage(){
    return (
        <div className="w-full h-[100dvh] px-[5%] flex justify-center items-center relative">
            <AuthLayout title={"Login"}>
                <FormLogin/>
            </AuthLayout>
            <Waves/>
        </div>
    )
}