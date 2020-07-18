import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/profile.png';
import Title from './Title';

class App extends Component {
    state = {displayBio: false};

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        console.log('render do App.');
        return (
            <div>
                <img src={profile} alt='Profile image' className='profile'/>
                <h1>Olá!</h1>
                <p>Meu nome é Elton!</p>
                <p>Este é o meu primeiro app de exemplo para o treinamento de react!</p>
                <Title /> 
                {
                this.state.displayBio ? (
                    <div>
                    <p>Eu moro em Blumenau/SC e trabalho na Linx Sistemas.</p>
                    <p>A minha linguagem de programação favorita é JavaScript, e eu acho React.js incrível!</p>
                    <p>Além de programar, eu também gosto de ouvir música!</p>
                    <button onClick={this.toggleDisplayBio}>Ver menos</button>
                    </div>
                ) : (
                    <div>
                    <button onClick={this.toggleDisplayBio}>Ver mais</button>
                    </div>
                )
                }

                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;