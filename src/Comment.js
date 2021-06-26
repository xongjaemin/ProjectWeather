import React,{Component} from 'react';
import axios from 'axios';
import './App.css';
import './Dust.js';

class Comment extends Component{
    constructor(props){
        super(props);
        this.state= {temp:0,desc:'',icon:'',loading:true, dust1:'', dust2:''}
    }

    componentDidMount(){
        const url = 'http://api.openweathermap.org/data/2.5/forecast?id=1835847&appid=22dd2072f22f4aa7ec2101e5340c9a96&units=metric&lang=kr';
        const url2 = 'http://openAPI.seoul.go.kr:8088/6f475a42696c6a6e3935754a6a564a/json/RealtimeCityAir/1/5/';

        axios.get(url).then(responseData => {
            console.log(responseData);
            const data = responseData.data
                this.setState({
                    temp: data.list[0].main.temp,
                    desc: data.list[0].weather[0].id,
                    icon: data.list[0].weather[0].icon,
                    loading: false
                });
        })
        axios.get(url2).then(responseData => {
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
        const temp = this.state.temp;
        const desc = this.state.desc;
        const dust1 = this.state.dust1;
        const dust2 = this.state.dust2;
        let tempComment = null;
        let descComment = null;
        let recommend = 0;
        let finalComment = null;
        let dust1Comment = null;
        let dust2Comment = null;
        if(this.state.loading){
            return <p>Loading</p>;
        }
        else{
            /*기온 코멘트*/
            if(temp>=30){
                tempComment = '너무 더워요!🥵';
                recommend += 2;
            }
            else if(temp<=-5){
                tempComment = '너무 추워요!🥶'
                recommend += 2;
            }
            
            /*날씨 코멘트*/
            if((desc>=200 && desc<=202) || (desc>=210 && desc<=212) || desc == 221 || (desc>=230 && desc<=232)){
                descComment = '뇌우가 발생했어요 ⛈️';
                recommend += 2;
            }
            else if((desc>=300 && desc<=302) || (desc>=310 && desc<=314) || desc == 321){
                descComment = '이슬비가 내려요 🌧️';
                recommend += 2;
            }
            else if((desc>=500 && desc<=504) || desc == 511 || (desc>=520 && desc<=522) || desc == 531 || desc == 771){
                descComment = '비가 내려요 🌧️';
                recommend += 2;
            }
            else if((desc>=600 && desc<=602) || desc == 615 || (desc>=611 && desc<=613) || desc == 616 || (desc>=620 && desc<=622)){
                descComment = '눈이 내려요 ❄️';
                recommend += 2;
            }
            else if(desc == 800){
                descComment = '맑아요 🌞';
            }
            else if(desc == 801 || desc == 802){
                descComment = '구름이 조금 꼈어요 ☁️';
            }
            else if(desc == 803 || desc == 804){
                descComment = '구름이 많이 꼈어요 ☁️';
                recommend += 1;
            }
            else if(desc == 701 || desc == 711 || desc == 721 || desc == 741){
                descComment = '안개가 꼈어요 🌫️';
                recommend += 1;
            }
            else if(desc == 731 || desc == 751 || desc == 761 || desc == 762){
                descComment = '먼지가 낀 날이에요 💨';
                recommend += 2;
            }
            else if(desc == 781){
                descComment = '태풍이 불어요 🌪️';
                recommend += 2;
            }

            /*미세먼지 코멘트*/
            if(dust1 > 80 && dust1 <= 100){
                dust1Comment = '미세먼지가 조금 나빠요';
                recommend += 1;
            }
            else if(dust1 > 100){
                dust1Comment = '미세먼지가 많이 나빠요';
                recommend += 2;
            }
            /*초미세먼지 코멘트*/
            if(dust2 > 35 && dust2 <= 50){
                dust2Comment = '초미세먼지가 조금 나빠요';
                recommend += 1;
            }
            else if(dust2 > 50){
                dust2Comment = '초미세먼지가 많이 나빠요';
                recommend += 2;
            }

            /*실내, 실외 추천*/

            if(recommend == 0){
                finalComment = '나가서 놀기 좋은 날이네요!';
            }
            else if(recommend == 1){
                finalComment = '최고는 아니지만.. 나가서 놀아도 될 것 같아요';
            }
            else{
                finalComment = '오늘같은 날은 실내에 있어야겠어요';
            }

            return(<div className="App">
                <br/><br/>
                <div className="comments">
                <p>{tempComment}</p>
                <p>{descComment}</p>
                <p>{dust1Comment}</p>
                <p>{dust2Comment}</p>
                <p>{finalComment}</p>
                </div>
                
            </div>);
        }
    }
}

export default Comment;