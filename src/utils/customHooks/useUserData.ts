"use client"

import { useQuery } from "react-query";
import pb from "../pocketbase";

export default function useUserData() {
    const id = pb.authStore.model?.id!;
    async function checkUserData(args: any) {
        const userData = await pb.collection('users').getOne(id);
        return userData;
    }

    return useQuery({
        queryFn: checkUserData,
        queryKey: ['check-user-data', id]
    });
}