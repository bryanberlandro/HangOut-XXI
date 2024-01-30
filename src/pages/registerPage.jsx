import { Waves } from "../components/Elements/Waves/Waves";
import FormRegister from "../components/Fragments/FormRegister";
import { AuthLayout } from "../components/Layouts/AuthLayout";

export default function RegisterPage(){
    return (
        <div className="w-full h-[100vh] px-[5%] flex justify-center items-start pt-7">
            <AuthLayout title={"Register"}>
                <FormRegister/>
            </AuthLayout>
            <Waves/>
        </div>
    )
}