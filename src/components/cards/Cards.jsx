import React, { useState } from 'react';
import './Cards.scss';
import { CardsData } from './CardsData';

import ReactCardFlip from 'react-card-flip';

import TwitterIcon from '../../assets/img/icon-twitter.svg';
import LinkedinIcon from '../../assets/img/icon-linkedin.svg';
import CrossIcon from '../../assets/img/icon-cross.svg';
import CloseIcon from '../../assets/img/icon-close.svg';
import AboutPattern from '../../assets/img/bg-pattern-about-2-contact-1.svg';
import Pattern from '../../assets/img/bg-pattern-home-4-about-3.svg';

const Cards = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const flipCard = () => setIsFlipped(!isFlipped);

    return (
        <section className='cards'>
            <div className='container cards_container'>
                <h2>Meet the directors</h2>
                <div className='cards_cards'>
                    {CardsData.map(item => (
                        <div className='card' key={item.key}>
                            <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
                                <figure className='card_front'>
                                    <img src={item.img} alt='myteam Nikita' className='card_avatar' />
                                    <h4>{item.name}</h4>
                                    <h5><em>{item.job}</em></h5>
                                    <div className={ isFlipped ? 'card_rotate active' : 'card_rotate' } onClick={flipCard}>
                                        <img src={ isFlipped ? CloseIcon : CrossIcon } alt='myteam cross' />
                                    </div>
                                </figure>
                                <figure className='card_back'>
                                    <h4>{item.name}</h4>
                                    <p>"{item.desc}"</p>
                                    <div className='card_social'>
                                        <img src={TwitterIcon} alt='twitter' />
                                        <img src={LinkedinIcon} alt='linkedin' />
                                    </div>
                                    <div className={ isFlipped ? 'card_rotate active' : 'card_rotate' } onClick={flipCard}>
                                        <img src={ isFlipped ? CloseIcon : CrossIcon } alt='myteam cross' />
                                    </div>
                                </figure>
                            </ReactCardFlip>
                        </div>
                    ))}
                </div>
                <img src={AboutPattern} alt='myteam about pattern' className='cards_patternleft' />
                <img src={Pattern} alt='myteam about pattern' className='cards_pattern' />
            </div>
        </section>
    )
}

export default Cards;