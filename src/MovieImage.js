import React,{Component} from 'react';
import axios from 'axios';
import './App.css';

class MovieImage extends Component{
    constructor(props){
        super(props);
        this.state= {poster1:'',poster2:'',poster3:'',loading:true}
    }

    componentDidMount(){
        const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=4bf6dfbe999020abd0e8bd7db3a3f3bb&language=ko-KOR&page=1';

        axios.get(url).then(responseData => {
            console.log(responseData);
            const data = responseData.data
                this.setState({
                    poster1: data.results[0].poster_path,
                    poster2: data.results[1].poster_path,
                    poster3: data.results[2].poster_path,
                    loading: false
                });
        })
        .catch(error => console.log(error));
    }

    render(){
        const imgSrc1 = `https://image.tmdb.org/t/p/w200/${this.state.poster1}`;
        const imgSrc2 = `https://image.tmdb.org/t/p/w200/${this.state.poster2}`;
        const imgSrc3 = `https://image.tmdb.org/t/p/w200/${this.state.poster3}`;
        if(this.state.loading){
            return <p>Loading</p>;
        }
        else{
            return(
            <div className="App">
                <br/>
                <div className="movieimgContainer">
                <img src={imgSrc1} className="Movieimg"/>
                <img src={imgSrc2} className="Movieimg"/>
                <img src={imgSrc3} className="Movieimg"/>

                </div>
            </div>);
        }
    }
}

export default MovieImage;