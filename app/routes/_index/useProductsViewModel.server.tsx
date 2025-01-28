import useProductsModel from "./useProductsModel.server";

export const useProductsVievModel = () => {
    const { getProducts } = useProductsModel();
    
    return {
        getProducts
    }
}