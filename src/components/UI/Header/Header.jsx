import React, { useState } from 'react'
import CatalogButton from "../buttons/CatalogButton"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CatalogMenu from './CatalogMenu/CatalogMenu';

export default function Header() {

    const [openCatalog, setOpenCatalog] = useState(false)

    console.log(openCatalog)
  return (
    <div className='fixed w-full h-[80px] bg-slate-300 flex justify-between items-center gap-8 px-[10%] py-4'>
        <div className='flex items-center gap-4 '>
            <h2 className='text-[#333] text-2xl font-semibold'>Logo</h2>
            <CatalogButton setOpenCatalog={setOpenCatalog} openCatalog={openCatalog}/>
        </div>
        <div className='relative flex-1 flex items-center'>
            <input type="text" placeholder='Search...' className='text-md w-11/12 px-4 py-2 border-2 border-[#FBC100] rounded-lg outline-none'/>
            <button className='absolute right-2 w-1/12 bg-[#FBC100] rounded-e-lg py-2 px-4 text-lg'><SearchIcon fontSize='medium'/></button>
        </div>
        <div className='flex items-center gap-6'>
            <div className='flex items-center flex-col'>
                <ShoppingCartOutlinedIcon color='inherit'/>
                Cart
            </div>
            <div className='flex items-center flex-col'>
                <FavoriteBorderIcon color='inherit'/>
                Favourite
            </div>
            <button className='py-2 px-4 bg-[#FBC100] rounded-lg'>Login</button>
        </div>
       {openCatalog && <CatalogMenu />} 
    </div>
  )
}
