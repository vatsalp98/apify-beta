import pb from "../pocketbase";
import { useMutation } from "react-query";

interface LoginParams {
    email: string;
    password: string;
}

export default function useLogin() {
    async function login({email, password}: LoginParams) {
        const authData = await pb.collection("users").authWithPassword(email, password);
    }

    return useMutation(login);
}
