import Image from 'next/image'
import Heading from '@/components/shared/Heading/Heading'
import BackButton from '@/components/shared/BackButton/BackButton';

export default function NotFound() {
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
        <BackButton title="Go Back" />
    </div>
  )
}
