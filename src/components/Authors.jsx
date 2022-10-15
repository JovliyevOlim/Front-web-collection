import React, {useEffect,useState} from 'react';
import {connect} from "react-redux";
import AuthorReducer,{getAuthor,getAuthorsSearch} from "../reducers/AuthorReducer";
function Authors({getAuthor,AuthorReducer,getAuthorsSearch}) {

    const [page, setPage] = useState(1);

    useEffect(()=>{
        getAuthors()
    },[page])

    const pages = new Array(AuthorReducer.authorTotal).fill(null).map((v, i) => i)

    function prev() {
        setPage(prev => prev - 1)
    }

    function next() {
        setPage(prev => prev + 1)
    }

    const [search, setSearch] = useState('')

    function getAuthors() {
        if (search === '') {
            getAuthor(page)
        } else {
            getAuthorsSearch(search, page)
        }
    }

    function authorSearch(e) {
        setPage(1)
        setSearch(e.target.value)
        getAuthors()
    }

    return (
        <div className={'px-20 py-5 bg-blue-900'}>
            <h2 className={'text-center p-4 text-white text-4xl'}>Authors</h2>


            <div className="overflow-x-auto relative dark:bg-gray-900  shadow-md sm:rounded-lg">
                <div className="pb-4 px-4 py-4 bg-white flex items-center justify-between dark:bg-gray-900 ">
                    <div>
                        <label htmlFor="table-search" className="sr-only">Search</label>
                        <div className="relative mt-1">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <input type="text" id="table-search" value={search} onChange={authorSearch}
                                   className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Search for users"/>
                        </div>
                    </div>


                </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Username
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Email
                        </th>
                        {/*<th scope="col" className="py-3 px-6">*/}
                        {/*    Action*/}
                        {/*</th>*/}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        AuthorReducer.authors.map(item =>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row"
                                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.username}
                                </th>
                                <td className="py-4 px-6">
                                    {item.email}
                                </td>

                                {/*<td className="py-4 px-6">*/}
                                {/*    <button onClick={()=>editUser(item._id)}*/}
                                {/*            className="font-medium mr-4 text-blue-600 dark:text-blue-500 hover:underline">Edit</button>*/}
                                {/*    <button onClick={() => UserDelete(item._id)}*/}
                                {/*            className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete*/}
                                {/*    </button>*/}
                                {/*</td>*/}
                            </tr>
                        )
                    }

                    </tbody>
                </table>
                <nav className="flex justify-center items-center pt-4  px-4 py-4" aria-label="Table navigation">

                    <ul className="inline-flex items-center -space-x-px">
                        <li>
                            <button disabled={page === 1 ? true : false} onClick={prev}
                                    className={`${page === 1 ? 'disabled:opacity-25' : ''} block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
                                <span className="sr-only">Previous</span>
                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </li>
                        {pages.map(pageIndex =>
                            <li>
                                <button disabled={page === pageIndex + 1 ? true : false}
                                        onClick={() => setPage(pageIndex + 1)}
                                        className={`${page === pageIndex + 1 ? 'disabled:opacity-25' : ''} py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
                                    {pageIndex + 1}</button>
                            </li>
                        )}


                        <li>
                            <button onClick={next} disabled={page === AuthorReducer.authorTotal ? true : false}
                                    className={`${page === AuthorReducer.authorTotal ? 'disabled:opacity-25' : ''} block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
                                <span className="sr-only">Next</span>
                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    );
}

export default connect(AuthorReducer,{getAuthor,getAuthorsSearch}) (Authors);
