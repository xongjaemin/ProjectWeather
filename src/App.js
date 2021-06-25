import logo from './logo.svg';
import './App.css';
import Weather from './Weather.js';
import Weather2 from './Weather2.js';
import Weather3 from './Weather3.js';
import Weather4 from './Weather4.js';
import Comment from './Comment.js';
import Dust from './Dust.js';
import Movie from './Movie.js';
import Movie2 from './Movie2.js';
import Movie3 from './Movie3.js';
import Performance from './Performance.js';
import Performance2 from './Performance2.js';
import Performance3 from './Performance3.js';
import MovieImage from './MovieImage.js';
import PerformImage from './PerformImage.js';
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tour from './Tour.js';


class App extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      className: "slides"
    }
    return (
      <div className="App">

        <div className="title">
          <p className="titleText">날씨 프로젝트</p>
        </div>


        <div className="gridContainer">
          <div className="grid1">
            <br />
            <b className="currentText">현재 날씨</b><br />
            <div className="currentContainer">
              <div className="current"><Weather /></div>
              <div className="current"><Dust /></div>
            </div>
            <hr />
            <div className="forecastContainer">
              <br />

              <div className="forecast">
                <Weather2 />
              </div>
              <div className="forecast">
                <Weather3 />
              </div>
              <div className="forecast">
                <Weather4 />
              </div>

            </div>
          </div>

          <div className="grid2">
            <br />
            <b className="currentText">코멘트</b>
            <Comment />
          </div>
        </div>

        <div className="gridContainer">

          <div className="grid3">

            <Slider {...settings}>

              <div>
                <br/>
                <b className="currentText">건물 밖은 위험해 - 영화</b>

                <MovieImage/>
                <div className="movieContainer">

                  <div>
                    <Movie />
                  </div>

                  <div>
                    <Movie2 />
                  </div>

                  <div>
                    <Movie3 />
                  </div>

                </div>
              </div>

              <div>
                <br/>
                <b className="currentText">건물 밖은 위험해 - 공연</b>

                <PerformImage/>
                <div className="movieContainer">

                  <div>
                    <Performance />
                  </div>

                  <div>
                    <Performance2 />
                  </div>

                  <div>
                    <Performance3 />
                  </div>

                </div>
              </div>

            </Slider>


          </div>

          <div className="grid4">
          <br/>
                <b className="currentText">오늘은 어디로 가볼까</b>
                <br/>
            <Tour/>
          </div>
        </div>

      </div>

    );
  }
}

export default App;