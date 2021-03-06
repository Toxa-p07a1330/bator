import React, {useState} from 'react'
import {MyContext} from "./Context";
let Agreemnets = ()=>{
    const [data, setData] = useState({isLoaded: false});
    let wayToApi = "http://localhost:3001/select%20*%20from%20studagreement join students where students.id = studagreement.studentId";
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
                <div style={style}>ФИО</div>
                <div style={style}>Дата</div>
            </div>
            {data.map((value)=>{
                return <div>
                    <div style={style}>{value.fio}</div>
                    <div style={style}>{value.date}</div>
                </div>
            })}
        </div>

    }
}
let style = {
    display: "inline-block",
    width: "15%",
    paddingTop:"1%"

}
export default Agreemnets
