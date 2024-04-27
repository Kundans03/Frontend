import React from 'react'

function page() {
  return (
    <div  className='p-2 mt-3'>
        <section className='relative border-b-2 border-x-2 rounded-2xl'>
            <div className='w-full flex justify-between'>
            <i className='ri-arrow-left-line text-2xl'/>
            <div className='flex flex-col gap-1 pr-2 mt-2'>
            <i class="ri-shopping-bag-4-line  text-white rounded-full p-0.5 px-1.5 bg-[#000000]"></i>
            <i class=" ri-heart-fill  text-white rounded-full p-0.5 px-1.5 bg-[#000000]"></i>
            </div>
            </div>
            <div>
            <i class="absolute  text-2xl top-1/2 left-0 ri-arrow-left-s-line"></i>
            <img src='https://m.media-amazon.com/images/I/81F8OTN1boL._SX675_.jpg' className='px-5 mt-5 ' />
            <i class="absolute text-2xl  top-1/2 right-0 ri-arrow-right-s-line"></i>
            </div>
        </section>
        <section className='flex justify-evenly mt-3 overflow-x-scroll'>
            <img src='https://m.media-amazon.com/images/I/81F8OTN1boL._SX675_.jpg' className='border-2 rounded-xl p-1 border-black h-24 w-28' />
            <img src='https://m.media-amazon.com/images/I/81f7EGzZHuL._SX675_.jpg' className='border-2  rounded-xl p-1  h-24 w-28' />
            <img src='https://m.media-amazon.com/images/I/81KxZ3qHOVL._SX675_.jpg' className='border-2  rounded-xl p-1  h-24 w-28' />
            {/* <img src='https://m.media-amazon.com/images/I/71-zDlbneJL._SX675_.jpg' className='border-2 border-black h-20 w-20' /> */}
        </section>

        <section className='flex justify-between mt-3' >
            <h2 className='font-semibold'>Nike Sneakers Huarache</h2> <span className='text-yellow-300'>★3.8/5</span>
        </section>
        <h1 className='font-bold'>$5,000</h1>
        <p className='opacity-70 tracking-tight'>It's simple and elegant shape makes it perfect those of you who like you who want minimalist clothes.<br/> <span className='text-sm font-semibold'>Read More...</span> </p>
        <div className='h-[1px] mt-3  w-full opacity-40 bg-black'/>
        <div className='mt-3 flex justify-between font-semibold pr-[14vh]'>
            <span>Choose Size</span>
            <span>Color</span>
        </div>
        <div className='w-full flex justify-between mt-3'> 
            <div className='gap-2 w-full  text-xs  flex'>
                <span className='size-8 flex justify-center items-center font-semibold border-2  rounded-full'>S</span>
                <span className='size-8 flex justify-center items-center font-semibold border-2  rounded-full'>M</span>
                <span className='size-8 flex justify-center items-center font-semibold border-2  rounded-full'>L</span>
                <span className='size-8 flex justify-center items-center font-semibold border-2  rounded-full'>XL</span>
            </div>

            <div className='flex w-full gap-2 justify-end'>
            <span className='size-8 flex justify-center items-center font-semibold border-2 bg-[#AEB2BB] border-[#404245] rounded-full'></span>
            <span className='size-8 flex justify-center items-center font-semibold border-2 bg-green-800 rounded-full'></span>
            <span className='size-8 flex justify-center items-center font-semibold border-2 bg-orange-500 rounded-full'></span>
            <span className='size-8 flex justify-center items-center font-semibold border-2 bg-blue-400 rounded-full'></span>
            </div>
        </div>

        <section className='mt-5 flex gap-2'>
        <i class="ri-store-2-line rounded-full text-xl  font-semibold bg-[#E4E4E4] py-4 px-5"></i>
            <button className='w-full bg-black text-white font-semibold rounded-full'><i class="ri-shopping-cart-fill"></i> Add to Cart</button>
        </section>
    </div>
  )
}

export default page