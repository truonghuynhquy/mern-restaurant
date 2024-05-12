// import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [navLinks, setNavLinks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:4000/api/v1/restApi/getNavbar"
                );
                const data = response.data.data;
                setNavLinks(data);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <nav>
                <div className="logo">HINATA</div>
                <div className={show ? "navLinks showmenu" : "navLinks"}>
                    <div className="links">
                        {navLinks.map((el) => (
                            <Link
                                to={el.link}
                                spy={true}
                                smooth={true}
                                duration={500}
                                key={el._id}
                            >
                                {el.title}
                            </Link>
                        ))}
                    </div>

                    <button className="menuBtn">Our Menu</button>
                </div>

                <div
                    className="hamburger"
                    onClick={() => setShow((show) => !show)}
                >
                    <GiHamburgerMenu />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
