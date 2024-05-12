"use client";

import "@/app/globals.css";
import antdToken from "@/utils/design/antdToken";
import { ConfigProvider } from "antd";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Nhom 6" />
        <title>Mimo clone</title>
      </head>

      <body className="bg-background min-h-screen">
        <Toaster />
        <ConfigProvider theme={antdToken}>{children}</ConfigProvider>
      </body>
    </html>
  );
}
