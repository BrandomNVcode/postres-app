import React from 'react'

export const Galery = () => {
    return (
        <div className="overflow-hidden text-gray-700">
            <div className="container px-10 py-2 mx-auto">
                <div className='m-12 text-center'>
                    <p className='mb-4 font-mono'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsum obcaecati 
                        inventore ut nulla hic voluptatum nesciunt, sint cumque tenetur dignissimos 
                        perferendis beatae temporibus excepturi modi, nihil expedita magni at.</p>
                    <p className='font-mono'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, temporibus. 
                        Est quia, nam hic commodi, molestiae quos placeat nihil quod libero laborum ex. Dolorum 
                        ducimus unde repellendus magnam quia quisquam.</p>
                </div>
                <div className="flex flex-wrap -m-1 md:-m-2">
                    <div className="flex flex-wrap w-1/2">
                        <div className="w-1/2 p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                 src="https://larepublica.pe/resizer/cR2e7_Xm_Wc12FF8L9qGKzhGqyw=/1250x735/top/smart/arc-anglerfish-arc2-prod-gruporepublica.s3.amazonaws.com/public/2SP5EDPHARHAXCHRLIINKLORVI.png" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                 src="https://alpostredilesi.files.wordpress.com/2018/06/d55a6727-88f8-4667-b62f-2623ddb29292.jpg?w=816&h=612&crop=1" />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                 src="https://media-cdn.tripadvisor.com/media/photo-s/0c/6e/21/ab/todo-muy-rico-y-para.jpg" />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                 src="https://st.depositphotos.com/1518767/4293/i/600/depositphotos_42932899-stock-photo-concentrated-male-pastry-chef-decorating.jpg" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbSJPVWXSFzZlyAaHnvKF6vNLszhT-Qz4WpA&usqp=CAU" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                 src="https://lkbitronic.b-cdn.net/wp-content/uploads/2018/11/151119-506249-PHTYD6-105.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
