import React, { useState } from 'react';
import NewFirstTab from './NewFirstTab';
import NewSecondTab from './SecondTab';
import '../Css/TabsNav.css'

function TabComponent() {
    return (
        <div>
            <NewFirstTab/>
            <NewSecondTab/>
        </div>
    )
}

export default TabComponent;