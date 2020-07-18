import React, { Component } from 'react';

class Joke extends Component {
    state = { joke: {} };

    componentWillMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(json => this.setState({joke: json }))
        .catch(error => alert(error.message));
    }

    render() {
        const { setup, punchline } = this.state.joke;

        return (
            <div>
                {/* <Header /> */}
                <h2>Vai uma piada aí?</h2>
                <p>{setup} <em>{punchline}</em></p>
            </div>
        )
    }
}

export default Joke;