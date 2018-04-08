'use strict';

console.log("App.js is running");

//Create app object title/subtitle
//Use title/subtitle in the template
//Render template

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['one', 'two']
};

var templateThree = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
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
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    user.location ? React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    ) : 'No location found'
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
