"use client"

import useAssets from "@/utils/customHooks/useAssets";
import pb from "@/utils/pocketbase";
import { InboxOutlined } from "@ant-design/icons";
import { Button, Col, Row, Spin, Upload, UploadFile, UploadProps, message } from "antd";
import { RcFile } from "antd/es/upload";
import { useState } from "react";
import Image from "next/image";

const { Dragger } = Upload;

export default function SocialPage() {
    const {data, isLoading} = useAssets();
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [uploading, setUploading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const customUploadProps: UploadProps = {
        fileList: fileList,
        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
        },
        beforeUpload: async (file) => {
            setFileList([...fileList, file]);
            return false;
        },
        name: 'file',
        multiple: true,
        listType: 'picture',
    }

    const handleUpload = async () => {
        const formData = new FormData();
        const user = pb.authStore.model;
        if (fileList.length > 0) {
            fileList.forEach((file) => {
                formData.append('asset', file as RcFile);
            });
            formData.append('user_id', user?.id as string);
            setUploading(true);
            
            try {
                const record = await pb.collection("assets").create(formData);
                console.log(record);
                if (record.collectionName == "assets" && record.id != "") {
                    setUploading(false);
                    setFileList([]);
                    messageApi.success("File(s) uploaded successfully uploaded!");
                }
            }
            catch (e) {
                messageApi.error(e as string);
            }
        } else {
            messageApi.warning("Please select a file to be uploaded!");
        }
    }

    if (isLoading) {
        return (
            <>
                <Spin size="large"/>
            </>
        );
    }


    return (
        <>  
            {contextHolder}
            <div className="w-full">
                <Row>
                    <Col offset={8} span={8} className="flex items-center justify-center font-bold text-xl">
                        <div>
                            <h2>Social Posts</h2>
                            
                        </div>
                    </Col>
                </Row>
                <Row className="flex justify-center items-center mt-10">
                    <Dragger {...customUploadProps}>
                        <div className="p-5">
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">
                                Click or drag file to this area to upload
                            </p>
                            <p className="ant-upload-hint">
                                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                                banned files.
                            </p>
                        </div>
                    </Dragger>
                </Row>
                <Row className="flex justify-center items-center mt-10">
                    <Button onClick={handleUpload} loading={uploading}>
                        Upload
                    </Button>
                </Row>
                <Row className="py-10 flex items-center justify-center">
                    <h2 className="text-xl font-bold">Gallery</h2>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {
                        data?.map((item: any) => (
                            <Col key={item['id']} span={6}>
                                <Image alt={"Gallery Image"} width={200} height={200} src={`http://127.0.0.1:8090/api/files/assets/${item['id']}/${item['asset']}`}/>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </>
    );
}