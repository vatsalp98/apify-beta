import { useMutation } from "react-query";
import pb from "../pocketbase";

interface SignupSchema {
    email: string;
    emailVisibility: boolean;
    password: string;
    passwordConfirm: string;
    fullName: string;
}

export default function useSignup() {
    async function signup({email, emailVisibility, password, passwordConfirm, fullName}: SignupSchema) {
        const data = {
            "username": email.split("@")[0],
            "email": email,
            "emailVisibility": true,
            "password": password,
            "passwordConfirm": passwordConfirm,
            "fullName": fullName,
        };

        const record = await pb.collection('users').create(data);
    }

    return useMutation(signup);
}