import React, { useState } from 'react'

const FAQLEFTDATA = [
    {
        question: 'What is KryptoBots Quantitative Platform?',
        answer: 'KryptoBots is a quantitative strategy execution platform. KryptoBots is dedicated to helping investors reduce the barriers to entry in quantitative trading. KryptoBots provides users with 24-hour online service. Once the strategy is connected and starts to execute, users can close the web page or computer, and KryptoBots will automatically carry out the trades.',
    },

    {
        question: 'Why we use quantitative trading?',
        answer: 'Quantitative trading is a financial investment tool, and its essence is the penetration of mathematics and statistics in the financial field. It uses computers to replace manual investment, overcomes the weakness of human nature, and systematizes the trading model, so as to deeply capture investment opportunities. Quantitative trading can help ordinary investors solve three major pain points: "no time, no technology, no mentality", help ordinary investors to move towards professional and rational investment, and effectively enhance the accumulation of personal wealth.',
    },
]

const FAQRIGHTDATA = [
    {
        question: 'Is it safe to use KryptoBots?',
        answer: 'KryptoBots cares about the security of your assets. The platform only executes transactions and uses funds in the exchange you are connected to, and cannot withdraw or deposit funds from your account. You have 100% control over your assets.',
    },
    {
        question: 'Can quantitative trading make me money?',
        answer: 'If you have a trading strategy suitable for market conditions, quantitative trading can be profitable. To use quantitative trading through KryptoBots, you need to have a basic understanding of the current market trends and then match a strategy based on these trends. KryptoBots can integrate the quantitative strategies you choose to execute with real and simulated trading accounts of numerous well-known domestic and overseas exchanges, covering various investment targets such as stocks and cryptocurrencies.',
    },
]

const FaqComponent = (props) => {
    const { question, answer, id } = props
    const [isShow, setIsShow] = useState(false)
    const [currentId, setCurrentId] = useState(null)

    const clickFaq = () => {
        setCurrentId(id)
        setIsShow(!isShow)
    }

    return (
        <div
            className="flex flex-col justify-center w-full bg-white border border-[#F3F4FE] rounded-lg p-5 sm:p-8 mb-8"
        >
            <button
                className="flex items-center w-full text-left"
                onClick={clickFaq}
            >
                <div className="w-full">
                    <h4 className="text-base sm:text-lg font-semibold text-black">
                        {question}
                    </h4>
                </div>
            </button>
            <div
                className={`${currentId === id && isShow ? '' : 'hidden'
                    }`}
            >
                <p className="text-base text-body-color leading-relaxed py-3">
                    {answer}
                </p>
            </div>
        </div>
    )
}

const Faq = () => {
    return (
        <section className="flex justify-center pt-14 bg-[#000000]">
            <div className="container">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[620px]">
                            <span className="font-semibold text-lg text-indigo-600 mb-2 block">
                                FAQ
                            </span>
                            <h2 className="font-bold text-3xl sm:text-4xl md:text-[42px] text-white mb-4">
                                Any Questions? Answered
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 px-4">
                        {FAQLEFTDATA.map((item, index) => {
                            return (
                                <FaqComponent
                                    question={item.question}
                                    answer={item.answer}
                                    key={index}
                                />
                            )
                        })}
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        {FAQRIGHTDATA.map((item, index) => {
                            return (
                                <FaqComponent
                                    question={item.question}
                                    answer={item.answer}
                                    key={index}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Faq
