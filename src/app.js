console.log("App.js is running");

//Create app object title/subtitle
//Use title/subtitle in the template
//Render template

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['one', 'two']
};

var templateThree = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item one</li>
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

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age  && user.age >= 18) && <p>Age: {user.age}</p>}
        {user.location ? <p>Location: {user.location}</p> : 'No location found'}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
