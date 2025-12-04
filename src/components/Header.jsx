import React from 'react';

const Header = ({ onRefresh }) => {
    return (
        <header className="bg-black border-b border-cyan-400 p-5 flex justify-between items-center shadow-[0_0_15px_#00eaff]">
            <h1 className="text-2xl font-bold text-cyan-400 neon tracking-widest">
                NEWS://CYBER_FEED
            </h1>

            <button
                onClick={onRefresh}
                className="px-4 py-2 rounded-lg bg-black text-cyan-300 border border-cyan-500 hover:bg-cyan-500 hover:text-black transition neon"
            >
                RELOAD
            </button>
        </header>
    );
};

export default Header;
