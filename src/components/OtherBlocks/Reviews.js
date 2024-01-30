import React from "react";
import tacoReviewIcon from '../../assets/tacoReviews.png'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import {usersList} from '../usersList'
import { StarIcon } from "@heroicons/react/24/solid";


function Reviews () {
    return (
        <div className="container mx-auto px-5 my-16 lg:px-32 lg:pt-12">
            <div className="flex flex-col">
                <h3 className="dark:text-white text-center text-5xl font-semibold">Customers <span className="text-amber-500">Say</span></h3>
                <div className="flex gap-4 mt-20">
                    <div className="w-1/2">
                    <Splide 
                        aria-label="rewievs--slider"
                        className="rewievs--slider" 
                        options={{
                            perPage: 1,
                            perMove: 1,
                            arrows : false,
                            pagination: true
                        }}
                    >
                        {
                            usersList.map(prof => {
                                return (
                                    <SplideSlide key={prof.userId}>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex gap-4 w-1/2">
                                                <div className="w-1/3 flex items-start">
                                                    <div className="bg-amber-400 p-2 rounded-full">
                                                        <img className="w-14 h-14" src={prof.icon} alt="logo"/>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col justify-center gap-1">
                                                    <div>
                                                        <h2 className="text-xl font-bold text-gray-800 dark:text-white">{prof.userName}</h2>
                                                    </div>
                                                    <div>
                                                        <ul className="my-1 flex list-none gap-1 p-0">
                                                            {prof.userReview.Rating.map(star => {
                                                                return (
                                                                    <li key={star}>
                                                                        <StarIcon className="h-5 text-yellow-400"/>
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-sm italic text-stone-600 dark:text-slate-400 w-10/12">
                                                "{prof.userReview.reviewText}"
                                            </p>
                                        </div>
                                    </SplideSlide>
                                )
                            })
                        }
                    </Splide>
                    </div>
                    <div className="w-1/2 reviews-bg">
                        <img src={tacoReviewIcon} className="w-2/3 ml-4 mt-8"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews