
let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const resetOne = () => {
    count = 0;
    renderCounterApp();
};

// Challenge
// Make button with text "-1" - setup minusOne function and register as onClick handler - log "minusOne"
// Make reset button with text "Reset" - setup resetFunction - log reset when button clicked



const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={resetOne}>Reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
    
};

renderCounterApp();