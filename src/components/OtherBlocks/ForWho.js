import React from "react"
import cardIcon1 from '../../assets/icons/tacoIcon.png'
import cardIcon2 from '../../assets/icons/cookingIcon.png'
import cardIcon3 from '../../assets/icons/deliveryIcon.png'

function ForWho () {
    return (
        <div className="container mx-auto px-5 my-16 lg:px-32 lg:pt-12">
            <div className="flex flex-col">
                <h3 className="dark:text-white text-center text-5xl font-semibold">Why Choose Our <span className="text-amber-500">Food</span></h3>
                <div className="flex gap-20 justify-between mt-20">
                    <div className="group flex flex-col justify-between items-start px-8 pt-4 pb-8 h-80 rounded-2xl hover:shadow-lg hover:bg-white transition ease-in delay-50">
                        <div className="p-2 bg-amber-400 rounded-full flex items-center">
                            <img className="h-12 w-12 p-2" src={cardIcon1} alt="card-icon"/>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-lg font-semibold dark:text-slate-200 group-hover:dark:text-stone-800 w-5/6">Finest Ingredients, Best Tacos</h3>
                            <p className="text-sm text-stone-600 dark:text-slate-400 group-hover:dark:text-stone-600 w-11/12">Indulge in tacos crafted with the finest, freshest ingredients. Elevate your taste experience with our commitment to quality and culinary excellence</p>
                        </div>
                    </div>
                    <div className="group flex flex-col justify-between items-start px-8 pt-4 pb-8 h-80 rounded-2xl hover:shadow-lg hover:bg-white transition ease-in delay-50">
                        <div className="p-2 bg-amber-400 rounded-full flex justify-center items-center">
                            <img className="h-12 w-12 p-2" src={cardIcon2} alt="card-icon"/>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-lg font-semibold dark:text-slate-200 group-hover:dark:text-stone-800 w-5/6">Taco Adventure</h3>
                            <p className="text-sm text-stone-600 dark:text-slate-400 group-hover:dark:text-stone-600 w-11/12">Embark on a taste adventure with our expertly crafted tacos. Each bite is a symphony of flavors, promising an extraordinary experience for your palate</p>
                        </div>
                    </div>
                    <div className="group flex flex-col justify-between items-start px-8 pt-4 pb-8 h-80 rounded-2xl hover:shadow-lg hover:bg-white transition ease-in delay-50">
                        <div className="p-2 bg-amber-400 rounded-full flex items-center">
                            <img className="h-12 w-12 p-1" src={cardIcon3} alt="card-icon"/>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-lg font-semibold dark:text-slate-200 group-hover:dark:text-stone-800 w-5/6">Quick & Delicious</h3>
                            <p className="text-sm text-stone-600 dark:text-slate-400 group-hover:dark:text-stone-600 w-11/12">Craving tacos? Our lightning-fast delivery ensures your order arrives hot and delicious at your doorstep. Quick, reliable service for your taco fix!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForWho