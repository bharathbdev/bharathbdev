'use strict';

const fs = require('fs');
const axios = require('axios');




// https://jsonmock.hackerrank.com/api/food_outlets?city=<city>&page=<pageNumber>


async function getTopRatedFoodOutlets(city) {
    let url = "https://jsonmock.hackerrank.com/api/food_outlets?city=" + city
    let data = await axios.get(url + "&page=1")
    let total = data.data['total_pages']
    let totalPages = []
    for(let i=0; i<total;i++){
        totalPages.push(i+1)
    }
    let arr = []
    for(let a of totalPages){
        arr.push(url + "&page=" + a)
    }




    async function fetchUrls(urlList) {
        let promises = [];
        for(let idx in urlList) {
            let d = urlList[idx]
            promises.push(axios.get(d));
        }
        return Promise.all(promises);
    }
    let final
    let hki = await fetchUrls(arr)
    let full = []
    for(let b of hki){
        for(let c of b.data.data) {
            full.push(c)
        }
    }


    full.sort((a,b)=>{
        return b.user_rating.average_rating - a.user_rating.average_rating
    })
    let commonrate = full[0]?.user_rating?.average_rating
    let final2 = full.filter((e)=>{
        return e?.user_rating?.average_rating === commonrate
    })
    final = final2.map((k)=>{
        return k.name
    })
    return final









}
let god =getTopRatedFoodOutlets("Houston")
console.log(god)


