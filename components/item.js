
export default function Item({image, title, price, category}) {
    return (
        <div className="w-[250px]">
            <img src={image}/>
            <div className="flex justify-between mt-2 mb-1">
                <h1>{title}</h1>
                <h1>{price}</h1>
            </div>
            <h1 className="text-[#7E7E7E]">{category}</h1>
        </div>
    )
}