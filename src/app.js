console.log("App.js is running");

//Create app object title/subtitle
//Use title/subtitle in the template
//Render template

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['one', 'two']
};

var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: 'Jon',
    age: 30,
    location: 'Chattanooga'
};


var userName = 'Jon';
var userAge = 30;
var userLocation = 'Chattanooga';



var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
