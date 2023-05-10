"use client"

import useAssets from "@/utils/customHooks/useAssets";
import pb from "@/utils/pocketbase";
import { InboxOutlined } from "@ant-design/icons";
import { Button, Card, Col, Collapse, Form, Input, Row, Spin, Typography, Upload, UploadFile, UploadProps, message } from "antd";
import { RcFile } from "antd/es/upload";
import { useState } from "react";
import Image from "next/image";

const { Dragger } = Upload;
const { Panel } = Collapse;
const {Meta} = Card;
const {Title} = Typography;

interface ParameterData {
    prompt: string;
    negativePrompt: string;
    width: string;
    height: string;
}

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

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 14 },
        },
    };

    async function generateImage(data:ParameterData) {
        try {
            const response = await fetch("/api/stableapi", {
                method: 'POST',
                body: JSON.stringify(data),
            });
            const newData = await response.json();
            console.log(newData);
            return newData;
        } catch(err) {
            console.log(err);
        }

        // const requestData = {
        //     "key": "cxc1vWSeuBMlNnYMZ7ujxH3M7t1psoIJhDJl89zgfUkjOBno8CaRMynKh228",
        //     "prompt": `${data.prompt}, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K`,
        //     "negative_prompt": `${data.negativePrompt}`,
        //     "width": `${data.width}`,
        //     "height": `${data.height}`,
        //     "samples": "1",
        //     "num_inference_steps": "20",
        //     "seed": "",
        //     "guidance_scale": 7.5,
        //     "safety_checker":"yes",
        //     "webhook": "",
        //     "track_id": "",
        // }
        // try {
        //     const result = await fetch("https://stablediffusionapi.com/api/v3/text2img", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         mode: "no-cors",
        //         body: JSON.stringify(requestData),
        //     });
        //     const resultData = await result.json();
        //     console.log(resultData);
        // } catch(err) {
        //     console.log(err);
        // }
    }


    return (
        <>  
            {contextHolder}
            <Title>
                Social Posts
            </Title>
            <Collapse bordered={false} className="flex flex-col">
                <Panel key={"1"} header={"Upload Posts"}>
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
                </Panel>
                <Panel key={"2"} header={"Gallery"}>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        {
                            data?.map((item: any) => (
                                <Col key={item['id']} span={6}>
                                    <Card cover={<Image alt={"Gallery Image"} width={200} height={200} src={`http://127.0.0.1:8090/api/files/assets/${item['id']}/${item['asset']}`}/>}>
                                        <Meta title={item['asset']} description={"Asset"}/>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Panel>
                <Panel key={"3"} header={"AI social Posts"}>
                    <Row >
                        <Title level={4}>Parameters</Title>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form {...formItemLayout} 
                                onFinish={generateImage}>
                                <Form.Item 
                                    label="Prompt"
                                    name={"prompt"}>
                                    <Input placeholder="Custom Prompt"/>
                                </Form.Item> 

                                <Form.Item
                                    label="Size">
                                        <Form.Item
                                            name={"width"}
                                            style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                                            <Input placeholder="Width"/>
                                        </Form.Item>
                                        <span style={{ display: 'inline-block', width: '24px', lineHeight: '32px', textAlign: 'center' }}>
                                            x
                                        </span>
                                        <Form.Item 
                                            name={"height"}
                                            style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                                            <Input placeholder="Height"/>
                                        </Form.Item>

                                </Form.Item>   

                                <Form.Item 
                                    label="Neg. Prompt"
                                    name={"negativePrompt"}>
                                    <Input placeholder="Negative Custom Prompt"/>
                                </Form.Item>   

                                <Form.Item wrapperCol={{span: 24, offset: 12}}>
                                    <Button htmlType="submit">
                                        Generate
                                    </Button>    
                                </Form.Item>                  
                            </Form>
                        </Col>
                    </Row>
                    <Row >
                        <Title level={4}>Preview</Title>
                    </Row>
                    <Row>

                    </Row>
                </Panel>
            </Collapse>
            
        </>
    );
}