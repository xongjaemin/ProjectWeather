import React,{Component} from 'react';
import axios from 'axios';
import './App.css';

class Movie extends Component{
    constructor(props){
        super(props);
        this.state= {title:'',poster:'',vote:0,loading:true}
    }

    componentDidMount(){
        const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=4bf6dfbe999020abd0e8bd7db3a3f3bb&language=ko-KOR&page=1';

        axios.get(url).then(responseData => {
            console.log(responseData);
            const data = responseData.data
                this.setState({
                    title: data.results[0].title,
                    poster: data.results[0].poster_path,
                    vote: data.results[0].vote_average,
                    loading: false
                });
        })
        .catch(error => console.log(error));
    }

    render(){
        const imgSrc = `https://image.tmdb.org/t/p/w200/${this.state.poster}`;
        if(this.state.loading){
            return <p>Loading</p>;
        }
        else{
            return(<div className="App">
                
                <p>제목 : {this.state.title}</p>
                <p>평점 : {this.state.vote}</p> 
            </div>);
        }
    }
}

export default Movie;