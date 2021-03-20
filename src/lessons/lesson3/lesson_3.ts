import axios from 'axios';
const Placeholder = {
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
    //  ...settings
};
const axiosInstance = axios.create(Placeholder);

const API = {
    getByID: (id:number) => {
        return   axiosInstance.get(`/${id}`)
    },
    getAll:()=>{
        return axiosInstance.get(``)
    },
    deleteById:(id:number)=>{
        return axiosInstance.delete(`/${id}`)
    },
    postResurs:()=>{
        return axiosInstance.post(``,{body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 101,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }})
    },
    updateResurs:(id:number)=>{
       return  axiosInstance.put(`${id}`,{body: JSON.stringify({
                id: 1,
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }})

    }


}
const testGetbyID = (id:number)=>{
    API.getByID(id)
        .then((res)=>{
            console.log(res.data)
        })
}
const testGetAll = ()=>{
    API.getAll()
        .then((res)=>{
            console.log(res.data)
        })
}
const testDeleteByID = (id:number)=>{
    API.deleteById(id)
        .then((res)=>{
            console.log(res.data)
        })
}
const testCreeateResurse = ()=>{
    API.postResurs()
        .then((res)=>{
            console.log(res.data)
        })
}
const testUpdateResurses = (id:number)=>{
    API.updateResurs(id)
        .then((res)=>{
            console.log(res.data)
        })
}

testGetbyID(2)
testGetAll()
testCreeateResurse()
testUpdateResurses(2)
testDeleteByID(2)







//testDeleteByID(1)
//setTimeout(testGetAll,6000)














console.log('lesson 3');
























// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661


// just a plug
export default ()=>{};