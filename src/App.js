import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import Title  from './Title'
import SearchForm  from './components/SearchForm'

function App() {
  return (
    <div className="App">
      <Title>Search for movies</Title>
      <div className="SearchForm-wrapper">
{/*         <SearchForm onMoviesResults={this.handleMoviesResults} /> */}
        <SearchForm />
      </div>
{/*        { this.state.moviesResults.lenght === 0
          ?<p>No movies</p>
          :this.renderMoviesResults()
       } */}
     
    </div>
  );
}

export default App;
