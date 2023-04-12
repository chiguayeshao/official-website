import React from 'react'

const Hero = () => {
    return (
        <div className="flex justify-center pt-14 bg-[#000000]">
            <div className="container">
                <div className="flex flex-wrap items-center ">
                    <div className="w-full px-4">
                        <div className="text-center max-w-[980px] mx-auto">
                            <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-[45px] leading-snug sm:leading-snug md:leading-snug mb-8">
                                GasLockR, the first trustless GasFi protocol
                            </h1>
                            <p className="text-base sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed mx-auto mb-10 text-white max-w-[980px]">
                                GasLockR uses Axiom, a ZK coprocessor for trustlessly reading historical gas prices to provide verifiable correctly priced GasFi derivatives based on financial models that are updated in real time. GasLockR is interoperable with other protocols and can be used as foundational on-chain infrastructure to build protocols and services that will solve the reliability, onboarding and UX problems we face today.
                            </p>
                            <ul className="flex flex-wrap items-center justify-center mb-10">
                                <li>
                                    <a
                                        href="/login"
                                        className="py-4 px-6 sm:px-10 inline-flex items-center justify-center text-center text-dark text-base bg-white hover:bg-indigo-600 hover:text-white hover:shadow-lg font-medium rounded-lg transition duration-300 ease-in-out"
                                    >
                                        START FREE TRIAL
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
