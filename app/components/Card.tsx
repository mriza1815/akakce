import { Link } from "@remix-run/react";
import { LANG } from "lang";
import { Product } from "~/interfaces/Product";
import { formatCurrency } from "~/utils";

export default function Card({ product }: { product: Product }) {
    return (
        <Link to={`product/${product.code}`}>
            <div className="h-[420px] w-[400px] relative m-2 flex max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-gray-200 shadow-md">
                <div className="flex h-60 justify-center mt-3 overflow-hidden rounded-xl min-h-[250px] min-w-[250px]">
                <img 
                    className="object-cover" 
                    src={product.imageUrl}
                    alt={product.name} 
                />
                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                    {`${product.dropRatio}%`}
                </span>
                </div>
                <div className="mt-4 px-5 pb-1">
                <span className="truncate text-base font-medium tracking-tight text-blue-400">{product.name}</span>
                <div className="flex flex-col gap-x-14 mt-5">
                    <span className="text-lg font-semibold text-black">{`${formatCurrency(product.price)}`}</span>
                    <span className="font-medium text-gray-500 text-base">{`${product.countOfPrices} ${LANG.seller} >`}</span>
                    <span className="font-medium text-gray-500 text-base mt-3">{`${product.followCount}+ ${LANG.follower}`}</span>
                </div>
                </div>
            </div>
        </Link>
    )
}