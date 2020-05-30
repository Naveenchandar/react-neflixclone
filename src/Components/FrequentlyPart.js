import React, { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/icomoon/plus';
import { minus } from 'react-icons-kit/icomoon/minus'
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';
import '../Css/FrequentPart.css';

function FrequentlyPart() {
    const [IsExpanded, setIsExpanded] = useState(true);
    const [IsExpanded2, setIsExpanded2] = useState(true);
    const [IsExpanded3, setIsExpanded3] = useState(true);
    const [IsExpanded4, setIsExpanded4] = useState(true);
    const [IsExpanded5, setIsExpanded5] = useState(true);
    const ToggleItem = () => {
        setIsExpanded(!IsExpanded)
    }
    const Toggle2Item = () => {
        setIsExpanded2(!IsExpanded2)
    }
    const Toggle3Item = () => {
        setIsExpanded3(!IsExpanded3)
    }
    const Toggle4Item = () => {
        setIsExpanded4(!IsExpanded4)
    }
    const Toggle5Item = () => {
        setIsExpanded5(!IsExpanded5)
    }
    return (
        <section className="FrequentPart">
            <>
                <h1> &ensp; &ensp;Frequently Asked Questions</h1>
                <Accordion allowZeroExpanded={true}>
                    <AccordionItem onClick={ToggleItem}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                What is Netflix??
                                {IsExpanded ?
                                    <Icon className="Icon PlusIcon" icon={plus} size={20} /> :
                                    <Icon className="Icon PlusIcon" icon={minus} size={20} />
                                }
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                                <br /><br />
                                You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!.
                        </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem onClick={Toggle2Item}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                How much does Netflix cost?
                                {IsExpanded2 ?
                                    <Icon className="Icon PlusIcon" icon={plus} size={20} /> :
                                    <Icon className="Icon PlusIcon" icon={minus} size={20} />
                                }
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.
                    </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem onClick={Toggle3Item}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Where can I watch?
                                {IsExpanded3 ?
                                    <Icon className="Icon PlusIcon" icon={plus} size={20} /> :
                                    <Icon className="Icon PlusIcon" icon={minus} size={20} />
                                }
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                                <br /><br />
                                You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                    </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem onClick={Toggle4Item}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                How do I cancel?
                                {IsExpanded4 ?
                                    <Icon className="Icon PlusIcon" icon={plus} size={20} /> :
                                    <Icon className="Icon PlusIcon" icon={minus} size={20} />
                                }
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                    </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem onClick={Toggle5Item}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                What can I watch on Netflix?
                                {IsExpanded5 ?
                                    <Icon className="Icon PlusIcon" icon={plus} size={20} /> :
                                    <Icon className="Icon PlusIcon" icon={minus} size={20} />
                                }
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                    </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                <div className="EmailDiv2">
                    <input type="email" name="email" placeholder="Email address" value="" autoComplete="email" maxLength="50" minLength="5" />
                    <label className='main-offer2-btn'>
                        TRY IT NOW
                    <Icon className="Icon" icon={ic_keyboard_arrow_right} size={37} />
                    </label>
                </div>
            </>
        </section>
    )
}

export default FrequentlyPart;
