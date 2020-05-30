import React from 'react';
import '../Css/FirstTab.css';
import '../Css/ThirdTab.css';

function NewThirdTab() {
    const videostyle = {
        position: 'absolute',
        right: '203px',
        width: '326px',
        // paddingTop: '88px',
        top:'113rem'
    }
    return (
        <section className="desktopsection">
            <div className="third-tab">
                <div className="tab-three-content">
                    <h1>
                    Watch everywhere.
                </h1>
                    <h2>
                    Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                </h2>
                </div>
                <div className="tab-three-img">
                    <div className="desktopthree-img">
                        <img alt="" class="story3-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" />
                    </div>
                    <div className="desktop-player">
                        <video class="our-story-card-video" autoplay="" playsinline="" muted="" loop="" style={videostyle}>
                            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewThirdTab;
