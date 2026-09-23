import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

export default function Icons() {
    return (
        <>
            <Link
                to="tel:+919999997869"
                className="
                    fixed bottom-10 right-8 z-50
                    flex h-14 w-14 items-center justify-center
                    rounded-full
                    bg-[#2853bf]
                    shadow-lg shadow-blue-500/50
                    animate-bounce
                    transition-all duration-300
                    hover:scale-110
                    hover:brightness-125
                    hover:shadow-xl hover:shadow-blue-500/70
                "
            >
                <Icon
                    icon="basil:phone-solid"
                    className="h-10 w-10 text-white"
                />
            </Link>

            <Link
                to="https://api.whatsapp.com/send/?phone=919999997869&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-10 left-8 z-50"
            >
                <Icon
                    icon="selfhst:whatsapp"
                    width="56"
                    height="56"
                />
            </Link>
        </>
    )
}
