import Rating from "~/components/Rating";
import { ProductDetail } from "~/interfaces/ProductDetail";
import { formatCurrency } from "~/utils";

const ProductDetailView = ({
        productDetail
    }: {
        productDetail: ProductDetail
    }) => {
    return (
        <div>
            <header className="flex flex-col items-center">
                <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
                <span className="sr-only">Product Detail</span>
                </h1>
            </header>
            <section className="justify-center justify-items-center mt-10 w-full">
                <div className="flex flex-col m-2 overflow-hidden rounded-lg text-slate-900 w-full">
                <div id="product-header" className="flex flex-row justify-center gap-x-14">
                    <div className="flex flex-col justify-between">
                        <span className="truncate text-base font-medium text-blue-400">{productDetail.mkName}</span>
                        <span className="text-sm font-semibold text-black">{productDetail.productName}</span>
                        <span className="bg-yellow-100 p-0.5 px-1 mt-1 w-max text-xs font-semibold text-black">{productDetail.badge}</span>
                    </div>
                    <Rating rating={productDetail.rating}/>
                </div>
                <div id="product-image" className="flex h-60 justify-center mt-3 overflow-hidden rounded-xl min-h-[250px]">
                    <img 
                    className="object-cover" 
                    src={productDetail.imageUrl}
                    alt={productDetail.productName} 
                    />
                </div>
                <div id="product-description" className="bg-gray-200 flex items-center justify-center w-100 mt-3">
                    <div className="flex flex-col items-center gap-4 w-[300px] p-3">
                        <span className="text-lg font-semibold text-black text-center">Kapasite Seçenekleri</span>
                        <div className="flex flex-row gap-x-3 space-around">
                            {productDetail.storageOptions.map((capacity: any) => (
                                <div className="border flex h-[40px] items-center justify-center w-[100px] bg-slate-300 rounded-sm">
                                    <span>{capacity}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col w-full text-center gap-y-3">
                            <span className="text-lg font-semibold text-black">{`${formatCurrency(productDetail.price)}`}</span>
                            {productDetail.freeShipping && 
                                <span className="text-xs font-semibold text-green-700">Ücretsiz Kargo</span>
                            }
                            <span className="text-xs font-semibold text-gray-500">{`Son güncelleme: ${productDetail.lastUpdate}`}</span>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default ProductDetailView