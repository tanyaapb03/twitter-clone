import React from 'react';
import'./SidebarOption.css';

function SidebarOption({active,text,Icon}) {
    return (
        <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
            <Icon/>
            <h2> {text}</h2>
            
        </div>
    );
}
// Sidebar option 
// on hover turn blue
//  pass component as prop through icons
// pass Icon and text as props 
export default SidebarOption ;
