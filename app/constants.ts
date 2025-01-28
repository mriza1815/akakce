/**
 * Item per page for pagination
 * Description: This constant is used to determine the number of items to be displayed on a page
 */
export const ITEM_PER_PAGE = 4;

/**
 * Default rating array
 * Description: This array is used to render the rating stars
 */
export const DEFAULT_RATING_ARR = [1, 2, 3, 4, 5];

/**
 * Get products API URL
 * Description: This URL is used to fetch the products
 */
export const GET_PRODUCTS_API_URL = "https://mock.akakce.dev/page.json";

/**
 * Get product API URL
 * Description: This function is used to fetch a specific product by its ID
 * @param product - The product ID to fetch
 * @returns The URL to fetch the product
 */
export const getProductApiUrl = (product: number): string => {
    return `https://mock.akakce.dev/product${product}.json`;
};