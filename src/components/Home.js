import React from 'react'
import BasicForm from'./forms/BasicForm';
import Background from '../assets/bg.png'
import main from '../assets/man-f.png'
import top from '../assets/top.png'
import bottom from '../assets/bottom.png'

export default function Home() {
    return (
        <div className="flex w-full h-screen">
            <div className="w-6/12 min-h-screen hidden md:block bg-cover bg-no-repeat bg-left"
                style={{
                backgroundImage: `url(${Background})`,
            }}>
                <img src={top} className="fixed h-64 -z-10" alt=""
                style={{
                    top: "-25%",
                    right: "47%"
                }}/>
                <img src={bottom} className="fixed h-64 -z-10" alt=""
                style={{
                    bottom: "-30%",
                    right: "57%"
                }}/>

                <div className="container">
                    <div className="py-5">
                        <h1 className="text-4xl font-bold text-white">Digg</h1>
                    </div>

                    <img src={main} alt="main" className="w-3/6 mt-8 mb-2"/>

                    <p className="text-xs text-white w-full">"Coming to Dubai with One Step Dubai has been the best decision of my life. I am now living in Dubai with a good job and I will be getting married next year!"</p>
                    <p className="mt-2 text-md text-white w-4/5">Mohammed, One Step Dubai student <br /> Pakistan</p>
                </div>
            </div>
                
            <div className="w-full md:w-6/12 m-auto">
                <div className="py-5 sm:block md:hidden">
                    <h1 className="text-4xl font-bold">Digg</h1>
                </div>
                <h2 className="w-full md:text-center mx-auto">Apply now to work in Dubai</h2>
                <BasicForm />
            </div>

        </div>
    )
}
