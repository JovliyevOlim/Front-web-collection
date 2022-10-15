import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Collection from '../components/Collection'
import CollectionReducer,{getcollection} from "../reducers/CollectionReducer";
function AllCollections({getcollection,CollectionReducer}) {

    useEffect(()=>{
        getcollection()
    },[CollectionReducer.current])

    return (
        <div className={'bg-blue-900 p-10'}>
                <h4 className={'text-center p-2 mb-3.5 text-white text-4xl'}>Collections</h4>
                <Collection/>
        </div>
    );
}

export default connect(CollectionReducer,{getcollection}) (AllCollections);
