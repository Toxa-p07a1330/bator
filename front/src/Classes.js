import React, {useState} from 'react'
import {MyContext} from "./Context";
let Classes = ()=>{

    const [data, setData] = useState({isLoaded: false});
    let wayToApi = "http://localhost:3001/select%20*%20from%20class";
    if (!data.isLoaded){
        fetch(wayToApi).then(
            (reposnse)=>{
                reposnse.json().then((json)=>{
                    let newState = json;
                    console.log(json)
                    newState.isLoaded = true;
                    setData(newState);
                })
            },
            (reject)=>{
                console.log(reject)
            }
        )
        return <div>Loading</div>
    }
    else {
        let localData = {...data};
        delete localData.isLoaded;
        return <div>
            <div>

                <div style={style}>Комментарий</div>
                <div style={style}>Создана</div>
                <div style={style}>Обновлена</div>
            </div>
            <div>{
                data.map((value)=>{
                    return <div>
                        <div style={style}>{value.comment}</div>
                        <div style={style}>{value.created}</div>
                        <div style={style}>{value.refreshed}</div>
                    </div>
                })
            }</div>
        </div>

    }

}
let style = {
    display: "inline-block",
    width: "15%",
    paddingTop:"1%"

}
export default Classes
