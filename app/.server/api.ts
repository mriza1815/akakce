import { getProductApiUrl } from "~/constants";

export async function   getProductsList(nextUrl: string): Promise<any> {

    const response = await fetch(nextUrl);
    const products = await response.json();
    return products;
}

export async function getProductDetail(product: number): Promise<any> {
    const productUrl = getProductApiUrl(product);
    const response = await fetch(productUrl);
    const productDetail = await response.json();
    return productDetail;
}