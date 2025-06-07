import { useState } from "react";

import FavModul from "./FavModul";
import Favorite from './Favorite';
import Logo from "./Logo";
import Search from './Search';


export default function Header() {
    const [show, setShow] = useState(false)

    return (
        <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
            <nav className="container flex items-center justify-between py-6">
                <Logo />

                <div className="flex items-center gap-4 relative">
                    <Search />
                    <Favorite show={() => setShow(!show)} />

                    {/*  Modal  */}
                    {
                        show && <FavModul />
                    }

                </div>
            </nav>
        </header>
    )
}
