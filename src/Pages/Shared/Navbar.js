import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Affinity Electronics</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/purchase">Purchase</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/myportfolio">My Portfolio</Link></li>

                        {
                            user && <li><Link to="/dashboard">Dashboard</Link></li>
                        }


                        <li>{user ? <button className="btn btn-ghost" onClick={handleSignOut} >Sign Out</button> : <Link to="/login">Login</Link>}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;