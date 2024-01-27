import React from "react"
import Button from "../SpecialComponents/Button"
// import AboutUsIcon from '../../assets/blob-au.svg'
import tacoAbout from "../../assets/taco-about.png"

function AboutUs () {
    return (
        <div className="container mx-auto px-5 my-16 lg:px-32 lg:pt-12">
            <div className="flex">
                <div className='w-1/2 about-us-bg'>
                    <img src={tacoAbout} className="w-2/3 ml-4 mt-8"/>
                </div>
                <div className="w-1/2">
                    <h3 className="text-stone-800 dark:text-white font-semibold text-4xl">Who <span className="text-amber-500">We</span> Are</h3>
                    <p className="mt-14 mb-8 text-stone-600 dark:text-slate-400 text-2xl">We are a team of culinary enthusiasts, driven by the desire to redefine the taco experience. From the sizzle of the grill to the meticulous selection of fresh, locally-sourced ingredients, every aspect of TacoCraft is a labor of love.</p>
                    <Button buttonClass={`border-2 border-amber-400 text-amber-400 px-4 py-2 rounded font-medium hover:text-amber-600 hover:bg-amber-400`}  title="Discover Tasty Treats"/>
                </div>
            </div>
        </div>
    )
}

export default AboutUs