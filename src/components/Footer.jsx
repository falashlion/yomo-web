import React from "react";

export const Footer = () => {
  return (
    <div className="w-full min-h-12 bg-black text-white">
      <div className="container mx-auto px-5 lg:px-0 pt-10 pb-4">
        <div className="flex gap-3 items-center">
          <img src="/public/yomoWhite 2.png" alt="" />
          <p className="font-bold text-lg">Yomo Digital finance</p>
        </div>
        <div className="flex-cols lg:flex justify-between border-b-[1px] pb-[5rem]">
          <div className="mt-[6rem] flex flex-col md:flex-row gap-10 md:gap-[5rem]">
            <div>
              <h2 className="mb-4 font-bold text-lg">Links</h2>
              <div className="flex flex-col gap-3">
                <p>Home</p>
                <p>About</p>
                <p>Services</p>
                <p>Pricing</p>
                <p>Our Market</p>
                <p>Blog</p>
              </div>
            </div>
            <div>
              <h2 className="mb-4 font-bold text-lg">Communities</h2>
              <div className="flex flex-col gap-3">
                <p>Faceboo</p>
                <p>Instagram</p>
                <p>Twitter</p>
                <p>LinkedIn</p>
              </div>
            </div>
            <div>
              <h2 className="mb-4 font-bold text-lg">Support Email</h2>
              <div className="flex flex-col gap-3">
                <p>YomoSupport@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="mt-[6rem] max-w-[350px] overflow-hidden">
            <h2 className="mb-4 font-bold text-lg">New letter Subscription</h2>
            <p className="leading-[1.6rem]">
              Subscribe with email to get notifiction <br></br> about update on
              yomo mobile money
            </p>
            {/* email section for subscription to our services */}
            <form className="border flex gap-3 rounded p-1 w-full border-gray-600 mt-2">
              <input
                type="email"
                placeholder="example@gmail.com"
                className="bg-transparent outline-none pl-2 w-full"
              />
              <button className="bg-white py-2 px-3 rounded text-black">
                Submit
              </button>
            </form>
          </div>
        </div>
        <p className="text-center mt-[6rem]">@2024 Yomo Digital Finance</p>
      </div>
    </div>
  );
};
