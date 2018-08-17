//visibility toggle - render, constructor, handleToggleVisibility
//visibility -> false

class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility(){
        alert('working');
    }
    
    render(){
        const jsx = (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={handleToggleVisibility}>
                    {Visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {Visibility && (
                    <div>
                        <p>Hey. These are some details you now see!</p>
                    </div>
                )}
            </div>
        );
        
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
// let Visibility = false;

// const toggleVisibility = () => {
//     Visibility = !Visibility;
//     render();
// };

// const render = () => {
    // const jsx = (
    //     <div>
    //         <h1>Visibility Toggle</h1>
    //         <button onClick={toggleVisibility}>
    //             {Visibility ? 'Hide Details' : 'Show Details'}
    //         </button>
    //         {Visibility && (
    //             <div>
    //                 <p>Hey. These are some details you now see!</p>
    //             </div>
    //         )}
    //     </div>
    // );
    
//     ReactDOM.render(jsx, document.getElementById('app'));
// }

