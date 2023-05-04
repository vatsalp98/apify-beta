"use client"

import { Card, Col, Divider, Row, Typography } from "antd";
import Image from "next/image";

export default function WebsitePage() {
    const {Title} = Typography;
    const { Meta } = Card;

    return (
        <>
            <Row>
                <Col span={8} offset={8} className="flex items-center justify-center">
                    <Title level={2}> Website Builder </Title>
                </Col>                
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={6}>
                    <Card hoverable cover={<Image src="/template1.png" alt="template 1" width={200} height={200} priority />}>
                        <Meta title="Template 1" description="Responsive website, fast and efficient for a quick single page website." />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card hoverable cover={<Image src="/template1.png" alt="template 1" width={200} height={200} priority />}>
                        <Meta title="Template 2" description="Responsive website, fast and efficient for a quick single page website." />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card hoverable cover={<Image src="/template1.png" alt="template 1" width={200} height={200} priority />}>
                        <Meta title="Template 3" description="Responsive website, fast and efficient for a quick single page website." />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card hoverable cover={<Image src="/template1.png" alt="template 1" width={200} height={200} priority />}>
                        <Meta title="Template 4" description="Responsive website, fast and efficient for a quick single page website." />
                    </Card>
                </Col>
            </Row>
            <Row className="pt-10">
                <Title level={3}>Website Preview</Title>
            </Row>
        </>
    );
}