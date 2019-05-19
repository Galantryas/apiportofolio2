import React from 'react';
import './Text.scss';

class Home extends React.Component{
    render(){
        return(
        <div class="content">
            <div class="content__container">
                <p class="content__container__text">
                    Good
                </p>
        
                    <ul class="content__container__list">
                        <li class="content__container__list__item">Morning !</li>
                        <li class="content__container__list__item">Afternoon !</li>
                        <li class="content__container__list__item">Evening !</li>
                        <li class="content__container__list__item">Night !</li>
                    </ul>
            </div>
        </div>
        )
    }
}

export default Home;