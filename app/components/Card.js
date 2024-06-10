import React from 'react'
import Image from 'next/image'

const Card = () => {
    return (
        <>
            <a href="#" className="flex flex-col items-center  md:flex-row md:max-w-xl border-b-2 border-black-500  ">
                <Image
                    src="/imag1.jpg"
                    width={150}
                    height={150}
                    alt="Picture of the author"
                />
                <div className="flex flex-col justify-between p-4 leading-normal ">
                    <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology.</p>
                </div>
            </a>

        </>
    )
}

export default Card