'use strict';

console.log("App.js is running");

//Create app object title/subtitle
//Use title/subtitle in the template
//Render template

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
};

var templateThree = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item one'
        )
    )
);

var user = {
    name: 'Jon',
    age: 30,
    location: 'Chattanooga'
};

var userName = 'Jon';
var userAge = 30;
var userLocation = 'Chattanooga';

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        React.createElement(
            'b',
            null,
            'Age:'
        ),
        ' ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        React.createElement(
            'b',
            null,
            'Location:'
        ),
        ' ',
        user.location
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateThree, appRoot);
