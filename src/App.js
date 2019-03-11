import React, { Component } from "react";
import Header from './Components/Header'
import ArtistInfo from './Components/ArtistInfo'
import "./App.css";


class App extends Component {
  render() {
    let title ='Artist Information:'
    let imgUrl ='https://images.unsplash.com/photo-1465145177017-c5b156cd4d14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    let artistName="Taylor Swift"
    let songList=["All Too Well", "Back to December", "Bad Blood", "Beautiful Eyes", "Blank Space", "Christmases When You Were Mine"]
    return (
      <div>
        <Header header={title}/>
        <ArtistInfo 
                  imgUrl={imgUrl}
                  artistName={artistName}
                  songList={songList}
        />
      </div>
      
    );
  }
}

export default App;
