import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

export default function Icons() {
    return (
        <>
            <Link
                to="tel:+919999997869"
                className="
                phone-button
                fixed bottom-10 right-8 z-50
                flex h-14 w-14
                items-center justify-center
                rounded-full
                bg-[#2853bf]
                text-white
                shadow-lg shadow-blue-500/50
                transition-transform
                duration-300
                hover:scale-110
            "
            >
                <Icon
                    icon="basil:phone-solid"
                    className="h-8 w-8"
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
