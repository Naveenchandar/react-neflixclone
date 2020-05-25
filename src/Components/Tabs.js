import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FirstTabIcon from './FirstTabIcon';
import SecondTabIcon from './SecondTabIcon';
import ThirdTabIcon from './ThirdTabIcon';
import FirstTabContent from './FirstTabContent';
import SecondTabContent from './SecondTabContent';
import ThirdTabContent from './ThirdTabContent';
import '../Css/TabsNav.css'

function TabComponent() {
    const [TabIndex, setTabIndex] = useState(0);
    const handleTabSelect = (index) => {
        setTabIndex(index);
    }
    return (
        <div>
            <Tabs className="Tabs" selectedIndex={TabIndex} onSelect={handleTabSelect}>
                <TabList className="TabsList">
                    <Tab className={`${TabIndex === 0 ? 'tab-selected active' : null}`}>
                        <FirstTabIcon />
                        <p style={{ marginBottom: '1.875rem' }}>
                            <strong>No Commitments <br />Cancel at any time.</strong>
                        </p>
                    </Tab>
                    <Tab className={`${TabIndex === 1 ? 'tab-selected active' : null}`}>
                        <SecondTabIcon />
                        <p>
                            <strong>Watch Anywhere.</strong>
                        </p>
                    </Tab>
                    <Tab className={`${TabIndex === 2 ? 'tab-selected active' : null}`}>
                        <ThirdTabIcon />
                        <p>
                            <strong>Pick your price.</strong>
                        </p>
                    </Tab>
                </TabList>
                {/* Tab Content */}
                <TabPanel>
                    <FirstTabContent />
                </TabPanel>
                <TabPanel>
                    <SecondTabContent />
                </TabPanel>
                <TabPanel>
                    <ThirdTabContent />
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default TabComponent;