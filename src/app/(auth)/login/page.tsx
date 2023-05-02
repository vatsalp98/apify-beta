"use client"

import Layout from "@/components/pageLayout/DefaultLayout";
import SiteNavbar from "@/components/pageLayout/SiteNavBar";
import useLogin from "@/utils/customHooks/useLogin";
import pb from "@/utils/pocketbase";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [form]  = Form.useForm();
    const {mutate : login, isLoading, isError} = useLogin();
    const router = useRouter();
    const isLoggedIn = pb.authStore.isValid;

    async function handleSubmit(values: {username: string, password: string}) {
        login({email: values.username, password: values.password});
        form.resetFields();
        if (isLoggedIn){
            router.push("admin/dashboard")
        }
    }

    return (
        <>
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
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={handleSubmit}
                            form={form}
                            >
                                <Form.Item
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your Username!' }]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
                                <Form.Item>
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                    </Form.Item>
                                </Form.Item>

                                <Form.Item 
                                wrapperCol={{span: 24, offset: 10}}>
                                    <Button htmlType="submit" loading={isLoading} type="default">
                                    Log in
                                    </Button>
                                </Form.Item>
                            </Form>
                            {isError && <p className="text-red-500">Something went Wrong</p>}

                            <p className="mt-10 text-center text-sm text-dark/75">
                                Not a member?{' '}
                                <Link href="/signup" className="font-semibold leading-6 text-primary hover:text-dark">
                                    Signup
                                </Link>
                            </p>
                            <p className="mt-3 text-center text-sm text-dark/75 hover:text-primary cursor-pointer">
                                forgot Password?
                            </p>
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
}