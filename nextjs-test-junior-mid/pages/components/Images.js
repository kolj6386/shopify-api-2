import React from "react";

const Image = ({images}) => {
    return (
    <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
    <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
        <img src={images[0].node.originalSrc} alt="Two each of gray, white, and black shirts laying flat." className="w-full h-full object-center object-cover" />
    </div>
    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <img src={images[1].node.originalSrc} alt="Model wearing plain black basic tee." className="w-full h-full object-center object-cover" />
        </div>
        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <img src={images[2].node.originalSrc} alt="Model wearing plain gray basic tee." className="w-full h-full object-center object-cover" />
        </div>
    </div>
    <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
        <img src={images[3].node.originalSrc} alt="Model wearing plain white basic tee." className="w-full h-full object-center object-cover" />
    </div>
  </div>
    )
}

export default Image; 