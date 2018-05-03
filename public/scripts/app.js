'use strict';

console.log("App.js is running");

//Create app object title/subtitle
//Use title/subtitle in the template
//Render template

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderOptions();
    }
};

// Create remove all button above list
// on click => wipe array and re-render

var reset = function reset() {
    app.options = [];
    renderOptions();
};

var appRoot = document.getElementById('app');

var numbers = [55, 101, 1000];

var renderOptions = function renderOptions() {
    var template = React.createElement(
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
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Reset All'
        ),
        numbers.map(function (number) {
            return React.createElement(
                'p',
                { key: number },
                'Number: ',
                number
            );
        }),
        React.createElement('ol', null),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            ),
            app.options.map(function (option) {
                return React.createElement(
                    'p',
                    { key: option },
                    'Option: ',
                    option
                );
            })
        )
    );
    ReactDOM.render(template, appRoot);
};

renderOptions();
