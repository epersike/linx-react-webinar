import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/App';
import Jokes from './components/Jokes';
import Header from './components/Header';
import EvensOrOdds from '../projects/evens-or-odds/src';

import './index.css';

// Component Router vai encapsular a nossa aplicação
// Em seguida, o componente Switch vai encapsular os nossos componentes
// Por fim, um componente Route irá receber as props com o endereço (path) 
// e o componente a ser renderizado naquele endereço (component)
ReactDom.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' render={() => <Header><App /></Header>}></Route>
            <Route path='/jokes' render={() => <Header><Jokes /></Header>}></Route>
            <Route path='/evens-or-odds' render={() => <Header><EvensOrOdds /></Header>}></Route>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));

// new Promise((resolve, reject) => {
//     setTimeout( () => {
//         console.log('ho1');
//         reject();
//     }, 2000);
// }).then(() => {
//     console.log('ho2');
//     console.log('ho3');
// }, () => {
//     console.log('Um erro aconteceu!')
// })



// class Animal {
//     constructor (nome) {
//         this.nome = nome;
//     }

//     falar() {
//         console.log("Olá, eu sou", this.nome);
//     }
// }

// const a = new Animal("Simba")
// a.falar();
// console.log(a);

// class Humano extends Animal {
//     constructor (nome, idade, cabelo) {
//         super(nome);
//         this.idade = idade;
//         this.cabelo = cabelo;
//     }

//     apresentar() {
//         console.log("Eu tenho", this.idade, "anos de idade e meu cabelo é", this.cabelo);
//     }
// }

// const humano1 = new Humano("Elton", "30", "Loiro");
// humano1.falar();
// humano1.apresentar();
// console.log(humano1);