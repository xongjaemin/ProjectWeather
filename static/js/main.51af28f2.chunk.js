(this.webpackJsonpweatherproject=this.webpackJsonpweatherproject||[]).push([[0],{29:function(t,e,a){},66:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),s=a(23),i=a.n(s),r=(a(29),a(12)),o=a(2),l=a(3),d=a(6),j=a(5),u=(a.p,a(7),a(4)),h=a.n(u),p=a(0),b=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={temp:0,desc:"",icon:"",loading:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;h.a.get("http://api.openweathermap.org/data/2.5/forecast?id=1835847&appid=22dd2072f22f4aa7ec2101e5340c9a96&units=metric&lang=kr").then((function(e){console.log(e);var a=e.data;t.setState({temp:a.list[0].main.temp,desc:a.list[0].weather[0].description,icon:a.list[0].weather[0].icon,loading:!1})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){var t="http://openweathermap.com/img/w/".concat(this.state.icon,".png");return this.state.loading?Object(p.jsx)("p",{children:"Loading"}):Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("img",{src:t,className:"currentIcon"}),Object(p.jsxs)("p",{children:[this.state.temp,"C"]}),Object(p.jsx)("p",{children:this.state.desc})]})}}]),a}(n.Component),g=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={temp:0,desc:"",icon:"",loading:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;h.a.get("http://api.openweathermap.org/data/2.5/forecast?id=1835847&appid=22dd2072f22f4aa7ec2101e5340c9a96&units=metric&lang=kr").then((function(e){console.log(e);var a=e.data;t.setState({temp:a.list[1].main.temp,desc:a.list[1].weather[0].description,icon:a.list[1].weather[0].icon,loading:!1})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){var t="http://openweathermap.com/img/w/".concat(this.state.icon,".png");return this.state.loading?Object(p.jsx)("p",{children:"Loading"}):Object(p.jsxs)("div",{className:"App",children:["3\uc2dc\uac04 \ud6c4",Object(p.jsx)("br",{}),Object(p.jsx)("img",{src:t,className:"currentIcon"})]})}}]),a}(n.Component),O=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={temp:0,desc:"",icon:"",loading:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;h.a.get("http://api.openweathermap.org/data/2.5/forecast?id=1835847&appid=22dd2072f22f4aa7ec2101e5340c9a96&units=metric&lang=kr").then((function(e){console.log(e);var a=e.data;t.setState({temp:a.list[2].main.temp,desc:a.list[2].weather[0].description,icon:a.list[2].weather[0].icon,loading:!1})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){var t="http://openweathermap.com/img/w/".concat(this.state.icon,".png");return this.state.loading?Object(p.jsx)("p",{children:"Loading"}):Object(p.jsxs)("div",{className:"App",children:["6\uc2dc\uac04 \ud6c4 ",Object(p.jsx)("br",{}),Object(p.jsx)("img",{src:t,className:"currentIcon"})]})}}]),a}(n.Component),v=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={temp:0,desc:"",icon:"",loading:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;h.a.get("http://api.openweathermap.org/data/2.5/forecast?id=1835847&appid=22dd2072f22f4aa7ec2101e5340c9a96&units=metric&lang=kr").then((function(e){console.log(e);var a=e.data;t.setState({temp:a.list[3].main.temp,desc:a.list[3].weather[0].description,icon:a.list[3].weather[0].icon,loading:!1})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){var t="http://openweathermap.com/img/w/".concat(this.state.icon,".png");return this.state.loading?Object(p.jsx)("p",{children:"Loading"}):Object(p.jsxs)("div",{className:"App",children:["9\uc2dc\uac04 \ud6c4 ",Object(p.jsx)("br",{}),Object(p.jsx)("img",{src:t,className:"currentIcon"})]})}}]),a}(n.Component),m=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={dust1:0,dust2:0,much:"",loading:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;h.a.get("http://openAPI.seoul.go.kr:8088/6f475a42696c6a6e3935754a6a564a/json/RealtimeCityAir/1/5/").then((function(e){console.log(e);var a=e.data;t.setState({dust1:a.RealtimeCityAir.row[0].PM10,dust2:a.RealtimeCityAir.row[0].PM25,much:a.RealtimeCityAir.row[0].IDEX_NM,loading:!1})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){return this.state.loading?Object(p.jsx)("p",{children:"Loading"}):Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("p",{children:["\ubbf8\uc138\uba3c\uc9c0 : ",this.state.dust1]}),Object(p.jsxs)("p",{children:["\ucd08\ubbf8\uc138\uba3c\uc9c0 : ",this.state.dust2]}),Object(p.jsxs)("p",{children:["\ubbf8\uc138\uba3c\uc9c0 \ub18d\ub3c4 : ",this.state.much]})]})}}]),a}(n.Component),f=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={temp:0,desc:"",icon:"",loading:!0,dust1:"",dust2:""},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;h.a.get("http://api.openweathermap.org/data/2.5/forecast?id=1835847&appid=22dd2072f22f4aa7ec2101e5340c9a96&units=metric&lang=kr").then((function(e){console.log(e);var a=e.data;t.setState({temp:a.list[0].main.temp,desc:a.list[0].weather[0].id,icon:a.list[0].weather[0].icon,loading:!1})})),h.a.get("http://openAPI.seoul.go.kr:8088/6f475a42696c6a6e3935754a6a564a/json/RealtimeCityAir/1/5/").then((function(e){console.log(e);var a=e.data;t.setState({dust1:a.RealtimeCityAir.row[0].PM10,dust2:a.RealtimeCityAir.row[0].PM25,much:a.RealtimeCityAir.row[0].IDEX_NM,loading:!1})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){var t=this.state.temp,e=this.state.desc,a=this.state.dust1,n=this.state.dust2,c=null,s=null,i=0,r=null,o=null,l=null;return this.state.loading?Object(p.jsx)("p",{children:"Loading"}):(t>=30?(c="\ub108\ubb34 \ub354\uc6cc\uc694!\ud83e\udd75",i+=2):t<=-5&&(c="\ub108\ubb34 \ucd94\uc6cc\uc694!\ud83e\udd76",i+=2),e>=200&&e<=202||e>=210&&e<=212||221==e||e>=230&&e<=232?(s="\ub1cc\uc6b0\uac00 \ubc1c\uc0dd\ud588\uc5b4\uc694 \u26c8\ufe0f",i+=2):e>=300&&e<=302||e>=310&&e<=314||321==e?(s="\uc774\uc2ac\ube44\uac00 \ub0b4\ub824\uc694 \ud83c\udf27\ufe0f",i+=2):e>=500&&e<=504||511==e||e>=520&&e<=522||531==e||771==e?(s="\ube44\uac00 \ub0b4\ub824\uc694 \ud83c\udf27\ufe0f",i+=2):e>=600&&e<=602||615==e||e>=611&&e<=613||616==e||e>=620&&e<=622?(s="\ub208\uc774 \ub0b4\ub824\uc694 \u2744\ufe0f",i+=2):800==e?s="\ub9d1\uc544\uc694 \ud83c\udf1e":801==e||802==e?s="\uad6c\ub984\uc774 \uc870\uae08 \uaf08\uc5b4\uc694 \u2601\ufe0f":803==e||804==e?(s="\uad6c\ub984\uc774 \ub9ce\uc774 \uaf08\uc5b4\uc694 \u2601\ufe0f",i+=1):701==e||711==e||721==e||741==e?(s="\uc548\uac1c\uac00 \uaf08\uc5b4\uc694 \ud83c\udf2b\ufe0f",i+=1):731==e||751==e||761==e||762==e?(s="\uba3c\uc9c0\uac00 \ub080 \ub0a0\uc774\uc5d0\uc694 \ud83d\udca8",i+=2):781==e&&(s="\ud0dc\ud48d\uc774 \ubd88\uc5b4\uc694 \ud83c\udf2a\ufe0f",i+=2),a>80&&a<=100?(o="\ubbf8\uc138\uba3c\uc9c0\uac00 \uc870\uae08 \ub098\ube60\uc694",i+=1):a>100&&(o="\ubbf8\uc138\uba3c\uc9c0\uac00 \ub9ce\uc774 \ub098\ube60\uc694",i+=2),n>35&&n<=50?(l="\ucd08\ubbf8\uc138\uba3c\uc9c0\uac00 \uc870\uae08 \ub098\ube60\uc694",i+=1):n>50&&(l="\ucd08\ubbf8\uc138\uba3c\uc9c0\uac00 \ub9ce\uc774 \ub098\ube60\uc694",i+=2),r=0==i?"\ub098\uac00\uc11c \ub180\uae30 \uc88b\uc740 \ub0a0\uc774\ub124\uc694!":1==i?"\ucd5c\uace0\ub294 \uc544\ub2c8\uc9c0\ub9cc.. \ub098\uac00\uc11c \ub180\uc544\ub3c4 \ub420 \uac83 \uac19\uc544\uc694":"\uc624\ub298\uac19\uc740 \ub0a0\uc740 \uc2e4\ub0b4\uc5d0 \uc788\uc5b4\uc57c\uaca0\uc5b4\uc694",Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{className:"comments",children:[Object(p.jsx)("p",{children:c}),Object(p.jsx)("p",{children:s}),Object(p.jsx)("p",{children:o}),Object(p.jsx)("p",{children:l}),Object(p.jsx)("p",{children:r})]})]}))}}]),a}(n.Component),x=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={title:"",poster:"",vote:0,loading:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;h.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=4bf6dfbe999020abd0e8bd7db3a3f3bb&language=ko-KOR&page=1").then((function(e){console.log(e);var a=e.data;t.setState({title:a.results[0].title,poster:a.results[0].poster_path,vote:a.results[0].vote_average,loading:!1})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){"https://image.tmdb.org/t/p/w200/".concat(this.state.poster);return this.state.loading?Object(p.jsx)("p",{children:"Loading"}):Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("p",{children:["\uc81c\ubaa9 : ",this.state.title]}),Object(p.jsxs)("p",{children:["\ud3c9\uc810 : ",this.state.vote]})]})}}]),a}(n.Component),w=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={title:"",poster:"",vote:0,loading:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;h.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=4bf6dfbe999020abd0e8bd7db3a3f3bb&language=ko-KOR&page=1").then((function(e){console.log(e);var a=e.data;t.setState({title:a.results[1].title,poster:a.results[1].poster_path,vote:a.results[1].vote_average,loading:!1})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){"https://image.tmdb.org/t/p/w200/".concat(this.state.poster);return this.state.loading?Object(p.jsx)("p",{children:"Loading"}):Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("p",{children:["\uc81c\ubaa9 : ",this.state.title]}),Object(p.jsxs)("p",{children:["\ud3c9\uc810 : ",this.state.vote]})]})}}]),a}(n.Component),N=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={title:"",poster:"",vote:0,loading:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;h.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=4bf6dfbe999020abd0e8bd7db3a3f3bb&language=ko-KOR&page=1").then((function(e){console.log(e);var a=e.data;t.setState({title:a.results[2].title,poster:a.results[2].poster_path,vote:a.results[2].vote_average,loading:!1})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){"https://image.tmdb.org/t/p/w200/".concat(this.state.poster);return this.state.loading?Object(p.jsx)("p",{children:"Loading"}):Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("p",{children:["\uc81c\ubaa9 : ",this.state.title]}),Object(p.jsxs)("p",{children:["\ud3c9\uc810 : ",this.state.vote]})]})}}]),a}(n.Component),k=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={title:"",poster:"",genre:"",place:"",loading:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;h.a.get("http://openapi.seoul.go.kr:8088/6f475a42696c6a6e3935754a6a564a/json/culturalEventInfo/1/5/").then((function(e){console.log(e);var a=e.data;t.setState({title:a.culturalEventInfo.row[0].TITLE,poster:a.culturalEventInfo.row[0].MAIN_IMG,genre:a.culturalEventInfo.row[0].CODENAME,place:a.culturalEventInfo.row[0].PLACE,loading:!1})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){this.state.poster;return this.state.loading?Object(p.jsx)("p",{children:"Loading"}):Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("p",{children:["\uc81c\ubaa9 : ",this.state.title]}),Object(p.jsxs)("p",{children:["\uc7a5\ub974 : ",this.state.genre]})]})}}]),a}(n.Component),y=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={title:"",poster:"",genre:"",place:"",loading:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;h.a.get("http://openapi.seoul.go.kr:8088/6f475a42696c6a6e3935754a6a564a/json/culturalEventInfo/1/5/").then((function(e){console.log(e);var a=e.data;t.setState({title:a.culturalEventInfo.row[1].TITLE,poster:a.culturalEventInfo.row[1].MAIN_IMG,genre:a.culturalEventInfo.row[1].CODENAME,place:a.culturalEventInfo.row[1].PLACE,loading:!1})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){this.state.poster;return this.state.loading?Object(p.jsx)("p",{children:"Loading"}):Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("p",{children:["\uc81c\ubaa9 : ",this.state.title]}),Object(p.jsxs)("p",{children:["\uc7a5\ub974 : ",this.state.genre]})]})}}]),a}(n.Component),M=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={title:"",poster:"",genre:"",place:"",loading:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;h.a.get("http://openapi.seoul.go.kr:8088/6f475a42696c6a6e3935754a6a564a/json/culturalEventInfo/1/5/").then((function(e){console.log(e);var a=e.data;t.setState({title:a.culturalEventInfo.row[2].TITLE,poster:a.culturalEventInfo.row[2].MAIN_IMG,genre:a.culturalEventInfo.row[2].CODENAME,place:a.culturalEventInfo.row[2].PLACE,loading:!1})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){this.state.poster;return this.state.loading?Object(p.jsx)("p",{children:"Loading"}):Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("p",{children:["\uc81c\ubaa9 : ",this.state.title]}),Object(p.jsxs)("p",{children:["\uc7a5\ub974 : ",this.state.genre]})]})}}]),a}(n.Component),I=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={poster1:"",poster2:"",poster3:"",loading:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;h.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=4bf6dfbe999020abd0e8bd7db3a3f3bb&language=ko-KOR&page=1").then((function(e){console.log(e);var a=e.data;t.setState({poster1:a.results[0].poster_path,poster2:a.results[1].poster_path,poster3:a.results[2].poster_path,loading:!1})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){var t="https://image.tmdb.org/t/p/w200/".concat(this.state.poster1),e="https://image.tmdb.org/t/p/w200/".concat(this.state.poster2),a="https://image.tmdb.org/t/p/w200/".concat(this.state.poster3);return this.state.loading?Object(p.jsx)("p",{children:"Loading"}):Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("br",{}),Object(p.jsxs)("div",{className:"movieimgContainer",children:[Object(p.jsx)("img",{src:t,className:"Movieimg"}),Object(p.jsx)("img",{src:e,className:"Movieimg"}),Object(p.jsx)("img",{src:a,className:"Movieimg"})]})]})}}]),a}(n.Component),A=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={poster1:"",poster2:"",poster3:"",loading:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;h.a.get("http://openapi.seoul.go.kr:8088/6f475a42696c6a6e3935754a6a564a/json/culturalEventInfo/1/5/").then((function(e){console.log(e);var a=e.data;t.setState({poster1:a.culturalEventInfo.row[0].MAIN_IMG,poster2:a.culturalEventInfo.row[1].MAIN_IMG,poster3:a.culturalEventInfo.row[2].MAIN_IMG,loading:!1})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){var t=this.state.poster1,e=this.state.poster2,a=this.state.poster3;return this.state.loading?Object(p.jsx)("p",{children:"Loading"}):Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("br",{}),Object(p.jsxs)("div",{className:"movieimgContainer",children:[Object(p.jsx)("img",{src:t,className:"performanceImg"}),Object(p.jsx)("img",{src:e,className:"performanceImg"}),Object(p.jsx)("img",{src:a,className:"performanceImg"})]})]})}}]),a}(n.Component),C=a(24),E=a.n(C),_=(a(64),a(65),function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={name:"",address:"",date:"",tag:"",loading:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=Math.random(),a=parseInt(44*e);h.a.get("http://openapi.seoul.go.kr:8088/6f475a42696c6a6e3935754a6a564a/json/TbVwAttractions/147/191/").then((function(e){console.log(e);var n=e.data;t.setState({name:n.TbVwAttractions.row[a].POST_SJ,address:n.TbVwAttractions.row[a].ADDRESS,date:n.TbVwAttractions.row[a].CMMN_BSNDE,tag:n.TbVwAttractions.row[a].TAG,loading:!1})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){this.state.poster;return this.state.loading?Object(p.jsx)("p",{children:"Loading"}):Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("br",{}),Object(p.jsxs)("p",{children:["\uc7a5\uc18c : ",this.state.name]}),Object(p.jsxs)("p",{children:["\uc8fc\uc18c : ",this.state.address]}),Object(p.jsxs)("p",{children:["\uc6b4\uc601\uc694\uc77c : ",this.state.date]}),Object(p.jsxs)("p",{children:["#",this.state.tag,"#"]})]})}}]),a}(n.Component));var S=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={desc:""},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;h.a.get("http://api.openweathermap.org/data/2.5/forecast?id=1835847&appid=22dd2072f22f4aa7ec2101e5340c9a96&units=metric&lang=kr").then((function(e){console.log(e);var a=e.data;t.setState({desc:a.list[0].weather[0].id})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){var t=this.state.desc,e="Main";t>=300&&t<=302||t>=310&&t<=314||321==t||t>=500&&t<=504||511==t||t>=520&&t<=522||531==t||771==t?e="rainMain":t>=600&&t<=602||615==t||t>=611&&t<=613||616==t||t>=620&&t<=622?e="snowMain":801==t||802==t||803==t||804==t?e="cloudyMain":800==t&&(e="sunnyMain");return Object(p.jsxs)("div",{className:e,children:[Object(p.jsx)("div",{className:"title",children:Object(p.jsx)("p",{className:"titleText",children:"\ub0a0\uc528 \ud504\ub85c\uc81d\ud2b8"})}),Object(p.jsxs)("div",{className:"gridContainer",children:[Object(p.jsxs)("div",{className:"grid1",children:[Object(p.jsx)("br",{}),Object(p.jsx)("b",{className:"currentText",children:"\ud604\uc7ac \ub0a0\uc528"}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{className:"currentContainer",children:[Object(p.jsx)("div",{className:"current",children:Object(p.jsx)(b,{})}),Object(p.jsx)("div",{className:"current",children:Object(p.jsx)(m,{})})]}),Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{className:"forecastContainer",children:[Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"forecast",children:Object(p.jsx)(g,{})}),Object(p.jsx)("div",{className:"forecast",children:Object(p.jsx)(O,{})}),Object(p.jsx)("div",{className:"forecast",children:Object(p.jsx)(v,{})})]})]}),Object(p.jsxs)("div",{className:"grid2",children:[Object(p.jsx)("br",{}),Object(p.jsx)("b",{className:"currentText",children:"\ucf54\uba58\ud2b8"}),Object(p.jsx)(f,{})]})]}),Object(p.jsxs)("div",{className:"gridContainer",children:[Object(p.jsx)("div",{className:"grid3",children:Object(p.jsxs)(E.a,Object(r.a)(Object(r.a)({},{dots:!0,fade:!0,infinite:!0,speed:500,slidesToShow:1,arrows:!0,slidesToScroll:1,className:"slides"}),{},{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("br",{}),Object(p.jsx)("b",{className:"currentText",children:"\uac74\ubb3c \ubc16\uc740 \uc704\ud5d8\ud574 - \uc601\ud654"}),Object(p.jsx)(I,{}),Object(p.jsxs)("div",{className:"movieContainer",children:[Object(p.jsx)("div",{children:Object(p.jsx)(x,{})}),Object(p.jsx)("div",{children:Object(p.jsx)(w,{})}),Object(p.jsx)("div",{children:Object(p.jsx)(N,{})})]})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("br",{}),Object(p.jsx)("b",{className:"currentText",children:"\uac74\ubb3c \ubc16\uc740 \uc704\ud5d8\ud574 - \uacf5\uc5f0"}),Object(p.jsx)(A,{}),Object(p.jsxs)("div",{className:"movieContainer",children:[Object(p.jsx)("div",{children:Object(p.jsx)(k,{})}),Object(p.jsx)("div",{children:Object(p.jsx)(y,{})}),Object(p.jsx)("div",{children:Object(p.jsx)(M,{})})]})]})]}))}),Object(p.jsxs)("div",{className:"grid4",children:[Object(p.jsx)("br",{}),Object(p.jsx)("b",{className:"currentText",children:"\uc624\ub298\uc740 \uc5b4\ub514\ub85c \uac00\ubcfc\uae4c"}),Object(p.jsx)("br",{}),Object(p.jsx)(_,{})]})]})]})}}]),a}(n.Component),D=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,67)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,s=e.getLCP,i=e.getTTFB;a(t),n(t),c(t),s(t),i(t)}))};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root")),D()},7:function(t,e,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.51af28f2.chunk.js.map