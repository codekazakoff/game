function next_prev(elem, teg){
    var a = document.getElementsByTagName(teg);
        for (i = 0; i < a.length; i++) {
            a[i].classList.remove('selected');
        }
        elem.classList.add('selected');
}

const getPopular = `https://api.themoviedb.org/3/movie/popular?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&page=1`;


function streaming(){
    fetch(getPopular)
    .then(res => res.json())
    .then(popular =>{
        const {results} = popular;
        results.map((result) =>{
                    document.querySelector('.column-cards').innerHTML +=(`
                    <div class="card">
                    <a href="./movie_click/index.html"><img class="card_img" src="https://image.tmdb.org/t/p/w500${result.poster_path}" alt=""></a>
                    <div class="card_top_circle present">
                        <span>${result.vote_average * 10}%</span>
                    </div>
                    <h3><a href="./movie_click/index.html">${result.title}</a></h3>
                    <p>${result.release_date}</p>
                    <li class="dod_menu">
                        <ul class="card_menu" id="card_menu">
                            <li class="dod_item">
                                <i class="fas fa-bars"></i>
                                <a class="dod_link">Add to list</a>
                            </li>
                            <li class="dod_item">
                                <i class="fas fa-heart"></i>
                                <a class="dod_link">Favorite</a>
                            </li>
                            <li class="dod_item">
                                <i class="far fa-comment"></i>
                                <a class="dod_link">Watchlist</a>
                            </li>
                            <li class="dod_item">
                                <i class="fas fa-star"></i>
                                <a class="dod_link">Your rating</a>
                            </li>
                        </ul>
                        <img class="card_dod" onclick="btnHandler(event)"  src="./img/threedod.svg" alt="">
                    </li>
                </div>
        `)})
    })
.catch(err => console.log(err));
}

streaming()



function btnHandler(event){
    event.target.parentElement.firstElementChild.classList.toggle("toggle");
}




