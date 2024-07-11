import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const ComingPage = () => {
    return (
        <>
        <Header className="flex items-center  justify-center min-h-screen bg-gradient-to-r from-purple-300 via-pink-300 via-blue-200 to-" />
        <div className="flex items-center justify-center bg-black bg-opacity-20  min-h-screen bg-gradient-to-tr from-gray-100 to-blue-500">
            <div className="bg-white bg-opacity-85  p-8 rounded-xl shadow-xl mx-auto text-center"
            style={{ maxWidth: "90vw" }}>
              <h1 className="text-6xl font-bold text-gray-800 mb-8">YOMO MONEY</h1>
              <p className="text-xl text-gray-700 mb-8">We're launching soon! Sign up to get notified when we go live.</p>
              <form className="flex flex-col">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-4 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button
                  type="submit"
                  className="p-4 bg-black text-white font-bold rounded-lg hover:bg-white hover:bg-opacity-100 hover:text-black transition duration-300"
                >
                  Notify Me
                </button>
              </form>
            </div>
          </div>
        <Footer />
        </>
    )
}

export default ComingPage