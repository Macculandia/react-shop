# React :electron:

-   Apuntes

    -   JSX se refiera a Javascript XML. Nos permite escribir html dentro de Javascript. React no requiere usar JSX, sin embargo la lógica detrás de los componentes, promueven el uso del mismo, porque usamos unidades lógicas centralizadas. En cambio, si tuviéramos diferentes archivos para separar el html y el JS, se perdería la utilidad.

    -   Virtual DOM es un concepto precioso de React. El virtual DOM es una copia en memoria del DOM normal del navegador. Pero ¿por qué hacer una copia? Bueno, cuando el UI cambia de estado, normalmente el DOM es muy lento. Sin embargo, virtual DOM es extremadamente rápido. Lo que ocurre es que primero, todo se computa en el virtual DOM, se actualiza por completo el virtual DOM (a pesar de que se re-renderiza el virtual DOM, no afecta el rendimiento porque primero no se tiene que mostrar gráficamente y realmente es muy rápido) y realiza el proceso de diff que compara ambos DOM para después igualar o “reconciliar” ambos UI y cambiar el aspecto de la manera más corta y rápida posible.

    -   Ciclo de vida se refiere al proceso de cuando los componentes son creados, actualizados y eliminados. O de otra manera ⇒ nacen, crecen y mueren.

    -   Estado son los datos que están dentro del componente. Estos pueden ser actualizados usando diferentes métodos. Los estados son muy importantes en React, pues son encargados de actualizarse cada vez que se cambian, afectando a los demás nodos del virtual DOM.

    -   Eventos los componentes, pueden configurarse con eventos como onclick para responder antes ciertas interacciones con el usuario, tal como los haríamos en Html

    -   React Hooks es otra manera de escribir los componentes con estado, si usar clases. No se pretenden reemplazar, sin embargo, usar funciones para los componentes pueden facilitar el entendimiento de la aplicación.

## Instalación de React y React Dom

1.  En el cmd
2.  Crear carpeta con mkdir
3.  Ingresar a la carpeta
4.  Inicializar repo - git init
5.  npm init y configurar el proyecto
6.  Instalamos las dependencias
7.  npm install react react-dom
8.  code - Abrir VSCODE
9.  Creamos Carpeta SRC (se creará el codigo)
10. Creamos Carpeta public (archivos públicos)
11. Dentro de public y de src creamos index.js
12. Dentro src creamos carpeta componentes
13. Dentro de components creamos archivos App.jsx
14. En el archivo App.jsx
    import React from 'react'
    const App = () => {
    return(
    <h1> Hola Mundo </h1>
    );
    }
    export default App;

15. En el archivo index.js de la carpeta src
    import React from 'react'
    import ReactDOM from 'react-dom'
    ReactDOM.render(<App />, document.getElementById(app))
