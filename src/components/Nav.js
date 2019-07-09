import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
    return (
        <nav>
            <h1>React and Wordpress API</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}
