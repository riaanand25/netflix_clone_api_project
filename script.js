const NetflixImages = document.querySelector("#NetflixContainer");
const Netflix_url = "https://api.themoviedb.org/3/discover/tv?api_key=6b16d69c1ed9d2166d76db0f12c8f72c&with_networks=213";
const Image_url = "https://image.tmdb.org/t/p/original";

const data = fetch(Netflix_url).then(response=>response.json())
.then(NetflixData=>{
    NetflixData.results.forEach(getNetfixData => {

        const netflixDiv = document.createElement("div");
        netflixDiv.classList.add("netflixDiv")
        
        const img = document.createElement("img");
        img.classList.add("Netflix_Poster")
        img.src = Image_url+getNetfixData.poster_path;


        netflixDiv.append(img)
        NetflixContainer.append(netflixDiv)
    });
})


const trending_url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=6b16d69c1ed9d2166d76db0f12c8f72c";


const data2 = fetch(trending_url).then(response=>response.json())
.then(TrendingData=>{
    TrendingData.results.forEach(getTrendingData => {

        const trendingDiv = document.createElement("div");
        trendingDiv.classList.add("trendingDiv")
        
        const img = document.createElement("img");
        img.classList.add("trending_Poster")
        img.src = Image_url+getTrendingData.poster_path;


        trendingDiv.append(img)
        NetflixContainer.append(trendingDiv)
    });
})

