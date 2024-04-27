import Image from "next/image";

export default function Home() {
  return (
  <div className="p-2">
    <nav className="w-full flex justify-between ">
    <i className="ri-microsoft-fill   rounded-full bg-[#E4E4E4] p-[1vh] px-[3.5vw] flex items-center justify-center"/>
      <h2 className="font-bold text-xl">SHORIPS</h2>
      <i className="ri-notification-fill  rounded-full bg-[#E4E4E4] p-[1vh] px-[3.5vw] flex items-center justify-center" />
    </nav>
    <input className="w-full  mt-3 rounded-lg h-11 px-3 border-[#E4E4E4] border-2" placeholder="🔍 What are you looking for?" />
    <section className="flex justify-between mt-3 text-center items-center">
      <span className="font-semibold text-lg">Category</span>
      <span className="font-light text-xs">See all</span>
    </section>
    <section className="w-full justify-between flex">   
      <img src="https://images.unsplash.com/photo-1555274175-75f4056dfd05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRpZGFzJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D" className="w-[15vw] bg-[#E4E4E4] h-14 rounded-full object-cover object-center "/>
      <img src="https://pngimg.com/uploads/nike/small/nike_PNG18.png" className="w-[15vw] bg-[#E4E4E4] h-14 rounded-full object-cover object-center "/>
      <img src="https://www.prada.com/etc/designs/aem-prada-innovation-clientlibs/clientlib-resources/resources/images/logo_prada_b.svg" className="w-[15vw] bg-[#E4E4E4] h-14 rounded-full object-cover object-center "/>
      <img src="https://www.mochishoes.com/images-mochi/mochi-logo.webp" className="w-[15vw] bg-[#E4E4E4] h-14 rounded-full object-cover object-center "/>
      <img src="https://imgs.search.brave.com/ow9ZdhEm9ZkwTdjEh-MWdb1VyrZks_a4hLoeGetmd2Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90aGVk/ZXNpZ25lc3QubmV0/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzAyL2xvZ28ucG5n" className="w-[15vw] bg-[#E4E4E4] h-14 rounded-full object-cover "/>
    </section>
    <img src="https://i.pinimg.com/736x/84/ad/1c/84ad1c67da7c18049aaa3f71bb3e474b.jpg" className=" w-full mt-3  rounded-xl object-cover" />
    <section className="flex justify-between mt-2 items-center text-center">
      <span className="font-semibold text-lg">New Arrival</span>
      <span className="font-light text-xs">See all</span>
    </section>
    <section className="w-full gap-2 grid grid-cols-2 mt-3">
      <div className="relative">
      <i class="absolute ri-heart-fill top-2 right-2 text-white rounded-full p-0.5 px-1.5 bg-[#000000]"></i>
        <img src="https://images.unsplash.com/photo-1656335362192-2bc9051b1824?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHNob2VzJTIwbmlrZXxlbnwwfHwwfHx8MA%3D%3D" className="h-[27vh] w-full object-cover rounded-2xl"/>
        <h3 className="text-sm font-semibold px-1">Nike Sneakers Huarache</h3>
        <div className="flex w-full justify-between px-1"><span className="font-bold">$5,000</span>
        <span className="rounded-full bg-yellow-300 px-1 text-white text-xs flex items-center" >★3.8/5</span>
        </div>
      </div>
      <div className="relative">
      <i class="absolute ri-heart-fill top-2 right-2 text-white rounded-full p-0.5 px-1.5 bg-[#000000]"></i>
        <img src="https://images.unsplash.com/photo-1656944227421-416b1d2186c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHNob2VzJTIwbmlrZXxlbnwwfHwwfHx8MA%3D%3D" className="h-[27vh] w-full object-cover object-center rounded-2xl"/>
        <h3 className="text-sm font-semibold px-1">Nike Sneakers Huarache</h3>
        <div className="flex w-full justify-between px-1"><span className="font-bold">$8,000</span>
        <span className="rounded-full bg-yellow-300 px-1 text-white text-xs flex items-center" >★4.5/5</span>
        </div>
      </div>
      <div className="relative">
      <i class="absolute ri-heart-fill top-2 right-2 text-white rounded-full p-0.5 px-1.5 bg-[#000000]"></i>
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D" className="h-[27vh] w-full object-cover object-center rounded-2xl"/>
        <h3 className="text-sm font-semibold px-1">Nike Sneakers Huarache</h3>
        <div className="flex w-full justify-between px-1"><span className="font-bold">$8,000</span>
        <span className="rounded-full bg-yellow-300 px-1 text-white text-xs flex items-center" >★4.5/5</span>
        </div>
      </div>
      <div className="relative">
      <i class="absolute ri-heart-fill top-2 right-2 text-white rounded-full p-0.5 px-1.5 bg-[#000000]"></i>
        <img src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fHww" className="h-[27vh] w-full object-cover object-center rounded-2xl"/>
        <h3 className="text-sm font-semibold px-1">Nike Sneakers Huarache</h3>
        <div className="flex w-full justify-between px-1"><span className="font-bold">$8,000</span>
        <span className="rounded-full bg-yellow-300 px-1 text-white text-xs flex items-center" >★4.5/5</span>
        </div>
      </div>
    </section>
  </div>
  );
}
