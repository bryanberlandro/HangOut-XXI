import FormLogin from "../components/Fragments/FormLogin";
import FormRegister from "../components/Fragments/FormRegister";
import { AuthLayout } from "../components/Layouts/AuthLayout";

export default function RegisterPage(){
    return (
        <div className="w-full h-[100vh] px-[5%] flex justify-center items-center">
            <AuthLayout title={"Register"}>
                <FormRegister/>
            </AuthLayout>
        </div>
    )
}