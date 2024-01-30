import React from "react"
import { StarIcon } from "@heroicons/react/24/solid";

function Rating ({productRating}) {
    const stars = Array.from({ length: productRating }, (_, index) => index);
    return (
        <ul className="my-1 flex list-none gap-1 p-0">
            {stars.map((star) => (
                <li key={star}>
                    <StarIcon className="h-5 text-yellow-400"/>
                </li>
            ))}
        </ul>
    )
}

export default Rating