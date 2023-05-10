import Layout from "@/components/pageLayout/DefaultLayout";
import SiteNavbar from "@/components/pageLayout/SiteNavBar";
import { SignIn } from "@clerk/nextjs";
import Head from "next/head";

export default function LoginPage() {
    // const [form]  = Form.useForm();
    // const {mutate : login, isLoading, isError} = useLogin();
    // const router = useRouter();
    // const isLoggedIn = pb.authStore.isValid;

    // async function handleSubmit(values: {username: string, password: string}) {
    //     login({email: values.username, password: values.password});
    //     form.resetFields();
    //     if (isLoggedIn){
    //         router.push("admin/dashboard")
    //     }
    // }

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
                            <SignIn />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
}