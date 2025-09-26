"use client";

import { ConfigProvider, App as AntApp, theme } from "antd";
import React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ConfigProvider
            theme={{
                algorithm: theme.defaultAlgorithm,
                token: {
                    colorPrimary: "#1677ff",
                    borderRadius: 8,
                },
            }}
        >
            <AntApp>{children}</AntApp>
        </ConfigProvider>
    );
}
