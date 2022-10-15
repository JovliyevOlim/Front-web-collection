import React, {useEffect} from 'react';
import {connect} from "react-redux";
import CollectionReducer,{getUsercollection} from "../reducers/CollectionReducer";
import Collection from "./Collection";
import {Link} from "react-router-dom";
function YourCollection({CollectionReducer,getUsercollection}) {

    useEffect(()=>{
       let user =  JSON.parse(localStorage.getItem('userObject'))
        console.log(user)
        if (user){
            getUsercollection(user._id)
        }
    },[localStorage])
    return (
        <div className={'bg-blue-900 p-10'}>


            {
                CollectionReducer.collection !== []  ?      <div>
                    <h4 className={'text-center p-2 mb-3.5 text-white text-4xl'}>Your Collections</h4>
                    <Collection/>
                </div> :     <div>
                    <h4 className={'text-center p-2 mb-3.5 text-white text-4xl'}>You have no collections yet</h4>
                    <div className={'flex justify-center items-center'}>
                        <h4 className={'text-center p-2 mb-3.5 text-white text-4xl'}>If you want to add a collection :</h4>
                        <Link to={'/create'} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            + Add
                        </Link>
                    </div>
                </div>
            }
        </div>
    );
}

export default connect(CollectionReducer,{getUsercollection}) (YourCollection);
