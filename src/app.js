console.log("App.js is running");

//Create app object title/subtitle
//Use title/subtitle in the template
//Render template

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['one', 'two']
};

const template = (
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

function getLocation (location) {
    if (location){
        return <p>Location: {location}</p>;
    }
};

const user = {
    name: 'Jon',
    age: 30,
    location: 'Chattanooga'
};


const userName = 'Jon';
const userAge = 30;
const userLocation = 'Chattanooga';



const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
