import React from 'react';
import '../Css/FirstTab.css';
import '../Css/ThirdTab.css';

function NewFirstTab() {
    const videostyle = {
        position: 'absolute',
        right: '409px',
        width: '326px',
        paddingTop: '88px',
        top:'112rem'
    }
    return (
        <section className="tvsection">
            <div className="first-tab">
                <div className="tab-one-content">
                    <h1>
                    Watch everywhere.
                </h1>
                    <h2>
                    Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                </h2>
                </div>
                <div className="tab-three-img">
                    <div className="tvthree-img">
                        <img alt="" class="story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" />
                    </div>
                    <div className="tv-player">
                        <video class="our-story-card-video" autoplay="" playsinline="" muted="" loop="" style={videostyle}>
                            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewFirstTab;
