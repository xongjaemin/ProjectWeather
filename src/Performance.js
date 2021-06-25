import React,{Component} from 'react';
import axios from 'axios';
import './App.css';

class Perfomance extends Component{
    constructor(props){
        super(props);
        this.state= {title:'',poster:'',genre:'',place:'',loading:true}
    }

    componentDidMount(){
        const url = 'http://openapi.seoul.go.kr:8088/6f475a42696c6a6e3935754a6a564a/json/culturalEventInfo/1/5/';

        axios.get(url).then(responseData => {
            console.log(responseData);
            const data = responseData.data
                this.setState({
                    title: data.culturalEventInfo.row[0].TITLE,
                    poster: data.culturalEventInfo.row[0].MAIN_IMG,
                    genre: data.culturalEventInfo.row[0].CODENAME,
                    place: data.culturalEventInfo.row[0].PLACE,
                    loading: false
                });
        })
        .catch(error => console.log(error));
    }

    render(){
        const imgSrc = this.state.poster;
        if(this.state.loading){
            return <p>Loading</p>;
        }
        else{
            return(<div className="App">
                <p>제목 : {this.state.title}</p>
                <p>장르 : {this.state.genre}</p>
                
            </div>);
        }
    }
}

export default Perfomance;