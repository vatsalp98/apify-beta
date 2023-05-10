import Layout from "@/components/pageLayout/DefaultLayout";
import FooterSite from "@/components/pageLayout/SiteFooter";
import SiteNavbar from "@/components/pageLayout/SiteNavBar";
// import useSignup from "@/utils/customHooks/useSignup";
import { SignUp } from "@clerk/nextjs";
// import { Checkbox, Form, Input, message } from "antd";
import Head from "next/head";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { TfiEmail } from "react-icons/tfi";

// interface SignupData {
//     fullName: string;
//     email: string;
//     password: string;
//     confirm_pass: string;
//     agreement: boolean;
// }

export default function SignupPage() {
    // const [form]  = Form.useForm();
    // const [messageApi, contextHolder] = message.useMessage();
    // const {mutate: signup, isLoading, isError} = useSignup();
    // const router = useRouter();

    // async function signupSubmit(values: SignupData) {
    //     signup({email: values.email, emailVisibility: true, fullName: values.fullName, password: values.password, passwordConfirm: values.confirm_pass});
    //     form.resetFields();
    //     messageApi.success("Account Created Successfully!");
    //     router.push("/admin/dashboard");
    // }

    // if(isError) {
    //     messageApi.error("Something went wrong");
    // }


    return (
        <>
            {/* {contextHolder} */}
            <Head>
                <title>Apify-Web | Login</title>
                <meta name="description" content="Making digital experiences better for local businesses." />
                <link rel="icon" href="./favicon.ico" />
            </Head>
            <SiteNavbar className={""}/>
            <main className={`w-full min-h-screen inline-block z-0 bg-light px-32 dark:bg-dark items-center justify-center`}>
                <Layout className={"pt-32 md:pt-16 sm:pt-8 justify-center flex items-center"}>
                    <div className="flex min-h-full flex-col self-center justify-center px-6 lg:px-8 w-1/2">
                        <SignUp />
                    </div>
                </Layout>
            </main>
            <FooterSite/>
        </>
    );
}