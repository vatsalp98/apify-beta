"use client"

import useUserData from "@/utils/customHooks/useUserData";
import { Button, Card, Slider, Spin, Typography } from "antd";
import type { SliderMarks } from "antd/es/slider";
import Image from "next/image";

export default function SettingsPage() {
    const {data, isLoading } = useUserData();
    const {Title} = Typography;

    const marks: SliderMarks = {
        0: '$0',
        25: '$25',
        50: '$50',
        75: '$75',
        100: {
            style: {
            color: '#f50',
            },
            label: <strong>$100</strong>,
        },
    };

    if (isLoading){
        return (
            <>
                <Spin size="large"/>
            </>
        );
    }

    return (
        <>  
        <div>
            <div className="p-5">
                <Card title="Personal Information">
                    <Image src={`http://127.0.0.1:8090/api/files/users/${data?.id}/${data?.avatar}`} alt="avatar" width={100} height={100} className="rounded-full" priority={true} />
                    <div className="pt-5">
                        <div className={`flex flex-row`}>
                            <p>Email: {data?.email}</p>
                        </div>              
                        <p>username: {data?.username}</p>
                        <p>Name: {data?.fullName}</p>
                    </div> 
                </Card>
            </div>
            <div className="p-5">
                <Card title="Integrations">
                    <div>
                        
                    </div>
                </Card>
            </div>
            <div className="p-5">
                <Card title="Budgets" extra={<Button>Save</Button>}>
                    <div className="py-2">
                        <Title level={4}>Instagram</Title>
                        <Slider marks={marks} defaultValue={25}/>
                    </div>
                    <div className="py-2">
                        <Title level={4}>Facebook</Title>
                        <Slider marks={marks} defaultValue={25}/>
                    </div>
                    <div className="py-2">
                        <Title level={4}>Google MyBusiness</Title>
                        <Slider marks={marks} defaultValue={25}/>
                    </div>
                </Card>
            </div>
        </div>
        </>
    );
}