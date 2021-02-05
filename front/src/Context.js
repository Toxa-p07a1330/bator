
import  React from 'react'
const MyContext = React.createContext();
class Context extends React.Component{


    constructor() {
        super();
        this.state = {
            isLoaded: false,
            data :{},
            setData: (data)=>{
                if (this.state.isLoaded)
                    return null;
                let newState = this.state;
                newState.data = data;
                newState.isLoaded = true;
                this.setState(newState);
                console.log(this.state)
                console.log(111)
            }
        }

    }
    render() {
        return (
    <MyContext.Provider value = {this.state}>
        {this.props.children}
    </MyContext.Provider>
        )
    }
}
export default Context
export {MyContext}