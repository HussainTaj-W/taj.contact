import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { inDev } from "@/lib/utils";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Taj Contacts",
    description: "Contact information for Hassan Taj, Hussain Taj and Husnain Taj",
    icons: ["favicon.ico"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>)
{
    return (
        <html lang="en">
            {/* {!inDev && (
                <head>
                    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-P3ZC37QFCY" strategy="afterInteractive"></Script>
                    <Script strategy="afterInteractive">
                        {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag() {dataLayer.push(arguments); }
                        gtag('js', new Date());

                        gtag('config', 'G-P3ZC37QFCY');
                    `}
                    </Script>
                </head>
            )} */}

            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
            >

                {children}
            </body>
        </html>
    );
}
