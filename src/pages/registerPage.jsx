import { Waves } from "../components/Elements/Waves/Waves";
import FormRegister from "../components/Fragments/FormRegister";
import { AuthLayout } from "../components/Layouts/AuthLayout";

export default function RegisterPage(){
    return (
        <div className="w-full h-[100dvh] px-[5%] flex justify-center relative items-center">
            <AuthLayout title={"Register"} type={"register"}>
                <FormRegister/>
            </AuthLayout>
            <Waves/>
        </div>
    )
}