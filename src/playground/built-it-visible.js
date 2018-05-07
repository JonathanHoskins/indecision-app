let Visibility = false;

const toggleVisibility = () => {
    Visibility = !Visibility;
    render();
};

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {Visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {Visibility && (
                <div>
                    <p>Hey. These are some details you now see!</p>
                </div>
            )}
        </div>
    );
    
    ReactDOM.render(jsx, document.getElementById('app'));
}

render();