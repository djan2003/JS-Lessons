import React, { useState } from 'react';
import API from './API';
import './lesson_3';

export const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [serachResult, setSerachResult] = useState('');
    const [searchNameByType, setSearchNameByType] = useState('');
    const [serachResultByType, setSerachResultByType] = useState('');

    const searchFilm = () => {
        API.searchFilmsByTitle(searchName)
            .then((res:any)=>{
                const filmdata = JSON.stringify(res.data);
                return filmdata
            })
            .then((res:any)=>{
                setSerachResult(res)
            })
            .catch((reason)=>{
               const error = reason.toString()
                return setSerachResult(error)
            })
    };

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchNameByType, type)
            .then((res)=>{
                debugger
                let typeOfSearch = res.data.Search[0].Type
                if(type ===typeOfSearch ){
                    const filmdataFortype = JSON.stringify(res.data);
                    return filmdataFortype
                }
                else return "Такого фильма нет"


            })
            .then((res:any)=>{
                setSerachResultByType(res)
            })
            .catch((reason)=>{
                const error = reason.toString()
                return setSerachResultByType(error)
            })
    }

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                    {serachResult}
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType} onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>
                    {serachResultByType}
                </div>
            </div>
        </div>
    );
}
export default Lesson3;