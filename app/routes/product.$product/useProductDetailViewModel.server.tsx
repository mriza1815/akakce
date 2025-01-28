import useProductDetailModel from "./useProductDetailModel.server";

export const useProductDetailVievModel = () => {
    const { getDetail } = useProductDetailModel();
    
    return {
        getDetail
    }
}