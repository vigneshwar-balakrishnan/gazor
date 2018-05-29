import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import '../App.css';


class Header extends Component{
    render(){
        return(
            <header className="App-header" >
                <h1>Gazor</h1>

                <nav>
                    <ul className="Click">
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/gallery">Gallery</Link>
                
                    </li>
                    <li>
                    <Link to="/overview">Overview</Link>
                    </li>
                    </ul>
                </nav>

            </header>

        )
    }
}

export default Header;
