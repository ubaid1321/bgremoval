import React from 'react'
import { assets } from '../assets/assets'

const Upload = () => {
  return (
    <div>
      <h1 className='mb-10 text-center text-2xl md:text-3xl py-1 lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to bg-gray-400 bg-clip-text text-transparent'>See the magic. Try now</h1>
      <div className='mb-8 text-center'>
            <input type="file" id='upload1' hidden/>
            <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-200' htmlFor="upload1">
                <img src={assets.upload_btn_icon} alt="" />
                <p className='text-white text-sm'>Upload your image</p>
            </label>
         </div>
      
    </div>
  )
}

export default Upload
