import React,{Component} from 'react';
import axios from 'axios';
import './App.css';

class Dust extends Component{
    constructor(props){
        super(props);
        this.state= {dust1:0,dust2:0,much:'',loading:true}
    }

    componentDidMount(){
        const url = 'http://openAPI.seoul.go.kr:8088/6f475a42696c6a6e3935754a6a564a/json/RealtimeCityAir/1/5/';

        axios.get(url).then(responseData => {
            console.log(responseData);
            const data = responseData.data
                this.setState({
                    dust1: data.RealtimeCityAir.row[0].PM10,
                    dust2: data.RealtimeCityAir.row[0].PM25,
                    much: data.RealtimeCityAir.row[0].IDEX_NM,
                    loading: false
                });
        })
        .catch(error => console.log(error));
    }

    render(){
        if(this.state.loading){
            return <p>Loading</p>;
        }
        else{
            return(
            <div className="App">
                <p>미세먼지 : {this.state.dust1}</p>
                <p>초미세먼지 : {this.state.dust2}</p>
                <p>미세먼지 농도 : {this.state.much}</p>
            </div>);
        }
    }
}

export default Dust;