"use client";

import Image from 'next/image'
import Heading from '@/components/shared/Heading/Heading'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button/Button'
import { ICONS } from '@/lib/constants/icons';


export default function NotFound() {
  const router = useRouter()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="relative w-112 h-112">
            <Image
                alt="not_found"
                src={"/assets/page_not_found.png"}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                loading="eager"
            />
        </div>
        <Heading as="h1" className="lg:text-6xl md:text-4xl text-3xl">
            Page Not Found
        </Heading>
        <p className="tracking-wider text-md text-gray-500 text-center">The scholarship opportunity or page you are looking for has moved or no longer exists. Let{"'"} get you back on track.</p>
        <Button onClick={() => router.back()} suffixIcon={ICONS.MdArrowForward} className="w-full max-w-sm p-3 mt-4">
            Go Back
        </Button>
    </div>
  )
}
