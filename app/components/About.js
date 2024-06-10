import React from 'react'
import Image from 'next/image'
import Card from './Card'

const About = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-4 p-8 ">

                <div className="col-span-2 bg-white p-4 ">
                    <Image
                        src="/college.jpg"
                        width={900}
                        height={800}
                        alt="Picture of the author"
                    />
                    <h1 className='text-3xl pt-4 font-semibold'>Chitkara University MBA Admission Open;</h1>
                    <h1 className='text-3xl pb-4 font-semibold'>Check Direct List...</h1>
                    <p className='text-slate-600 pb-3 text-xs'>20 Sep 2024,8.00pm</p>
                    <p className='text-lg font-light'>kollegeapply.com helped me streamline my college search process. I'm grateful for their guidance and support.</p>
                </div>
                <div className="bg-white p-4">
                    <h1 className='text-3xl font-bold mb-8'>THE BIG STORIES</h1>

                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />

                </div>

            </div>
        </>
    )
}

export default About