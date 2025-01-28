
import { getProductsList } from "~/.server/api";
import { GET_PRODUCTS_API_URL } from "~/constants";
import { Product } from "~/interfaces/Product";

export default function useProductDetailModel() {
  
  const getProducts = async () => {

    let productList: Product[] = []
    let horizontalProductList: Product[] = []
    let nextUrl = GET_PRODUCTS_API_URL;
  
    while(nextUrl){
      const products = await getProductsList(nextUrl);
      productList = [...productList, ...products.productList];
      
      if(products.horizontalProductList){
        horizontalProductList = products.horizontalProductList
      }
      nextUrl = products.nextUrl
    }

    return ({
      productList,
      horizontalProductList,
      nextUrl
    })
  }

  return ({
    getProducts
  })
}