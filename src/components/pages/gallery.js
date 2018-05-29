import React, { Component } from 'react';

const flickrAPI = process.env.REACT_APP_FLICKR_API_URL;

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gazoList : []
        }

    }
    componentWillMount() {
        let init = {
             method: 'GET',
             headers: new Headers(),
             mode: 'cors',
             cache: 'default' 
          };
    
        fetch(flickrAPI, init)
          .then( response => response.json())
          .then( 
            data => this.setState( 
              prevState => ({
              gazoList: [...data.photos.photo]
              }) 
            )
          )
        }


render() {
    return (
        <div className='wrap'>
          <h1>Gallery</h1>
          <ul className="list-group" id="gazo">
           { this.state.gazoList.map(
               (photo) =>
                 <li key={photo.owner} className="list-group-item">
                 </li>
             )
           }
        </ul>
          
          <p>Ut vim reque erant. Sea velit eripuit ex, pro postulant rationibus percipitur ne, nostro molestie urbanitas cu vis. No eos cibo melius persequeris, cu everti iuvaret antiopam vel, ius ad tollit hendrerit. Cu integre suscipit sadipscing ius, ne sit utroque repudiare. Solet dolorem antiopam cu sea, magna assum dissentiunt te nec.</p>
        </div>
    );
  }     
}

export default Gallery;