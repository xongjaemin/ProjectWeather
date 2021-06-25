import React,{Component} from 'react';
import axios from 'axios';
import './App.css';

class PerfomImage extends Component{
    constructor(props){
        super(props);
        this.state= {poster1:'',poster2:'',poster3:'',loading:true}
    }

    componentDidMount(){
        const url = 'http://openapi.seoul.go.kr:8088/6f475a42696c6a6e3935754a6a564a/json/culturalEventInfo/1/5/';

        axios.get(url).then(responseData => {
            console.log(responseData);
            const data = responseData.data
                this.setState({
                    poster1: data.culturalEventInfo.row[0].MAIN_IMG,
                    poster2: data.culturalEventInfo.row[1].MAIN_IMG,
                    poster3: data.culturalEventInfo.row[2].MAIN_IMG,
                  
                    loading: false
                });
        })
        .catch(error => console.log(error));
    }

    render(){
        const imgSrc1 = this.state.poster1;
        const imgSrc2 = this.state.poster2;
        const imgSrc3 = this.state.poster3;
        if(this.state.loading){
            return <p>Loading</p>;
        }
        else{
            return(
            <div className="App">
                <br/>
                <div className="movieimgContainer">
                <img src={imgSrc1} className="performanceImg"/>
                <img src={imgSrc2} className="performanceImg"/>
                <img src={imgSrc3} className="performanceImg"/>
                </div>
                
            </div>);
        }
    }
}

export default PerfomImage;