import React, {useState} from 'react'
import {MyContext} from "./Context";
let Timetables = ()=>{

    const [data, setData] = useState({isLoaded: false});
    let wayToApi = "http://localhost:3001/select * from timetable join tutor join groups join class "+
        "where timetable.groupdId = groups.id and timetable.tutorId = tutor.id and timetable.classId = class.id";
    console.log(wayToApi)
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
            <div style={{display: "block", marginLeft:"20%"}}>
                <div style={style}>Группа</div>
                <div style={style}>Препод</div>
                <div style={style}>Предмет</div>
                <div style={style}>Класс</div>
                <div style={style}>Время</div>
            </div>
            <div>{
                data.map((value)=>{
                    return <div style={{display: "block", marginLeft:"20%"}}>
                        <div style={style}>{value.name}</div>
                        <div style={style}>{value.fio}</div>
                        <div style={style}>{value.subject}</div>
                        <div style={style}>{value.comment}</div>
                        <div style={style}>{value.time}</div>
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
export default Timetables
