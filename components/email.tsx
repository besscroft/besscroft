'use client'

import { useRouter } from 'next/navigation'
import { Button, Card, CardFooter, Image } from '@nextui-org/react'
import React from 'react'

export default function Email() {
  const router = useRouter()

  return (
    <Card
        isFooterBlurred
        radius="lg"
        className="border-none select-none"
    >
    <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src="https://besscroft.com/uploads/avatar.jpg"
        width={200}
    />
    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
      <p className="text-tiny text-white/80">想联系我？</p>
      <Button
          onClick={() => router.push('mailto:besscroft@foxmail.com')}
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
      >
        发邮件
      </Button>
    </CardFooter>
    </Card>
  )
}