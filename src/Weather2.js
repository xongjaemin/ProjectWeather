import React,{Component} from 'react';
import axios from 'axios';
import './App.css';

class Weather2 extends Component{
    constructor(props){
        super(props);
        this.state= {temp:0,desc:'',icon:'',loading:true}
    }

    componentDidMount(){
        const url = 'http://api.openweathermap.org/data/2.5/forecast?id=1835847&appid=22dd2072f22f4aa7ec2101e5340c9a96&units=metric&lang=kr';

        axios.get(url).then(responseData => {
            console.log(responseData);
            const data = responseData.data
                this.setState({
                    temp: data.list[1].main.temp,
                    desc: data.list[1].weather[0].description,
                    icon: data.list[1].weather[0].icon,
                    loading: false
                });
        })
        .catch(error => console.log(error));
    }

    render(){
        const imgSrc = `http://openweathermap.com/img/w/${this.state.icon}.png`;
        if(this.state.loading){
            return <p>Loading</p>;
        }
        else{
            return(<div className="App">
                3시간 후<br/>
                <img src={imgSrc} className="currentIcon"/>
            </div>);
        }
    }
}

export default Weather2;