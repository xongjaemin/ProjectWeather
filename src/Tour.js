import React,{Component} from 'react';
import axios from 'axios';
import './App.css';

class Tour extends Component{
    constructor(props){
        super(props);
        this.state= {name:'',address:'',date:'',tag:'',loading:true}
    }

    componentDidMount(){
        const rand = Math.random();
        let i = parseInt(rand*44);
        const url = 'http://openapi.seoul.go.kr:8088/6f475a42696c6a6e3935754a6a564a/json/TbVwAttractions/147/191/';

        axios.get(url).then(responseData => {
            console.log(responseData);
            const data = responseData.data
                this.setState({
                    name: data.TbVwAttractions.row[i].POST_SJ,
                    address: data.TbVwAttractions.row[i].ADDRESS,
                    date: data.TbVwAttractions.row[i].CMMN_BSNDE,
                    tag: data.TbVwAttractions.row[i].TAG,
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
                <br/>
                <p>장소 : {this.state.name}</p>
                <p>주소 : {this.state.address}</p>
                <p>운영요일 : {this.state.date}</p>
                <p>#{this.state.tag}#</p>
            </div>);
        }
    }
}

export default Tour;