import React, { Component } from 'react'

class ArtistInfo extends Component {

    render(){
        return (
            <div>
                <img className='image' src={this.props.imgUrl}/>
                <h3 className='artist-name'>{this.props.artistName}</h3>
                <p className='song-list' > {this.props.songList.join(', ')}</p>
            </div>
        );
    }
}

ArtistInfo.defaultProps ={
    imgUrl: 'https://images.unsplash.com/photo-1531684510013-7aa3d3f55ea4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    artistName: " ",
    songList: ['No Song Found']
}

export default ArtistInfo;