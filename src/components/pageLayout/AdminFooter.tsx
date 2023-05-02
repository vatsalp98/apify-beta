import { Layout } from "antd";
import Link from "next/link";

const { Footer } = Layout;

export default function AdminFooter() {
    return (
        <Footer style={{ textAlign: 'center', backgroundColor: "white", fontWeight: "bold", padding: "15px"}}>Copyright © {new Date().getFullYear()}{" "}
              <Link
              href="/"
              >
              Apify
              </Link>
        </Footer>
    );
}