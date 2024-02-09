import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import ImageSwipper from "./ImageSwipper/ImageSwipper"



export default function index({ productData }) {
  const [phoneColor, setPhoneColor] = useState("green");
  const [memorySize, setMemorySize] = useState("256");
  // const [activeThumb, setActiveThumb] = useState(null)
  // const thumbsSwiperRef = useRef(null);
  const router = useRouter();

// console.log(activeThumb)
  console.log(productData)
  return (
    <div className="w-full h-full flex justify-between gap-8">
      <div className="w-8/12 h-full flex gap-8">
        <div className="w-full h-[500px] flex flex-col">
        <ImageSwipper images={productData.images} />
        </div>
      </div>
      <div className="w-4/12 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Color</h2>
          <div className="flex gap-4">
            <label
              htmlFor="green"
              className={`w-[60px] h-[80px] flex justify-center items-center text-white bg-green-500 border-2 rounded-lg cursor-pointer ${
                phoneColor === "green" && "border-[#000]"
              }`}
            >
              Green
              <input
                type="radio"
                onChange={(e) => setPhoneColor(e.target.value)}
                checked={phoneColor === "green"}
                className="hidden"
                name="phone_color"
                value="green"
                id="green"
              />
            </label>
            <label
              htmlFor="red"
              className={`w-[60px] h-[80px] flex justify-center items-center text-white bg-red-500 border-2 rounded-lg cursor-pointer ${
                phoneColor === "red" && "border-[#000]"
              }`}
            >
              Red
              <input
                type="radio"
                onChange={(e) => setPhoneColor(e.target.value)}
                checked={phoneColor === "red"}
                className="hidden"
                name="phone_color"
                value="red"
                id="red"
              />
            </label>
            <label
              htmlFor="blue"
              className={`w-[60px] h-[80px] flex justify-center items-center text-white bg-blue-500 border-2 rounded-lg cursor-pointer ${
                phoneColor === "blue" && "border-[#000]"
              }`}
            >
              Blue
              <input
                type="radio"
                onChange={(e) => setPhoneColor(e.target.value)}
                checked={phoneColor === "blue"}
                className="hidden"
                name="phone_color"
                value="blue"
                id="blue"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Internal memory</h2>
          <div className="flex gap-4">
            <label
              htmlFor="256"
              className={`py-2 px-4 border rounded-lg cursor-pointer ${
                memorySize === "256" && "border-[#FBC100]"
              }`}
            >
              256 Gb
              <input
                type="radio"
                onChange={(e) => setMemorySize(e.target.value)}
                checked={phoneColor === "256"}
                className="hidden"
                name="memory_size"
                value="256"
                id="256"
              />
            </label>
            <label
              htmlFor="512"
              className={`py-2 px-4 border rounded-lg cursor-pointer ${
                memorySize === "512" && "border-[#FBC100]"
              }`}
            >
              512 Gb
              <input
                type="radio"
                onChange={(e) => setMemorySize(e.target.value)}
                checked={phoneColor === "512"}
                className="hidden"
                name="memory_size"
                value="512"
                id="512"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-semibold">Product info</h2>
          
          <div className="flex justify-between items-end gap-2">
            <p className="text-lg text-[#8A8A8A]">Title</p>
            <div className="w-full border-b border-dashed border-[#8a8a8a]"></div>
            <p className="font-semibold">{productData.title}</p>
          </div>
          <div className="flex justify-between items-end gap-2">
            <p className="text-lg text-[#8A8A8A]">Brand</p>
            <div className="w-full border-b border-dashed border-[#8a8a8a]"></div>
            <p className="font-semibold">{productData.brand}</p>
          </div>
          <div className="flex justify-between items-end gap-2r">
            <p className="text-lg text-[#8A8A8A]">Price</p>
            <div className="w-full border-b border-dashed border-[#8a8a8a]"></div>
            <p className="font-semibold">${productData.price}</p>
          </div>
          <div className="flex justify-between items-end gap-2">
            <p className="text-lg text-[#8A8A8A]">Stock</p>
            <div className="w-full border-b border-dashed border-[#8a8a8a]"></div>
            <p className="font-semibold">{productData.stock}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
