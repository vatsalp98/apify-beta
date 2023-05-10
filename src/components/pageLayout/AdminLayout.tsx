import { DashboardOutlined } from "@ant-design/icons";
import { Badge, Button, Layout, Menu, MenuProps, Typography } from "antd";
import Link from "next/link";
import { ReactNode } from "react";
import { CgWebsite } from "react-icons/cg";
import { TbApiApp, TbSocial } from "react-icons/tb";
import {AiFillSetting} from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";

import { Exo } from "next/font/google";
import AdminFooter from "./AdminFooter";
import HeadMeta from "./MetaHead";
import useLogout from "@/utils/customHooks/useLogout";
import { UserButton } from "@clerk/nextjs";

type MenuItem = Required<MenuProps>['items'][number];
const { Title } = Typography;

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const exoFont = Exo({
    subsets: ["latin"],
    variable: "--font-exo"
})

type Props = {
    children?: ReactNode,
    title: string;
}

const { Header, Footer, Sider, Content } = Layout;

export default function AdminLayout(props: Props) {
    const logout = useLogout();
    const pathname = usePathname();
    const router = useRouter();

    const items: MenuItem[] = [
        getItem(
            <Link href="/admin/dashboard" rel="noopener noreferrer">
                Dashboard
            </Link>,
            'dashboard',
            <DashboardOutlined />,
        ),
        getItem(
            <Link href="/admin/website" rel="noopener noreferrer">
                Website
            </Link>,
            'website',
            <CgWebsite />,
        ),
        getItem(
            <Link href="/admin/social" rel="noopener noreferrer">
                Social Media
            </Link>,
            'social',
            <TbSocial />,
        ),
        getItem(
            <Link href="/admin/settings" rel="noopener noreferrer">
                Settings
            </Link>,
            'settings',
            <AiFillSetting />,
        ),
    ];

    function handleLogout() {
        logout();
        router.push("/");
    }

    return (
        <>  
            <HeadMeta title={props.title}/>
            <Layout hasSider style={{fontFamily: exoFont.variable}}>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        justifyItems: "center",
                        alignItems: 'center',
                        background: "#fff",
                        borderRight: "1px solid #D3D3D3"
                    }}>
                    <Link href={"/"}>
                        <div className="flex items-center justify-center mt-5 hover:scale-110 duration-75 mb-5">
                            <UserButton />
                        </div>
                    </Link>
                    
                    <Menu 
                        mode="inline"
                        items={items}
                        defaultSelectedKeys={[pathname.split("/admin/")[1]!]}
                        style={{ minHeight: "25vh"}}
                        >
                    </Menu>
                </Sider>
                <Layout style={{ marginLeft: 200 , background: "#ffffff"}}>
                    <Content style={{ fontFamily: exoFont.variable}}>
                        <main className="min-h-[85vw] p-5">
                            {props.children}
                        </main>
                    </Content>
                    <Footer style={{ textAlign: 'center', background: "#ffffff", }}>
                        <AdminFooter />
                    </Footer>
                </Layout>
            </Layout>
        </>
    );
}