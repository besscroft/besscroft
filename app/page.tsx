'use client'

import { Avatar, Button, Divider, Link } from '@nextui-org/react'
import React from 'react'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between h-full mt-24 text-center">
      <Avatar isBordered color="secondary" src="https://besscroft.com/uploads/avatar.jpg"
          className="w-36 h-36 text-large select-none"/>
        <p className="m-4 h-8 text-2xl select-none">
          Bess Croft
        </p>
      <p className="m-4 select-none leading-loose">
        你好 (*´▽｀)ノノ✨✨<br/>
        我是 Bess Croft，你也可以喊我云fufu（虽然朋友们对我的称呼很多...<br/>
        喜欢做有趣的项目、喜欢人像和风景拍摄、喜欢音乐<br/>
        朋友很少，但未来也许会越来越多<br/>
      </p>
      <Divider className="w-32"/>
      <p className="mx-4 my-1 select-none">希望能通过拍照，为自己和他人留下美好的回忆。</p>
      <p className="mx-4 my-1 select-none">希望能通过编程，帮助他人和创造有意思的东西。</p>
      <div className="flex flex-col items-center justify-center h-12 my-2">
          <a className="mxa select-none" href="https://wakatime.com/@ed85fdbe-1020-4a72-97fd-9a6a63122be3">
            <img src="https://wakatime.com/badge/user/ed85fdbe-1020-4a72-97fd-9a6a63122be3.svg"
              alt="Total time coded since Jun 18 2022"/>
          </a>
        </div>

        <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
          <Link color="foreground" href="https://blog.besscroft.com" isExternal className="select-none">
            博客
          </Link>
        </Button>
    </main>
  );
}
