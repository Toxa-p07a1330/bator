import  React from 'react'
import Context, {MyContext} from "./Context";
import Content from "./Content";
import Header from "./Header";
import Menu from "./Menu";
class App extends React.Component{
    constructor() {
        super();
        this.state  ={
            isLoaded: false,
            film: null,
            hall: null,
            place: null,
            price: null,
            ticket: null,
            schedule: null,
        }


    }
    render() {
        return (<div style={{backgroundColor: "#f5f5dc", color: "#black", minHeight: "100vh"}}>
                {(()=>{

                    return (
                        <div>
                            <MyContext.Consumer>
                                {(context)=>{
                                    context.setData(this.state)
                                    return (
                                        <div>
                                            <Header/>
                                            <Menu/>
                                            <Content/>
                                    </div>)
                                }}
                            </MyContext.Consumer>
                        </div>
                    )
                })()}
            </div>
        )

    }
}

export default App;
