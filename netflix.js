const Image_url = "https://image.tmdb.org/t/p/original";

const categories = [
    {
        name: "Netflix",
        url: "https://api.themoviedb.org/3/discover/tv?api_key=6b16d69c1ed9d2166d76db0f12c8f72c&with_networks=213",
        container: document.querySelector("#NetflixContainer"),
        className: "Netflix_Poster"
    },
    {
        name: "Trending",
        url: "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=6b16d69c1ed9d2166d76db0f12c8f72c",
        container : document.querySelector("#trendingContainer"),
        className : "trending_Poster"
    },
    {
        name: "TopRated",
        url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=6b16d69c1ed9d2166d76db0f12c8f72c",
        container : document.querySelector("#topRatedContainer"),
        className : "topRatedPoster"
    },
    {
        name: "ActionMovies",
        url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=6b16d69c1ed9d2166d76db0f12c8f72c",
        container : document.querySelector("#ActionMoviesContainer"),
        className : "ActionMoviesPoster"
    }
]

for (let i = 0; i<categories.length; i++) {
   fetch(categories[i].url).then(response=>response.json())
   .then(getData=>{
    console.log(getData);
    getData.results.forEach(allData => {
        
        const div = document.createElement("div");
        div.classList.add(categories[i].name);

        const img = document.createElement("img");
        img.classList.add(categories[i].className);
        img.src = Image_url + allData.poster_path;

        div.append(img);
        categories[i].container.append(div);
    });
   })   
}


     

