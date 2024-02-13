import { PartnersFrag } from "../Fragments/PartnersFrag";


export function PartnersLayout(){
    const partners = [
        {
            id: 1,
            image: '/img/xxi-logo.png'
        },
        {
            id: 2,
            image: '/img/cgv-logo.png'
        },
        {
            id: 3,
            image: '/img/dana-logo.png'
        },
        {
            id: 4,
            image: '/img/cinepolis-logo.png'
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