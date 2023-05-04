import { useQuery } from "react-query";
import pb from "../pocketbase";

export default function useAssets() {
    const id = pb.authStore.model?.id;
    async function getAssets(args:any) {
        const resultList = await pb.collection('assets').getList(1, 50);
        return resultList['items'];
    }

    return useQuery({
        queryFn: getAssets,
        queryKey: ['get-assets', id],
    });
}