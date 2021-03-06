import React from 'react';

const Navbar = () => (
    <nav className="border fixed split-nav">
        <div className="nav-brand">
            <h3><a href="/">ReWrite</a></h3>
        </div>
        <div className="collapsible">
            <input id="collapsible1" type="checkbox" name="collapsible1" />
            <button>
                <label htmlFor="collapsible1">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </label>
            </button>
            <div className="collapsible-body">
                <ul className="inline">
                    <li><a href="/blog/new">New Blog</a></li>
                    <li><a href="/profile">My profile</a></li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;
