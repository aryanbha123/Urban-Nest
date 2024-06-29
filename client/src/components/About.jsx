import React from 'react';
import team from '../assets/team.png'
import values from '../assets/values.png'
import mission from '../assets/mission.png'
export default function About() {
    return (
        <div id='about' className='py-5'>
            <section  className="container mx-auto px-6 p-10">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h2>
                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-full md:w-1/2 pr-10">
                        <h4 className="text-3xl text-gray-800 font-bold mb-3">Our Mission</h4>
                        <p className="text-gray-600 mb-8">At RealEstate Co., our mission is to provide exceptional service and expertise to our clients. We strive to make the process of buying or selling a home seamless and enjoyable, ensuring that our clients' needs are met with the utmost professionalism and care.</p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img className="rounded-lg w-full" src={mission} alt="Our Mission" />
                    </div>
                </div>
                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-full md:w-1/2">
                        <img className="rounded-lg w-full" src={values} alt="Our Values" />
                    </div>
                    <div className="w-full mt-6 md:w-1/2 lg:pl-12">
                        <h4 className="text-3xl text-gray-800 font-bold mb-3">Our Values</h4>
                        <p className="text-gray-600 mb-2">We believe in integrity, transparency, and commitment. Our values guide us in every interaction and transaction, ensuring that we build trust and long-lasting relationships with our clients and partners.</p>
                    </div>
                </div>
                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-full md:w-1/2 pr-10">
                        <h4 className="text-3xl text-gray-800 font-bold mb-3">Our Team</h4>
                        <p className="text-gray-600 mb-8">Our team consists of experienced and dedicated professionals who are passionate about real estate. We work collaboratively to provide the best service possible, leveraging our knowledge and skills to achieve outstanding results for our clients.</p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img className="rounded-lg w-full" src={team} alt="Our Team" />
                    </div>
                </div>
            </section>
        </div>
    );
}
