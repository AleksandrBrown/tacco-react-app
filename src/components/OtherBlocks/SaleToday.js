import React from "react"
import tacoBg from "../../assets/1bg.png"

function SaleToday() {
    return (
        <div className="w-full max-w-screen-xl my-16">
            <div
            className="relative overflow-hidden rounded-lg bg-cover p-24 h-96 text-center bg-repeat bg-blend-multiply bg-slate-800/75 "
            style={{backgroundImage: `url(${tacoBg})`}}>
            <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
                <div className="flex h-full items-center justify-center">
                <div className="text-white">
                    <h2 className="mb-4 text-4xl font-semibold">Bite Into Flavor</h2>
                    <h4 className="mb-6 text-xl font-semibold">Where Every Taco Tells a Story!</h4>
                    <button
                    type="button"
                    className="bg-lime-500 rounded font-semibold  px-6 pb-3 pt-3 text-sm uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-amber-500 hover:text-white"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Create now
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default SaleToday