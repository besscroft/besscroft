import { Metadata } from "next";
import React from "react";
import { Card, CardBody, Link } from "@nextui-org/react";
import Email from "@/components/email";

export const metadata: Metadata = {
    title: '关于',
}

export default function About() {
    return (
        <main className="flex flex-col items-center justify-between p-2 pt-8 space-y-2">
            <Email />
            <Card className="w-full md:w-1/2">
                <CardBody>
                    <p>我们的批评者是我们的朋友，因为他们指出我们的缺点。—— 本杰明·富兰克林</p>
                </CardBody>
            </Card>
            <Card className="w-full md:w-1/2">
                <CardBody>
                    <p>Java Developer、野生 Gopher、Pythonista，TypeScript 真香！</p>
                    <p>I’m Bess Croft , a full-time full-stack developer 👨‍💻</p>
                    <p>我是云淑，在湖北武汉工作，<del>是一名全栈开发工程师</del>，转行了。</p>
                    <p>我喜欢编程，这是我的兴趣爱好之一，我希望能够通过编程，创造一些有意思的东西。</p>
                    <Link
                        isExternal
                        href="https://book.besscroft.com"
                        showAnchorIcon
                    >
                        书单
                    </Link>
                    <Link
                        isExternal
                        href="https://space.bilibili.com/278038021"
                        showAnchorIcon
                    >
                        哔哩哔哩
                    </Link>
                    <Link
                        isExternal
                        href="https://heming.dev"
                        showAnchorIcon
                    >
                        鹤鸣工作室
                    </Link>
                </CardBody>
            </Card>
        </main>
    );
}