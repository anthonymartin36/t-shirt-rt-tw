import React from 'react'

import Image1 from "../../assets/T-shirt/122452-34.jpg"
import Image2 from "../../assets/T-shirt/Butterfly.jpeg"
import Image3 from "../../assets/T-shirt/images.jpeg"
import Image4 from "../../assets/T-shirt/StoreImage.jpg"
import Image5 from "../../assets/T-shirt/YourImageHere.jpeg"

function Image({src, alt} : {src: string; alt: string}) {
    return (
        <div className="relative">
            <img
                src={src}
                alt={alt}
                className="w-full rounded-xl object-cover shadow-lg aspect-[2/3]" />
             <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        </div>

    )
}

const ImageContainer: React.FC = () => {
	return (
		<div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
             {/* Column One */}
             <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
            <Image
                src={Image1}
                alt="Hero Image" />
            </div>
            {/* Column Two */}
            <div className="ml-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
            <div className="relative">
            <Image
                src={Image2}
                alt="Hero Image" />
            </div>
            <div className="relative">
            <Image
                src={Image3}
                alt="Hero Image" />
            </div>
            </div>
             {/* Column Three */}
            <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
            <div className="relative">
            <Image
                src={Image4}
                alt="Court with a view"
            />
            </div>
            <div className="relative">
            <Image
                src={Image5}
                alt="Basketball court"
            />
            </div>
        </div>

		</div>
	)
}

export default ImageContainer