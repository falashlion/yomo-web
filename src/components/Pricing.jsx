import React from 'react';

const Pricing = () => {
  return (
    <div className="bg-gradient-to-tr from-purple-200 via-white via-white via-white to-blue-100 px-4">
    <section className=" ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-3xl border-4 border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:text-black">
            <h2 className="font-bold text-[1.7rem] mb-7 text-center">
              YOMO WITHDRAWAL
            </h2>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">At yomo, we believe in making our financial services accessible to all. That's why we charge a mere 0% fee per transaction </p>
            <div className="flex justify-center items-baseline my-8">
              <h3 className="text-center mt-3 font-bold lg:text-start text-[2rem] ">
              Yomo Provides 0% charges for all transactions
              </h3>
            </div>
            <div className="w-full flex justify-center ">
                <button className="px-12 rounded-lg py-3 bg-black text-white mt-10 mb-10">
                  Start using Yomo
                </button>
            </div>
          </div>

          <div className="flex flex-col p-6 mx-auto max-w-xl h-128 text-center bg-white rounded-3xl border-4 border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:text-black">
            <h2 className="font-bold text-[1.7rem] mb-7 text-center">
              YOMO TRANSFER
            </h2>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Affordability is a key priority for us at Yomo. That's why we charge a
            nominal 0% fee per transaction for our services. This means that individuals with-lower incomes can still benefit from the advantages of our financial solutions</p>
            <div className="flex justify-center items-baseline my-8">
        
            </div>
            <div className="flex justify-center items-baseline my-8">
              <h3 className="text-center mt-3 font-bold lg:text-start text-[2rem]">
              Yomo Provides 0% charges for all transactions
              </h3>
            </div>
            <div className="w-full flex justify-center mt- 30">
                <button className="px-12 rounded-lg py-3 bg-black text-white mt-10 mb-10">
                  Start using Yomo
                </button>
            </div>
          </div>

          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-3xl border-4 border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:text-black">
            <h2 className="font-bold text-[1.7rem] mb-7 text-center">
              YOMO DEPOSIT
            </h2>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">At Yomo, we believe in making our financial services accessible to all.
            That's why we charge a mere 0% fee per transaction</p>
            <div className="flex justify-center items-baseline my-8">
             
            </div>
            <div className="flex justify-center items-baseline my-8">
              <h3 className="text-center mt-3 font-bold lg:text-start text-[2rem]">
              Yomo Provides 0% charges for all transactions
              </h3>
            </div>
            <div className="w-full flex justify-center mt- 30">
                <button className="px-12 rounded-lg py-3 bg-black text-white mt-10 mb-10">
                  Start using Yomo
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Pricing;
