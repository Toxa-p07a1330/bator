import React, {useState} from 'react'
import {MyContext} from "./Context";
let Tutors = ()=>{

    const [data, setData] = useState({isLoaded: false});
    let wayToApi = "http://localhost:3001/select%20*%20from%20tutor";
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
                <div style={style}>Адрес</div>
                <div style={style} >Образование</div>
                <div style={style}>Оклад</div>
                <div style={style}>Паспорт</div>
                <div style={style}>Контактные данные</div>
            </div>
            <div>
                {data.map((value)=>{
                    return <div>
                        <div style={style}>{value.fio}</div>
                        <div style={style}>{value.address}</div>
                        <div style={style} >{value.Education}</div>
                        <div style={style}>{value.Salary}</div>
                        <div style={style}>{value.passport}</div>
                        <div style={style}>{value.contact}</div>
                    </div>
                })}
            </div>
        </div>
    }

}
let style = {
    width:"12%",
    display:"inline-block",
    paddingTop:"1%"
}
export default Tutors
