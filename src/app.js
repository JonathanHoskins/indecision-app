console.log("App.js is running");

//Create app object title/subtitle
//Use title/subtitle in the template
//Render template

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
};

var templateThree = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
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
        <h1>{user.name}</h1>
        <p><b>Age:</b> {user.age}</p>
        <p><b>Location:</b> {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateThree, appRoot);
