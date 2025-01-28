import { Card, HorizontalList, Pagination } from "~/components/";
import { Product } from "~/interfaces/Product";

const ProductsView = ({
    products, 
    showedList, 
    prevBtnColor, 
    nextBtnColor, 
    onPreviousClick, 
    onNextClick
}: {
    products: { horizontalProductList: Product[]; productList: Product[]; }, 
    showedList: Product[], 
    prevBtnColor: string, 
    nextBtnColor: string, 
    onPreviousClick: () => void, 
    onNextClick: () => void
}) => {
    return (
        <div>
            <section className="mt-3">
                <HorizontalList products={products.horizontalProductList} />
            </section>
            <section className="gap-x-3 gap-y-10 grid grid-cols-1 justify-center justify-items-center lg:grid-cols-2 mb-5 md:grid-cols-3 mt-10 mx-auto w-fit">
                {showedList.map((product: any) => (
                    <Card product={product} key={`product-${product.code}`}/>
                ))}
            </section>
            <Pagination
                prevBtnColor={prevBtnColor}
                nextBtnColor={nextBtnColor}
                getPrevious={onPreviousClick}
                getNext={onNextClick}
            />
        </div>
    );
}

export default ProductsView;