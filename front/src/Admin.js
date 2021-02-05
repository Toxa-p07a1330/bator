import React from 'react'
let Admin = ()=>{
    let style = {
        display: "inline-block",
        width: "80%",
        padding: "2%",
        marginTop:"10%",
        textAlign: "center",
        position:"absolute"
    }
    const password = "pass";
    const login = "admin";
    let putResponse = ()=>{
        let pass = document.getElementById("pass").value;
        let log = document.getElementById("login").value;

        if (!(log === login && password === pass)) {
            alert("Wrong pass")
            return null;
        }
        let request = "http://localhost:3001/" + document.getElementById("input").value;
        fetch(request).then(
            response=>{
                response.text().then(
                    text =>{
                        document.getElementById("response").innerHTML=text
                        console.log(JSON.stringify(text))
                    },
                    reason => {
                        document.getElementById("response").innerHTML=JSON.stringify(reason);
                        console.log(JSON.stringify(reason))
                    }
                )
            },
            reason => {
                document.getElementById("response").innerHTML=JSON.stringify(reason);
                console.log(JSON.stringify(reason))
            }
        )
    }
    return <div style={style}>
        <div>Логин админимстратора</div>
        <input type={"text"} id={"login"}/>
        <br/>
        <div>Пароль админимстратора</div>
        <input type={"text"} id={"pass"}/>
        <br/>
        Поле ввода команд для администратора<br/>
        <input type={"text"} id={"input"}/><br/>
        <button onClick={()=>{putResponse()}}>Выполнить</button><br/>
        <div id={"response"}> </div>
    </div>
}
export default Admin
