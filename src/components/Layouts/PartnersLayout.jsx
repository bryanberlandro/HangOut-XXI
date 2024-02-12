import { PartnersFrag } from "../Fragments/PartnersFrag";

import partner1 from "../../assets/img/xxi-logo.png"
import partner2 from "../../assets/img/dana-logo.png"
import partner3 from "../../assets/img/cgv-logo.png"
import partner4 from "../../assets/img/cinepolis-logo.png"

export function PartnersLayout(){
    const partners = [
        {
            id: 1,
            image: partner1
        },
        {
            id: 2,
            image: partner4
        },
        {
            id: 3,
            image: partner3
        },
        {
            id: 4,
            image: partner2
        },
    ]
    return (
        <>
        <div className="px-[7%]">
            <h1 className="font-semibold text-xl mb-6">Our Partners</h1>
            <div className="flex flex-wrap gap-4 justify-center">
            {partners.map(partner => (
                <PartnersFrag image={partner.image} key={partner.id}/>
            ))}
            </div>
        </div>
        </>
    )
}