import React from "react"
import galleryImg1 from "../../assets/gallery/tacoGallery1.png"
import galleryImg2 from "../../assets/gallery/tacoGallery2.png"
import galleryImg3 from "../../assets/gallery/tacoGallery3.png"
import galleryImg4 from "../../assets/gallery/tacoGallery4.png"
import galleryImg5 from "../../assets/gallery/tacoGallery5.png"
import galleryImg6 from "../../assets/gallery/tacoGallery6.png"

function GalleryBlock () {
    const galleryArr = [
        {
            title: "Taco img 1",
            img: galleryImg1
        },
        {
            title: "Taco img 2",
            img: galleryImg2
        },
        {
            title: "Taco img 3",
            img: galleryImg3
        },
        {
            title: "Taco img 4",
            img: galleryImg4
        },
        {
            title: "Taco img 5",
            img: galleryImg5
        },
        {
            title: "Taco img 6",
            img: galleryImg6
        }
    ]
    return (
    <div className="container mx-auto px-5 my-16 lg:px-32 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">
            {
                galleryArr.map(galleryItem => (
                    <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                        <img
                        alt={galleryItem.title}
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={galleryItem.img} />
                    </div>
                    </div>
                ))
            }
           
        </div>
    </div>
    )
}
export default GalleryBlock