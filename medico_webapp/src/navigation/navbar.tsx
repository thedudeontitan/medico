import React from "react";

export default function Navbar(){
    let width = window.innerWidth;
    if(width > 768){
        return(
            <section>
            <nav className="fixed top-0 left-0 right-0 bg-blue-400 h-14 z-10">
                <div className="flex">
                    <ul className="flex flex-row">
                    </ul>
                </div>
            </nav>
        </section>
        )
    }
    else{
    return(
        <section>
            <nav className="fixed bottom-0 left-0 right-0 bg-blue-400 h-14 z-10">
                <div className="flex">
                    <ul className="flex flex-row">
                    </ul>
                </div>
            </nav>
        </section>
    )
    }

}