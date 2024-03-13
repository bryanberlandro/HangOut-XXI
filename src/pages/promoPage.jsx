import { Header } from "../components/Fragments/Header";
import { PromoLayout } from "../components/Layouts/PromoLayout";

export default function PromoPage(){
    return(
        <div className="w-full h-dvh overflow-hidden">
            <Header 
            name={'HANGOUT'}
            linkTo={'/'}
            />
            <PromoLayout/>
        </div>
    )
}