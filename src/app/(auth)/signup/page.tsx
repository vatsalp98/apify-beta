"use client"

import Layout from "@/components/pageLayout/DefaultLayout";
import FooterSite from "@/components/pageLayout/SiteFooter";
import SiteNavbar from "@/components/pageLayout/SiteNavBar";
import useSignup from "@/utils/customHooks/useSignup";
import pb from "@/utils/pocketbase";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Checkbox, Form, Input, message } from "antd";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TfiEmail } from "react-icons/tfi";

interface SignupData {
    fullName: string;
    email: string;
    password: string;
    confirm_pass: string;
    agreement: boolean;
}

export default function SignupPage() {
    const [form]  = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const {mutate: signup, isLoading, isError} = useSignup();
    const router = useRouter();

    async function signupSubmit(values: SignupData) {
        signup({email: values.email, emailVisibility: true, fullName: values.fullName, password: values.password, passwordConfirm: values.confirm_pass});
        form.resetFields();
        messageApi.success("Account Created Successfully!");
        router.push("/admin/dashboard");
    }

    if(isError) {
        messageApi.error("Something went wrong");
    }


    return (
        <>
            {contextHolder}
            <Head>
                <title>Apify-Web | Login</title>
                <meta name="description" content="Making digital experiences better for local businesses." />
                <link rel="icon" href="./favicon.ico" />
            </Head>
            <SiteNavbar className={""}/>
            <main className={`w-full min-h-screen inline-block z-0 bg-light px-32 dark:bg-dark items-center justify-center`}>
                <Layout className={"pt-32 md:pt-16 sm:pt-8 justify-center flex items-center"}>
                    <div className="flex min-h-full flex-col self-center justify-center px-6 lg:px-8 w-1/2">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-dark">
                                Create your account
                            </h2>
                        </div>
                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm flex justify-center items-center">
                            <Form 
                                name="signup_form"
                                onFinish={signupSubmit}
                            >   
                                <Form.Item
                                    name="fullName"
                                    rules={[{ required: true, message: 'Please input your Full Name!' }]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Full Name" />
                                </Form.Item>
                                <Form.Item
                                    name="email"
                                    rules={[{ required: true, message: 'Please input your Email!' }]}
                                >
                                    <Input prefix={<TfiEmail className="site-form-item-icon" />} placeholder="Email" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your Password!' }]}
                                >
                                    <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="confirm_pass"
                                    rules={[{ required: true, message: 'Please input your Password!' }]}
                                >
                                    <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Confirm Password"
                                    />
                                </Form.Item>

                                <Form.Item
                                wrapperCol={{span: 24, offset: 4}}
                                    name="agreement"
                                    valuePropName="checked"
                                    rules={[
                                    {
                                        validator: (_, value) =>
                                        value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                    },
                                    ]}
                                >
                                    <Checkbox>
                                    I have read the <a href="">agreement</a>
                                    </Checkbox>
                                </Form.Item>

                                <Form.Item 
                                wrapperCol={{span: 24, offset: 8}}>
                                    <button type="submit" className="px-4 py-2 bg-primary rounded-lg text-light font-semibold hover:bg-dark shadow-lg duration-75 hover:scale-105 transition-all">
                                        Signup
                                    </button>
                                </Form.Item>
                            </Form>
                        </div>
                        <p className="mt-10 text-center text-md text-dark/75">
                            Already a member?{' '}
                            <Link href="/login" className="font-semibold leading-6 text-primary hover:text-dark">
                                Login
                            </Link>
                        </p>
                    </div>
                </Layout>
            </main>
            <FooterSite/>
        </>
    );
}