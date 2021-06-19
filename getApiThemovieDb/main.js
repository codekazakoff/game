// Export import Default and Named Default

// import {Client,Add} from "./fetch.js";

// const result = Add(5,6);
// console.log(result);

// let client  = new Client("Shohrux","Kazakoff",19);
// client.getFirstName();
// Client.getName();



// Array helpers 

// ForEach
// let arr = [1,2,3,4,5,6,7,8,9];

// arr.forEach( (item,index) => {
//     console.log(item,index);
// })


// Map and ForEachOf 

// const data = [
//     {
//         name : 'Shohrux',
//         firstName : 'Kazakoff',
//         age : 25
//     },
//     {
//         name : 'Farrux',
//         firstName : 'Kazakoff',
//         age : 28
//     },
// ]

// const result = data.map(item => ({
//     ism : item["name"]
// }));

// console.log(result);


// console.log('--------------------------');

// data.forEach( (item,index) => {
//     console.log(item.name, index)
// })
// // console.log(rs);


// Filter  Oz ozidan aytib turibdiki bu keylani filterlab yoki bolmasa solishtrib berarkan va usha qiymatno qaytarar ekan


// const talaba = [
//     {name : 'Shohrux', age : 28},
//     {name : 'Sanjar', age: 24},
//     {name : 'Farrux', age : 20}
// ];

// const filteredTalaba = talaba.filter(item => {
//     if(item.name === 'Shohrux'){
//         return true;
//     }
// });
// console.log(filteredTalaba);

// const mapTalaba = talaba.map(item => {
//     if(item.name === 'Sanjar'){
//         return item.name;
//     }
// })
// console.log(mapTalaba);



// Find arry icida san bergan qiymat bor bolsa usha qiymatni sanga qaytarib berarkan


// let x = [
//     {name : 'jay', age : 14},
//     {name : 'hulu', age : 18}
// ] 
// const result = x.find(item => item.name === 'jay');

// console.log(result)


// Some Or amali ishlikan bu arry icidagi elementlarni shart icidagi sondan kichkinasi yoki kattasi bolsa uchani ciqararkan


// const names = [`Alex`,`Jimmy`,`Johnny`]
// const result = names.some(name => name.length >= 6)
// console.log(result)


// Every And amali ishlikan zaybal ekan bittasi false bolsa tamom false bolarkan trueda esa hammasi true bolishi kk ekan


// const names = ['Alex','Alex','Alexe']
// const result = names.every(name => name.length !== 4)
// console.log(result)



// Reduce     

// const numbers = [1,2,3,4,5]

// const result = numbers.reduce((sum, numbers) => sum + numbers, 0)

// console.log(result);


const movieApi_url = 'https://api.themoviedb.org/3/movie/804435/recommendations?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&page=1';

fetch(movieApi_url)
.then(res => res.json())
.then(data => console.log(data));

const movieApiMovies = () => {
    let loader = `<div class="boxLoading"></div>`;
    document.getElementById('movieResult').innerHTML += loader;
    fetch(movieApi_url + "movies/")
        .then(response => response.json())
        .then(function (data) {
            let result = `<h2> Movies I've watched! </h2>`;
            data.forEach((movie) => {
                const {id, name, year, note_imdb, genre, duration} = movie;
                result +=
                    `<div>
                        <h5> Movie ID: ${id} </h5>
                        <ul>
                            <li>Movie name: ${name}</li>
                            <li>Movie year: ${year}</li>
                            <li>Movie note on IMDB: ${note_imdb}</li>
                            <li>Movie Genre: ${genre}</li>
                            <li>Movie duration: ${duration}</li>
                        </ul>
                    </div>`;
                document.getElementById('movieResult').innerHTML = result;
            })
        })
    };
    movieApiMovies()