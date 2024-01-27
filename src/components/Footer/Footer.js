import React from "react";
import facebookIcon from '../../assets/icons/facebook.svg'
import twitterIcon from '../../assets/icons/twitter.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import instagramIcon from '../../assets/icons/instagram.svg'
import { ArrowRightIcon } from "@heroicons/react/24/outline";

function Footer () {
    return (
        <>
        <footer className="relative container mx-auto px-5 my-16 lg:px-32 lg:pt-12 flex justify-between">
            <div className="flex flex-col gap-4">
                <a className="text-lg text-stone-800 dark:text-slate-200 dark:hover:text-slate-400 hover:text-amber-500 font-semibold" href="#!">
                    Tacco company © 2024
                </a>
                <div className="flex gap-2">
                    <a href="#" className="flex justify-center items-center rounded-full overflow-hidden"><img className="w-8 h-8 bg-amber-400 p-2" src={facebookIcon} alt="social-icon"/></a>
                    <a href="#" className="flex justify-center items-center rounded-full overflow-hidden"><img className="w-8 h-8 bg-amber-400 p-2" src={twitterIcon} alt="social-icon"/></a>
                    <a href="#" className="flex justify-center items-center rounded-full overflow-hidden"><img className="w-8 h-8 bg-amber-400 p-2" src={linkedinIcon} alt="social-icon"/></a>
                    <a href="#" className="flex justify-center items-center rounded-full overflow-hidden"><img className="w-8 h-8 bg-amber-400 p-2" src={instagramIcon} alt="social-icon"/></a>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h5 className="text-lg font-semibold text-stone-800 dark:text-slate-200">Opening Hours</h5>
                <ul className="text-sm text-stone-600 dark:text-slate-400 gap-2 flex flex-col">
                    <li>Mon-Fri: 09:00 AM - 06:00 PM</li>
                    <li>Saturday: 09:00 AM - 04:00 PM</li>
                    <li>Sunday: Closed</li>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <h5 className="text-lg font-semibold text-stone-800 dark:text-slate-200">Contact us</h5>
                <ul className="text-sm text-stone-600 dark:text-slate-400 gap-2 flex flex-col">
                    <li className="w-10/12">123 Palm Street, Sunnyville, CA 90210</li>
                    <li><a href="tel:+15551234567" className="hover:text-stone-800 dark:text-slate-400 dark:hover:text-slate-600">+1 (555) 123-4567</a></li>
                    <li><a href="mailto:info@tacocraft.com" className="hover:text-stone-800 dark:text-slate-400 dark:hover:text-slate-600">info@tacocraft.com</a></li>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <h5 className="text-lg font-semibold text-stone-800 dark:text-slate-200">Subscribe us</h5>
                <div className="relative mb-3 flex">
                    <input
                        type="email"
                        className="bg-white text-stone-600 px-4 p-2 block w-full placeholder:text-sm placeholder:italic placeholder:font-medium rounded-xl border border-amber-400 bg-transparent outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 placeholder:opacity-100 motion-reduce:transition-none dark:text-stone-800 dark:placeholder:text-stone-600"
                        placeholder="Enter your email" 
                    />
                    <button type="submit" className="group bg-amber-400 hover:bg-amber-500 w-10 h-full absolute right-0 flex justify-center items-center rounded-r-lg"><ArrowRightIcon  className="text-white h-6 group-hover:ml-2"/></button>
                    </div>
            </div>
        </footer>
        <script type="text/javascript" src="@/node_modules/tw-elements/dist/js/tw-elements.umd.min.js"></script>
        
        </>
    )
}
export default  Footer
