import { FilterBtn } from "../Fragments/FilterBtn"

export const FilterBtnLayout = () => {
    return(
        <>
        <div className="w-max gap-2 flex py-2">
        <FilterBtn name={'All'}/>
        <FilterBtn name={'Promo'}/>
        <FilterBtn name={'Food'}/>
        <FilterBtn name={'Drink'}/>
        <FilterBtn name={'Pop Corn'}/>
        </div>
        </>
    )
}