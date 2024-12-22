import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { ImCross } from "react-icons/im";


const NavBar = () => {
    const[open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ];

    return (
        
        <nav className="bg-yellow-200 p-6 text-black">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <HiMenuAlt1></HiMenuAlt1>
                    : <ImCross></ImCross>

                }

                
            </div>
            <ul className={`md:flex absolute bg-yellow-200 px-6 duration-1000 md:static
            ${open ? 'top-20' : '-top-60'}`
            }>
            {
                    routes.map(route =>  <Link  key={route.id} route={route}></Link>)
            }
        </ul>
        </nav>
    );
};

export default NavBar;