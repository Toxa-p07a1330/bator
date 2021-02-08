import React from 'react'
import {MyContext} from "./Context";
class Menu extends React.Component{
    render() {
        let  style = {
            display:"inline-block",
            width:"15vw",
            height:"!00%",
            left: "0",
            float:"left",
            textDecoration: "none",
            margin: "25px",
            position:"fixed",
            marginTop:"0"

        }
        return (
            <div style={style}>
                <MyContext.Consumer>
                    {()=>{
                        let styleLink = {
                            border: "1px solid white",
                            padding:"1%",
                            color:"black",
                            backgroundColor: "#bdb76b",
                            width: "100%    ",
                            display: "block",
                            marginLeft:"550%"
                        }
                        return (
                            <div style={{textAlign: "center", lineHeight: "2", paddingLeft:"3%"}}>
                                <a href={"/"} style={styleLink}>Главная</a><br/>
                                <a href={"/students"} style={styleLink}>Студенты</a><br/>
                                <a href={"/groups"} style={styleLink}>Группы</a><br/>
                                <a href={"/timetable"} style={styleLink}>Расписания</a><br/>
                                <a href={"/tutors"} style={styleLink}>Преподаватели</a><br/>
                                <a href={"/admin"} style={styleLink}>Панедь администратора</a><br/>
                                <a href={"/agreements"} style={styleLink}>Договора</a><br/>
                                <a href={"/classes"} style={styleLink}>Аудитории</a><br/>
                            </div>)
                    }}
                </MyContext.Consumer>
            </div>
        );
    }
}
export default Menu
