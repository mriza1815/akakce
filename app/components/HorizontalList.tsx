import { Product } from "~/interfaces/Product";
import Card from "./Card";
import { useState } from "react";

export default function HorizontalList({ products }: { products: Product[] }) {
    
    const [activeIndex, setActiveIndex] = useState(0);

    const onUpdateActiveIndex = (index: number) => {
        setActiveIndex(index);
    }
    
    return (
        <div className="flex flex-col items-center justify-center w-full">
            {products.map((product, index) => (
                <section
                    className={`${activeIndex === index ? "display" : "hidden"}`}
                    key={index}
                >
                    <Card product={product} />
                </section>
            ))}
            <div id="product-carousel">
                <ol className="carousel-indicators">
                    {products.map((_, index) => (
                        <li 
                            key={`product-carousel-item-${index}`} 
                            className="inline-block mr-3" 
                            onClick={() => onUpdateActiveIndex(index)}
                        >
                            <label 
                                htmlFor={`carousel-${index}`} 
                                className={`
                                    carousel-bullet cursor-pointer block text-2xl hover:text-gray-900
                                    ${activeIndex === index ? "text-gray-900" : "text-gray-400"}`
                                }>•
                            </label>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}