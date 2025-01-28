import { useLoaderData } from "@remix-run/react";
import { GET_PRODUCTS_API_URL } from "~/constants";
import { loader } from "~/routes/_index/route";

export const PRODUCT_LIST_PROPERTIES = {
    horizontalProductList: "horizontalProductList",
    productList: "productList",
    nextUrl: "nextUrl"
}

export const MOCK_PRODUCT_DATA = {
    code: 101,
    name: "Iphone 13 128 GB",
    imageUrl: "https://cdn.akakce.com/x/apple/iphone-13.jpg",
    dropRatio: 5,
    price: 20567,
    countOfPrices: 96,
    followCount: 5000,
    url: "https://mock.akakce.dev/product101.json"
}

describe('matching cities to foods', () => {
    let productsData: { horizontalProductList: any; productList: any[]; nextUrl: any; };
    // Load the data before running the tests
    beforeEach(async () => {
        const request = new Request(GET_PRODUCTS_API_URL);
        const productsData = useLoaderData<typeof loader>();
    });
  
    test('product list loader returns correct data', async () => {
        
        // Check if the data has the correct properties
        expect(productsData).toHaveProperty(PRODUCT_LIST_PROPERTIES.horizontalProductList);
        expect(productsData).toHaveProperty(PRODUCT_LIST_PROPERTIES.productList);
        expect(productsData).toHaveProperty(PRODUCT_LIST_PROPERTIES.nextUrl);
        
        // Check if the data properties iare of the correct type
        expect(typeof productsData.horizontalProductList).toBe("array")
        expect(typeof productsData.productList).toBe("array")
        expect(typeof productsData.nextUrl).toBe("array")
      
        
      });
  
      test('check product data has correct properties', async () => {
        
        // Check if the data has the correct properties
        const product = productsData.productList.find((p: any) => p.code === MOCK_PRODUCT_DATA.code);

        // Check if the product has the correct properties
        expect(product).toBeDefined();
        expect(product).toHaveProperty("code", MOCK_PRODUCT_DATA.code);
        expect(product).toHaveProperty("name", MOCK_PRODUCT_DATA.name);
        expect(product).toHaveProperty("imageUrl", MOCK_PRODUCT_DATA.imageUrl);
        expect(product).toHaveProperty("dropRatio", MOCK_PRODUCT_DATA.dropRatio);
        expect(product).toHaveProperty("price", MOCK_PRODUCT_DATA.price);
        expect(product).toHaveProperty("countOfPrices", MOCK_PRODUCT_DATA.countOfPrices);
        expect(product).toHaveProperty("followCount", MOCK_PRODUCT_DATA.followCount);
        expect(product).toHaveProperty("url", MOCK_PRODUCT_DATA.url);
      
        
      });
});