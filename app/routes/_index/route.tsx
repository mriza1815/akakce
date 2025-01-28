import { json, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { useProductsVievModel } from "./useProductsViewModel.server";
import { ITEM_PER_PAGE } from "~/constants";
import ProductsView from "./productsView";

export const meta: MetaFunction = () => {
  return [
    { title: "Products Page" },
    { name: "description", content: "Here is products page!" },
  ];
};

export async function loader({
  request,
}: LoaderFunctionArgs) {
  
  const { getProducts } = useProductsVievModel();
  const { productList, horizontalProductList, nextUrl } = await getProducts();
  
  return json({
    productList,
    horizontalProductList,
    nextUrl
  });
}

export default function ProductList() {

  const [page, setPage] = useState(0);
  const products = useLoaderData<typeof loader>();

    const prevIsDisabled = page === 0;
    const nextIsDisabled = (page + 1) * ITEM_PER_PAGE >= products.productList.length;

    const showedList = products.productList.slice(page * ITEM_PER_PAGE, (page + 1) * ITEM_PER_PAGE);
    
    const onPreviousClick = () => {
        !prevIsDisabled && setPage(page => page - 1);
    }

    const onNextClick = () => {
        !nextIsDisabled && setPage(page => page + 1);
    }

    const prevBtnColor = prevIsDisabled ? "text-gray-500" : "text-gray-700";
    const nextBtnColor = nextIsDisabled ? "text-gray-500" : "text-gray-700";
  
  return (
    <ProductsView
      products={products}
      showedList={showedList}
      prevBtnColor={prevBtnColor}
      nextBtnColor={nextBtnColor}
      onPreviousClick={onPreviousClick}
      onNextClick={onNextClick}
    />
  );
}
