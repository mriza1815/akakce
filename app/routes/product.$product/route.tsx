import { json, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ProductDetailView from "./productDetailView";
import { useProductDetailVievModel } from "./useProductDetailViewModel.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Product Detail Page" },
    { name: "description", content: "Here is products detail page!" },
  ];
};

export async function loader({
    params,
  }: LoaderFunctionArgs) {
    let productIdParams: string = ""
    const { product } = params;
    const { getDetail } = useProductDetailVievModel();
    productIdParams = product as string;
    
    const productDetail = await getDetail(productIdParams);
    return json(productDetail);
  }

export default function ProductDetail() {
  const productDetail = useLoaderData<typeof loader>();

  return (
    <ProductDetailView
      productDetail={productDetail}
    />
  )
}
