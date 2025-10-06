export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEU: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const fetchMovie = async({ query }: {query: string}) =>{
    const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie/?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers, 
    });

    if(!response.ok){
        throw Error('Failed to fetch movies', response.statusText)
    }

    const data = await response.json();  
    
    return data.results;
} 

// const url = 'https://api.themoviedb.org/3/authentication';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzU1MmIxZDY4OTc1ZGY0OWI1YjUzMmY2Nzk2NzIyMCIsIm5iZiI6MTc1OTYwNTMyMC42NDk5OTk5LCJzdWIiOiI2OGUxNzI0ODFlN2Y3MjAxYjI5Y2E0OTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.PCcm6fMU64S-k6fXfVNDN249zAyDtaPGh_w4GTV4UF8'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));