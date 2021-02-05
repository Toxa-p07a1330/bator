import React, {useState} from 'react'
let Students = ()=>{

    const [data, setData] = useState({isLoaded: false});
    let wayToApi = "http://localhost:3001/select%20*%20from%20students join groups where students.groupId = Groups.id";
    if (!data.isLoaded){
        fetch(wayToApi).then(
            (reposnse)=>{
                reposnse.json().then((json)=>{
                    let newState = json;
                    console.log(json)
                    newState.isLoaded = true;
                    setData(newState);
                    console.log(newState)
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
                <div style={style} >Снилс</div>
                <div style={style}>Группа</div>
                <div style={style}>Паспорт</div>
                <div style={style}>Контактные данные</div>
            </div>
            <div>
                {data.map((value)=>{
                    return <div>
                        <div style={style}>{value.fio}</div>
                        <div style={style}>{value.address}</div>
                        <div style={style} >{value.snils}</div>
                        <div style={style}>{value.name}</div>
                        <div style={style}>{value.passport}</div>
                        <div style={style}>{value.contact}</div>
                    </div>
                })}
            </div>
        </div>
    }
};
let style = {
    width:"12%",
    display:"inline-block",
    paddingTop:"1%"
}
export default Students;
