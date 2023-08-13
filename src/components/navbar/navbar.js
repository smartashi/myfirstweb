import React from 'react';

import './Navbar.css';
import img3 from '../../images/img3.png';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar">
                <div className="left">
                    <div className="navbar-brand">
                        <img src={img3} alt="Not Found" />
                    </div>
                    <div className="components">
                        <ul className="navbar-nav">
                            <li><a href="#">File</a></li>
                            <li><a href="#">Edit</a></li>
                            <li><a href="#">Image</a></li>
                            <li><a href="#">Layer</a></li>
                            <li><a href="#">Select</a></li>
                            <li><a href="#">Filter</a></li>
                            <li><a href="#">View</a></li>
                            <li><a href="#">Window</a></li>
                        </ul>
                    </div>

                </div>
                <div className="rig">
                    <div className="items-pro">
                        {/* <p>Dark mode:</p> */}
                        <div className="symbol"><span class="material-symbols-outlined">dark_mode</span></div>
                        <div className="symbol"><span class="material-symbols-outlined">person</span></div> 
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
