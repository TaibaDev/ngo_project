import React from 'react'

import ImageGallery from './brandGallery'

function Sponsors() {
    return (
        <>
            <div
                className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center mb-10 lg:mt-28"
                style={{ backgroundImage: `url(${require('../assets/images/download.png').default?.src})`, height: 600 }}>
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                    <div className="h-full">
                        <div className="">
                            <ImageGallery />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sponsors