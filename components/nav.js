import React from 'react'
import Link from './ActiveLink'

export default function nav() {
    return (
        <header className="masthead mb-auto">
            <div className="inner">
                <h3 className="masthead-brand">Cover</h3>
                {/* <nav class="nav nav-masthead justify-content-center">
                    <Link activeClassName="active" href="/"><a className="nav-link">Home</a></Link>
                    <Link activeClassName="active" className="nav-link" href="/about"><a className="nav-link">Features</a></Link>
                </nav> */}
                <nav className="nav nav-masthead justify-content-center">
                    <Link activeClassName="active" href="/"><a className="nav-link ">Home</a></Link>
                    <Link activeClassName="active" href="/about"><a className="nav-link ">About</a></Link>
                </nav>
            </div>
        </header>
    )
}
