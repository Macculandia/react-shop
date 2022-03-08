/*
Tipos de componentes en React: stateful vs. stateless
Clase 14/29
Este es un ejemplo para useState, podemos darle un valor inicial,
el cual puede ser cambiado por un evento que se puede asignar a este 
mismo componente, o a otros componentes y hasta pasarlo por medio de 
un hijo para que éste cambie el inicial.
Para poder usar componentes stateful es necesario llamar useState 
desde React, la forma de importarlo y usarlo es la siguiente:
*/
/*
import React, { useState } from 'react';

const Button = () => {
    const [name, setName] = useState('Hola Mundo'); 
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
}
*/
/*
Los componentes stateless servirán para pasar un estilo visual o props,
pero no tendrá otra función más que esa.
Este sería un componente sin estado, stateless.
*/
/*
import React from 'react';

const Button = ({ text }) => <ButtonRed text={text}/>;

//También esta forma es válida:

import React from 'react';

const Button = () => (
        <div>
            <h1>Hola mundo!</h1>
        </div>
);
*/
/*
Es por eso que hay que tener presente que NO todos los componentes deben
de tener estado y muchos de ellos sólo llevarán información que presentar
directamente al HTML con CSS, pero sí serán parte de todo lo que se está 
construyendo.
Los componentes Stateful y Stateless, son los componentes más utilizados 
hoy en día. También hay otro tipos de componentes, que están compuestos 
por clases.
Aquí, tendremos una clase, con el nombre que queramos, que extiende de 
React.Component
*/
/*
import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello world! </h1>
            </div>
        )
    }
}
*/
/*
Aunque, si importamos React Component, desde un inicio, podemos 
simplemente escribirlo de esta forma:
*/
/*
import React , { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello world! </h1>
            </div>
        )
    }
}
*/
/*
Este tipo de componentes trabajan con constructores, aunque ya no son tan
usados, pues han sido reemplazados por la propuesta de React Hooks.
*/
/*
import React , { Component } from 'react';

class App extends Component {

    constructor() {
        super();
        this.sate = {
            count: 0
        };
    }

    render() {
        return (
            <div>
                <h1>Hello world! </h1>
            </div>
        )
    }
}
*/
/*
Es importante conocer este tipo de componentes porque si en algún momento 
tenemos que dar mantenimiento a alguna página que fue construida hace 
unos años atrás, es muy posible que nos encontremos este tipo de 
componentes.
Los hooks, tienen una funcionalidad particular, pues reciben un 
componente, extienden su funcionalidad con lo que esté dentro del 
componente y retornan un componente compuesto. Así podemos 
tener funcionalidades muy específicas con las que podemos trabajar 
según nuestras necesidades.

Esta sería la sintaxis:
*/
/*
import React , { Component } from 'react';

function ComponentWrapper(WrapperComponent) {
    class Wrapper extends Component {
        render () {
            return <WrapperComponent {...this.props} />;
        }
    }

    return Wrapper;
}
/*
//Más adelante aprenderemos más sobre React Context y cómo usarlo.