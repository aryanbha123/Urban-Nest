import React from 'react';

export default function Service() {
    return (
        <div id="services">
            <section className="bg-white pb-6">
                <div className="max-w-7xl mx-auto p-4 sm:p-3 lg:p-1">
                    <div id='' className="container mx-auto px-6  bg-white">

                        <div className="mb-4 text-center">
                            <h4 className="text-base text-sky-600 font-semibold tracking-wide uppercase">Our Services</h4>
                            <p className="mt-2 text-3xl lg:text-3xl font-bold tracking-tight text-gray-900">Why Choose Us?</p>
                        </div>

                        <div className="flex flex-wrap my-12">

                            <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
                                <div className="flex items-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                                        fill="currentColor" className="h-6 w-6 text-sky-500">
                                        <path
                                            d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                                        </path>
                                    </svg>
                                    <div className="ml-4 text-xl">Property Sales</div>
                                </div>
                                <p className="leading-loose text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et posuere convallis. In vel turpis consectetur, consectetur magna eu, molestie ipsum.</p>
                            </div>

                            <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
                                <div className="flex items-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                                        fill="currentColor" className="h-6 w-6 text-sky-500">
                                        <path
                                            d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                                        </path>
                                    </svg>
                                    <div className="ml-4 text-xl">Property Management</div>
                                </div>
                                <p className="leading-loose text-gray-500">Aenean convallis neque eu neque aliquet, eget varius urna pulvinar. Sed consequat feugiat arcu, eget eleifend justo lacinia vitae.</p>
                            </div>

                            <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
                                <div className="flex items-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                                        fill="currentColor" className="h-6 w-6 text-sky-500">
                                        <path
                                            d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                                        </path>
                                    </svg>
                                    <div className="ml-4 text-xl">Real Estate Consulting</div>
                                </div>
                                <p className="leading-loose text-gray-500">Proin consequat magna sed sem efficitur, in dapibus libero ultrices. Suspendisse potenti. Sed a odio nec nisi bibendum convallis.</p>
                            </div>

                        </div>
                        <div className="flex flex-wrap ">
                            {/* Farmland Section */}
                            <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
                                <div className="flex items-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                                        fill="currentColor" className="h-6 w-6 text-sky-500">
                                        <path
                                            d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                                        </path>
                                    </svg>
                                    <div className="ml-4 text-xl">Farmland</div>
                                </div>
                                <p className="leading-loose text-gray-500">Explore our diverse range of farmland properties suitable for agricultural purposes. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>

                            {/* Flats Section */}
                            <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
                                <div className="flex items-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                                        fill="currentColor" className="h-6 w-6 text-sky-500">
                                        <path
                                            d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                                        </path>
                                    </svg>
                                    <div className="ml-4 text-xl">Flats</div>
                                </div>
                                <p className="leading-loose text-gray-500">Discover our selection of modern flats in prime locations. Perfect for urban living or investment opportunities. Aenean convallis neque eu neque aliquet.</p>
                            </div>

                            {/* Villas Section */}
                            <div id='' className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
                                <div className="flex items-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                                        fill="currentColor" className="h-6 w-6 text-sky-500">
                                        <path
                                            d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                                        </path>
                                    </svg>
                                    <div className="ml-4 text-xl">Villas</div>
                                </div>
                                <p id="" className="leading-loose text-gray-500">Luxurious villas designed for comfort and elegance. Explore our range of villas offering scenic views and premium amenities. Proin consequat magna sed sem efficitur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
