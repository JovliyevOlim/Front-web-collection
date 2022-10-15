import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import CollectionReducer,{getOnecollection} from "../reducers/CollectionReducer";
import {BaseURl} from "../AxiosApi";
function OneCollection({getOnecollection,CollectionReducer}) {

    const param = useParams();

    useEffect(()=>{
        if(param.id){
            getOnecollection(param.id)
        }
    },[CollectionReducer.current])

    const {authorId,categoryId,name} = CollectionReducer.oneCollection


    return (
        <div className={'bg-blue-900 p-10'}>
            <h4 className={'text-center p-2 mb-3.5 text-white text-4xl'}>Items of Collection</h4>
            {
                param.id ?      <div>
                    <div className={'flex justify-between mb-10'}>
                        <h4 className={' p-2 rounded-full  mb-0.5 text-white text-2xl bg-gray-900'}>Collection name : {name}</h4>
                        <h4 className={' p-2 rounded-full mb-0.5 text-white text-2xl bg-gray-900'}>Author of Collection : {authorId?.username}</h4>
                        <h4 className={' p-2 rounded-full mb-0.5 text-white text-2xl bg-gray-900'}>Category : {categoryId?.name}</h4>
                    </div>
                    <div className={'flex justify-between gap-10 grid grid-cols-3'}>
                        {
                            CollectionReducer.oneCollection.items ?
                            CollectionReducer.oneCollection?.items.map(value=>
                                <div className="col-span-1 max-w-md rounded overflow-hidden bg-gray-900 shadow-lg">
                                    <img className="w-full object-fill h-96" src={BaseURl+value.photo} alt="Sunset in the mountains"/>
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl text-white mb-2">{value.title}</div>
                                        <p className="text-gray-300 text-base">
                                            {value.desc}
                                        </p>
                                    </div>
                                </div>
                            ) :'Items not found'
                        }
                    </div>

                </div> :'Items not found'

            }


        </div>
    );
}

export default connect(CollectionReducer,{getOnecollection}) (OneCollection);
