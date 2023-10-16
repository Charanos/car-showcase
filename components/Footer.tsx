import Link from 'next/link'
import Image from 'next/image'
import { footerLinks } from '@/constants'

const Footer = () => {
    return (
        <footer className='flex flex-col text-black-100 mt-20 border-t border-gray-300' >
            <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 p-6 py-10">
                <div className="flex flex-col justify-start items-start gap-6">
                    <Image src='./logo.svg' alt='logo' className='object-contain' width={118} height={18} />

                    <p className="text-base text-gray-700 capitalize">
                        Mandae 2023 <br /> all rights reserved &copy;
                    </p>
                </div>

                <div className="footer__links">
                    {
                        footerLinks.map((link) => (
                            <div className="footer__link" key={link.title}>
                                <h3 className="font-semibold uppercase">
                                    {link.title}
                                </h3>

                                {
                                    link.links.map((item) => (
                                        <Link key={item.title} href={item.url} className='text-gray-500 capitalize'>
                                            {item.title}
                                        </Link>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>


            <div className="w-full flex justify-between items-center flex-wrap border-t border-gray-100 sm:px-16 px-6 py-10">

                <p className="uppercase">
                    @2023 Mandae. made by <strong>wormwood</strong>
                </p>

                <div className="footer__copyrights-link uppercase">
                    <Link href='/' className='text-gray-500' >
                        privacy policy
                    </Link>
                    <Link href='/' className='text-gray-500' >
                        terms of use
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer