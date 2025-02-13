const NetflixImages = document.querySelector("#NetflixContainer");
const TrendingImages = document.querySelector("#trendingContainer");
const TopRatedImages = document.querySelector("#topRatedContainer");
const ActionmoviesImages =  document.querySelector("#ActionMoviesContainer");
const ComediesmoviesImages = document.querySelector("#ComediesMoviesContainer");
const Image_url = "https://image.tmdb.org/t/p/original";



const Netflix_url = "https://api.themoviedb.org/3/discover/tv?api_key=6b16d69c1ed9d2166d76db0f12c8f72c&with_networks=213";

const data = fetch(Netflix_url).then(response=>response.json())
.then(NetflixData=>{
    console.log(NetflixData);
    
    NetflixData.results.forEach(getNetfixData => {

        const netflixDiv = document.createElement("div");
        netflixDiv.classList.add("netflixDiv")
        
        const img = document.createElement("img");
        img.classList.add("Netflix_Poster")
        img.src = Image_url+getNetfixData.poster_path;

        netflixDiv.append(img)
        NetflixImages.append(netflixDiv)
    });
})


const trending_url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=6b16d69c1ed9d2166d76db0f12c8f72c";

const data2 = fetch(trending_url).then(response=>response.json())
.then(TrendingData=>{
    console.log(TrendingData);
    
    TrendingData.results.forEach(getTrendingData => {

        const trendingDiv = document.createElement("div");
        trendingDiv.classList.add("trendingDiv")
        
        const img = document.createElement("img");
        img.classList.add("trending_Poster")
        img.src = Image_url+getTrendingData.poster_path;

        trendingDiv.append(img)
        TrendingImages.append(trendingDiv)
    });
})

const TopRated_url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=6b16d69c1ed9d2166d76db0f12c8f72c";

const data3 = fetch(TopRated_url).then(response=>response.json())
.then(topRatedData=>{
    console.log(topRatedData)
    topRatedData.results.forEach(getTopRatedData=>{

        const topRatedDiv = document.createElement("div");
        topRatedDiv.classList.add("topRatedDiv");

        const img = document.createElement("img");
        img.classList.add("topRatedPoster");
        img.src = Image_url+getTopRatedData.poster_path;

        topRatedDiv.append(img);
        TopRatedImages.append(topRatedDiv);
    })
})

const ActionMovies_url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=6b16d69c1ed9d2166d76db0f12c8f72c";

const data4 = fetch(ActionMovies_url).then(response=>response.json())
.then(ActionMoviesData=>{
    console.log(ActionMoviesData)
    ActionMoviesData.results.forEach(getMoviesData=>{

        const ActionMoviesDiv = document.createElement("div");
        ActionMoviesDiv.classList.add("ActionMoviesDiv");

        const img = document.createElement("img");
        img.classList.add("ActionMoviesPoster");
        img.src = Image_url+getMoviesData.poster_path;

        ActionMoviesDiv.append(img);
        ActionmoviesImages.append(ActionMoviesDiv);
    })
})








