import React from 'react';
import Tab1Img from '../images/tab-1-pic.png';
import styled from 'styled-components';
import Button from './Button';

/* Main content container */
const TabContentContainer = styled.div`
    background: var(--main-deep-dark);

    .container{
        margin: 0 10%;
    }

    img{
        width:31.875rem;
    }

    .tab-content{
        display: grid;
        grid-template-columns:repeat(2,1fr);
        grid-gap:2rem;
        align-items:center;
        font-size:2rem;
        padding: 2.5rem;
        
    }
`

function FirstTabContent() {
    return (
        <TabContentContainer>
            <div className="container">
                <div className="tab-content">
                    <div>
                        <span style={{ marginBottom: '2rem' }}>
                            Dolore sit sadipscing diam ipsum at stet invidunt duo justo. Ipsum sit amet ea labore no tempor ea, dolor sed.
                    </span>
                        <br />
                        <Button style={{ marginTop: '2rem' }}>
                            Try it now.
                    </Button>
                    </div>
                    <img src={Tab1Img} alt="First tab"/>
                </div>
            </div>
        </TabContentContainer>
    )
}

export default FirstTabContent;
