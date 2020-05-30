import React from 'react';
import NewFirstTab from './NewFirstTab';
import NewSecondTab from './SecondTab';
import NewThirdTab from './ThirdTab';
import '../Css/TabsNav.css';

function TabComponent() {
    return (
        <div>
            <NewFirstTab/>
            <NewSecondTab/>
            <NewThirdTab/>
        </div>
    )
}

export default TabComponent;