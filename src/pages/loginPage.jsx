import FormLogin from "../components/Fragments/FormLogin";
import { AuthLayout } from "../components/Layouts/AuthLayout";

export default function LoginPage(){
    return (
        <div className="w-full h-[100vh] px-[5%] flex justify-center items-center">
            <AuthLayout title={"Login"}>
                <FormLogin/>
            </AuthLayout>
        </div>
    )
}