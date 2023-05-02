import Layout from "./DefaultLayout";

export default function FooterSite() {
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg sm:text-base dark:border-light">
            <Layout className={"py-8 flex items-center justify-between lg:flex-col lg:py-6 text-dark dark:text-light"}>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className="flex items-center lg:py-2">
                    Apify-Web
                </div>
            </Layout>

        </footer>
    );
}