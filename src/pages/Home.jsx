import React from 'react';
import Navbar from "./navbar/Navbar";
import {Routes,Route} from "react-router-dom"
import Items from "../components/Items";
import Users from "../components/Users";
import AllCollections from "../components/AllCollections";
import Authors from "../components/Authors";
import CreateCollection from "../components/CreateCollection";
import EditProfile from "../components/EditProfile";
import OneCollection from "../components/OneCollection";
import YourCollection from "../components/YourCollection";
function Home(props) {
    return (
        <div>
            <Navbar/>

            <Routes>
                <Route index element={<Items/>}/>
                <Route path={'/users'} element={<Users/>}/>
                <Route path={'/collections/:id'} element={<OneCollection/>}/>
                <Route path={'/collections'} element={<AllCollections/>}/>
                <Route path={'/your_collection'} element={<YourCollection/>}/>
                <Route path={'/authors'} element={<Authors/>}/>
                <Route path={'/create'} element={<CreateCollection/>}/>
                <Route path={'/profile'} element={<EditProfile/>}/>
            </Routes>

        </div>
    );
}

export default Home;
