
import { getProductDetail } from "~/.server/api";

export default function useProductsModel() {
  
  const getDetail = async (product: string) => {

    const productDetail = await getProductDetail(Number(product));

    return productDetail
  }

  return ({
    getDetail
  })
}