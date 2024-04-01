import {Avatar, Button, Link} from "@nextui-org/react";
import React from "react";

export default function Home() {
  return (
      <main className="flex flex-col items-center justify-between h-full mt-24">
          <Avatar isBordered color="secondary" src="https://besscroft.com/uploads/avatar.jpg"
                  className="w-36 h-36 text-large"/>
          <p className="m-4 h-8 text-2xl dark:text-white">
              云淑
          </p>
          <p className=" text-center">
              <em className="text-sm dark:text-amber-50">为天地立心、为生民立命<br/>为往圣继绝学、为万世开太平</em>
          </p>
          <div className="flex flex-col items-center space-y-2 h-16 mt-8">
              <a className="mxa" target="blank" href="https://github.com/besscroft">
                  <img src="https://img.shields.io/badge/GitHub-Follow-brightgreen?style=flat-square" alt="GitHub"/>
              </a>
              <a className="mxa" href="https://wakatime.com/@ed85fdbe-1020-4a72-97fd-9a6a63122be3">
                  <img src="https://wakatime.com/badge/user/ed85fdbe-1020-4a72-97fd-9a6a63122be3.svg"
                       alt="Total time coded since Jun 18 2022"/>
              </a>
          </div>
          <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg mt-4">
              <Link color="foreground" href="https://blog.besscroft.com" isExternal>
                  博客
              </Link>
          </Button>
      </main>
  );
}
