import React from 'react';
import Button from './Button';
import styled from 'styled-components';
import ImgTv from '../images/tab-tv.png';
import ImgTablet from '../images/tab-tablet.png';
import ImgMacBook from '../images/tab-macbook.png';

const TabContainer = styled.div`
    background: var(--main-deep-dark);

    .tab-content{
        margin: 0 15%;
    }

    .tab-top-content{
        display:grid;
        grid-template-columns:repeat(12,1fr);
        justify-content: center;
        align-items:center;
        padding :2.5rem 0;
    }

    span{
        grid-column:1/8;
    }

    .btn{
        margin: 0 1.25rem 1.25rem;
        grid-column: 10/12;
    }

    /* Tab bottom content */
    .tab-bottom-content{
        display:grid;
        grid-template-columns:repeat(3,1fr);
        grid-gap:2rem;
        text-align:center;
        margin-top:2rem;
    }

    h3{
        margin: 0.5rem 0;
    }

    p{
        color:var(--main-grey);
    }

`;
function SecondTabContent() {
    return (
        <TabContainer>
            <div className="tab-content">
                <div className="tab-top-content">
                    <span style={{ fontSize: '1.5rem' }}>
                        Vero ipsum ea sit voluptua invidunt no dolor diam duo, aliquyam et vero est duo, labore sit vero lorem et.
                    </span>
                    <Button className="btn">
                        Try it now
                    </Button>
                </div>
                {/* Tab content */}
                <div className="tab-bottom-content">
                    <div>
                        <img src={ImgTv} style={{ width: '18.75rem' }} alt="Tv"/>
                        <h3>Watch on your TV</h3>
                        <p>Amet clita lorem eirmod dolor amet invidunt tempor voluptua stet. Dolore consetetur accusam sanctus elitr. Amet lorem ipsum sea sed,.</p>
                    </div>
                    <div>
                        <img src={ImgTablet} style={{ width: '18.75rem', paddingTop: '0.625rem' }} alt="Tablet" />
                        <h3>Watch on your TV</h3>
                        <p>Amet clita lorem eirmod dolor amet invidunt tempor voluptua stet. Dolore consetetur accusam sanctus elitr. Amet lorem ipsum sea sed,.</p>
                    </div>
                    <div>
                        <img src={ImgMacBook} style={{ width: '18.75rem', paddingTop: '0.625rem', paddingBottom: '0.625rem' }} alt="Mac"/>
                        <h3>Watch on your TV</h3>
                        <p>Amet clita lorem eirmod dolor amet invidunt tempor voluptua stet. Dolore consetetur accusam sanctus elitr. Amet lorem ipsum sea sed,.</p>
                    </div>
                </div>
            </div>
        </TabContainer>
    )
}

export default SecondTabContent;
