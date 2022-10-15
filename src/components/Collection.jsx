import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import {BaseURl} from "../AxiosApi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import CollectionReducer,{deleteCollection} from "../reducers/CollectionReducer";
function Collection({CollectionReducer,deleteCollection}) {
    return (
        <div className={'flex flex-wrap gap-10 px-2 justify-between grid grid-cols-3'}>
            {
                CollectionReducer.collection.map(item=>
                    <div className="col-span-1 max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {
                                item?.items.map(image=>
                                    <SwiperSlide>
                                        <div>
                                            <figure className="relative">
                                                <img className="object-fill w-full h-96"
                                                     src={BaseURl+image.photo}/>
                                                <figcaption className="absolute text-2xl font-bold space-x-1  -mt-16 text-red-700 px-8">
                                                    <h1>{image.title}</h1>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </SwiperSlide>

                                )
                            }
                        </Swiper>
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {item.name}</h5>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.desc}</p>
                            <div className={'flex gap-10'}>
                                <Link to={`/collections/${item._id}`}
                                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                </Link>
                                <button  type="button"
                                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Edit
                                </button>
                                <button onClick={()=>deleteCollection(item._id)} type="button"
                                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete
                                </button>

                            </div>

                        </div>
                    </div>

                )
            }
        </div>

    );
}

export default connect(CollectionReducer,{deleteCollection}) (Collection);
