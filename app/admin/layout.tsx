"use client";

import { Layout, Menu } from "antd";

const { Header, Content, Sider } = Layout;

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider theme="light" width={220}>
                <div className="h-16 flex items-center justify-center font-bold text-lg">
                    Admin
                </div>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={["dashboard"]}
                    items={[
                        { key: "dashboard", label: "Dashboard" },
                        { key: "products", label: "Products" },
                        { key: "categories", label: "Categories" },
                    ]}
                />
            </Sider>
            <Layout>
                <Header className="bg-white shadow px-4 flex items-center">
                    Admin Panel
                </Header>
                <Content className="p-6 bg-gray-50">{children}</Content>
            </Layout>
        </Layout>
    );
}
