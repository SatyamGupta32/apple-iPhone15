import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5'>
        <div className="screen-max-width">
            <div>
                <p className='font-semibold text-gray text-xs'>
                    More way to shop: {' '}
                    <span className="underline text-blue mx-1 cursor-pointer">
                        Find an Apple Store {' '}
                    </span>
                    or
                    <span className="underline text-blue mx-1 cursor-pointer">
                        other retailer {' '}
                    </span>
                    near you
                </p>

                <p className="font-semibold text-gray gext-xs">
                    or call 000800-040-1966
                </p>
            </div>

            <div className='bg-neutral-700 my-5 h-[[\1px]'/>

            <div className="flex gap-2 md:gap-0 md:flex-row flex-col md:items-center justify-between">
                <p className="font-semibold text-gray gext-xs">
                    Copyright @ 2024 Apple Inc. All right reserved.
                </p>

                <div className="flex flex-wrap">
                    {footerLinks.map((link, i) => (
                        <p key={link}  className="flex font-semibold text-gray text-xs">
                            {link} {' '}
                            {i !== footerLinks.length - 1 && (<span className='mx-2'> | </span>)}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
