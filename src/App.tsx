
import Header from './components/header/header';
import './App.css';
import FoundElems from './components/foundElems/foundElems';
import { Container } from './components/container/container';
import { isMovie } from './utils/typeguards';
import Footer from './components/footer/footer';
import { Movie, MovieError } from './types';
import { useState } from 'react';

const BASE_URL="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="
function App() {
  const [movie, setMovie]= useState<Movie | null>(null)
  const [isFetching, setIsFetching] =useState<boolean>(false)
  const fetchMovies=async (username: string): Promise<void> => {
    setIsFetching(true)
 const url =BASE_URL+username;
 const res = await fetch(url)
 const user= await res.json() as Movie | MovieError
 setIsFetching(false)
 console.log(user)
 if(isMovie(user)){
  setMovie(user)
 }
 else {
  console.log("NOOO")
 } 
  }
  return (
    
   <div className="App"> 

    <Header fetchMovies={fetchMovies} />
    {movie!=null && (
      <FoundElems movie={movie} />  

    )}
    {isFetching? (
    <p>Loading</p>
    ) :
    (null)}
    <Footer />
  </div>
 
  );
}

export default App;
//https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1'
 // npx create-react-app tsss --template typescript