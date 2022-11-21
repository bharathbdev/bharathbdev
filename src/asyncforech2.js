'use strict';

const fs = require('fs');
const axios = require('axios');




// https://jsonmock.hackerrank.com/api/food_outlets?city=<cityName>&estimated_cost=<estimatedCost>


async function getTopRatedFoodOutlets(city,estimatedCost) {
    let url = "https://jsonmock.hackerrank.com/api/food_outlets?city=" + city + "&estimated_cost=" + estimatedCost
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

full.reduce((a, b)=>{
     a = a + b.user_rating.votes
    return a
}, 0)

    console.log(a)
    return a









}
let god =getTopRatedFoodOutlets("Seattle", 10)
console.log(god)


