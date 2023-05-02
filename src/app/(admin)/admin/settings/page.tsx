"use client"

import useUserData from "@/utils/customHooks/useUserData";
import pb from "@/utils/pocketbase";
import { Card, Spin } from "antd";
import Image from "next/image";

export default function SettingsPage() {
    // const record = await getUser();
    const {data, isLoading } = useUserData();
    
    if (isLoading){
        return (
            <>
                <Spin size="large"/>
            </>
        );
    }

    return (
        <>
            <Card title="Personal Information">
                <Image src={`http://127.0.0.1:8090/api/files/users/${data?.id}/${data?.avatar}`} alt="avatar" width={100} height={100} className="rounded-full" priority={true} />
                <div>              
                    <p>Email: {data?.email}</p>
                    <p>username: {data?.username}</p>
                    <p>Name: {data?.name}</p>
                </div> 
            </Card>
        </>
    );
}