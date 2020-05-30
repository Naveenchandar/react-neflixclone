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
        top: '210%',
        display: 'flex',
        alignItems: 'flex-end',
        left: '23%',
        width: '20%',
        background: 'black',
        border: '2px solid grey',
        borderRadius: '0.75em',
        padding: '0.5em 0.75em'
    }
    return (
        <section className="mobilesection">
            <div className="second-tab">
                <div className="tab-two-img">
                    <div className="mobile-img">
                        <img alt="" class="story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
                    </div>
                    <div className="box" style={boxStyle}>
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />
                        <div className="animationText">
                            <div className="text-1">&ensp;&ensp;&ensp;Stranger Things</div>
                            <div className="text-2" style={{color:'#0071eb'}}>&ensp;&ensp;&ensp;Downloading...</div>
                        </div>
                    </div>
                </div>
                <div className="tab-two-content">
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
