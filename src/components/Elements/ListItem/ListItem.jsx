/* eslint-disable react/prop-types */
export function ListItem({children, name}){
    return(
        <>
            <div className="w-full py-4 cursor-pointer border-b-[1px] border-neutral-100 flex gap-4 items-center px-[5%]">
                {children}
                <div className="text-sm">{name}</div>
            </div>
        </>
    )
}