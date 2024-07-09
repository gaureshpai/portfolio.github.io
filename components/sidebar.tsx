import React from 'react';
import Link from 'next/link';
import '@/public/styles/sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className='button-container'>
                <div className='buttons'><Link href="/">Home</Link></div>
                <div className='buttons'><Link href="/Library">Library</Link></div>
                <div className='buttons'><Link href="/CreatePlaylist">Create Playlist</Link></div>
                <div className='buttons'><Link href="/Profiles">View all contributors</Link></div>
            </div>
        </div>
    );
};

export default Sidebar;