import React from 'react';
import '../Css/FirstTab.css'
import '../Css/SecondTab.css'

function NewSecondTab() {
    const videoStyle = {
        position: 'absolute',
        right: '377px',
        width: '388px',
        paddingTop: '80px',
        top: '53.75rem'
    }
    const boxStyle={
        position: 'absolute',
        top: '200%',
        display: 'flex',
        alignItems: 'flex-end',
        left: '24%',
        width: '20%',
        background: 'black',
        border: '2px solid grey',
        borderRadius: '0.75em',
        padding: '0.5em 0.75em'
    }
    return (
        <section className="tvsection">
            <div className="first-tab">
                <div className="tab-one-img">
                    <div className="tv-img">
                        <img alt="" class="story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
                    </div>
                    <div className="box" style={boxStyle}>
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />
                        <div className="animationText">
                            <div className="text-1">&ensp;&ensp;&ensp;Stranger Things</div>
                            <div className="text-2" style={{color:'#0071eb'}}>&ensp;&ensp;&ensp;Downloading...</div>
                        </div>
                    </div>
                    <div className="tv-player">
                        <video class="our-story-card-video" autoplay="" playsinline="" muted="" loop="" style={videoStyle}>
                            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="tab-one-content">
                    <h1>
                        Download your shows to watch offline.
                </h1>
                    <h2>
                        Save your favourites easily and always have something to watch.
                </h2>
                </div>

            </div>
        </section>
    )
}

export default NewSecondTab;
