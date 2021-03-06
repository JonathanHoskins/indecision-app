class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    
    //Adds 1 to the count
    handleAddOne() {
        
        this.setState((prevState) => {
            return {
                count: prevState.count +1
            };
        });
        console.log('handleAddOne');
    }

    handleMinusOne() {
        
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            };
        });
        console.log('handleMinusOne');
    }

    handleReset() {
        
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}




// Create three methods: handleAddOne, handleMinusOne, handleReset
// Use console.log to print method name
// Wire up onClick & bind in the constructor

ReactDOM.render(<Counter />, document.getElementById('app'));



// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };

// const resetOne = () => {
//     count = 0;
//     renderCounterApp();
// };

// // Challenge
// // Make button with text "-1" - setup minusOne function and register as onClick handler - log "minusOne"
// // Make reset button with text "Reset" - setup resetFunction - log reset when button clicked



// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={resetOne}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
    
// };

// renderCounterApp();