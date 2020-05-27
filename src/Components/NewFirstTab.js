import React from 'react';
import '../Css/FirstTab.css'

function NewFirstTab() {
    const videoStyle = {
        position: 'absolute',
        right: '377px',
        width: '388px',
        paddingTop: '80px',
        top:'53.75rem'
    }
    return (
        <section className="tvsection">
            <div className="first-tab">
                <div className="tab-one-content">
                    <h1>
                        Enjoy on your TV.
                </h1>
                    <h2>
                        Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
                </h2>
                </div>
                <div className="tab-one-img">
                    <div className="tv-img">
                        <img alt="" class="story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
                    </div>
                    <div className="tv-player">
                        <video class="our-story-card-video" autoplay="" playsinline="" muted="" loop="" style={videoStyle}>
                            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewFirstTab;
