console.log("App.js is running");

//Create app object title/subtitle
//Use title/subtitle in the template
//Render template

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderOptions();
    }
};

// Create remove all button above list
// on click => wipe array and re-render

const reset = () => {
    app.options = [];
    renderOptions();
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const renderOptions = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={reset}>Reset All</button>
            {
                numbers.map((number) => {
                    return <p key={number}>Number: {number}</p>;
                })
            }
            <ol>
                {/* Map over app.options getting back an array of li */}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
                {
                    app.options.map((option) => {
                        return <p key={option}>Option: {option}</p>;
                    })
                }
            </form>
        </div>
    );
ReactDOM.render(template, appRoot);
}



renderOptions();