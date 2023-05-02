"use client"

import { Card } from "antd";

export default function Dashboard() {
    return (
        <>
            
            <h1 className="text-3xl">
                Dashboard
            </h1>
            <div className="w-full flex flex-row">
                <div className="mt-7 w-1/4 bg-primary/75 rounded-xl shadow-lg text-light mr-2">
                    <Card title="Website">
                        
                    </Card>
                </div>
                <div className="mt-7 w-1/4 bg-primary/75 rounded-xl shadow-lg text-light mx-2">
                    <Card title="Social Media Posts">
                        
                    </Card>
                </div>
                <div className="mt-7 w-1/4 bg-primary/75 rounded-xl shadow-lg text-light ml-2">
                    <Card title="Traffic Generated">
                        
                    </Card>
                </div>
            </div>
            
        </>
    );
}