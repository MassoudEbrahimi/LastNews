import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getAdminNavLinks from "../../Service/adminNavlinks"

class Sidebar extends Component {
    render() {
        const adminNavLinks = getAdminNavLinks();
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky flex-column">
                    {adminNavLinks.map(nav => (
                        <ul className="nav col-12" key={nav.id}>
                            <li className="nav-item col-12">
                                <Link className="nav-link" to={nav.link}>
                                    <span className={nav.icon} style={{ color: "Orange" }} />
                                    <span className="m-2">{nav.text}</span>
                                </Link>
                                <hr className="shadow" />
                            </li>
                        </ul>
                    ))}

                </div>
            </nav>
        );
    }
}

export default Sidebar;
