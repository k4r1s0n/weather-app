(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(22)},17:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),i=(n(17),n(7)),s=n.n(i),p=n(10),u=n(1),l=n(2),m=n(5),d=n(3),h=n(6),y=n(4),E=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",null,"Weather Application"),r.a.createElement("div",{className:"btn-group info-button"},r.a.createElement("button",{type:"button",className:"btn btn-primary dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Weather in current location"),r.a.createElement("div",{className:"dropdown-menu dropdown-menu-right"},r.a.createElement("p",null,"Press Search without entering city and country"))),r.a.createElement("div",{className:"btn-group info-button"},r.a.createElement("button",{type:"button",className:"btn btn-primary dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Weather in another location"),r.a.createElement("div",{className:"dropdown-menu dropdown-menu-right"},r.a.createElement("p",null,"Please enter your city and country and press Search"))))}}]),t}(r.a.Component),f=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("h5",null,"Enter your city and country"),r.a.createElement("form",{onSubmit:this.props.weatherMethod},r.a.createElement("input",{type:"text",name:"city",placeholder:"Los Angeles, US"}),r.a.createElement("button",{id:"search-btn",className:"btn btn-success"},r.a.createElement("i",{class:"fas fa-sun"})," Search")))}}]),t}(r.a.Component),g={color:"#66ffff"},b=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return""!==this.props.city?r.a.createElement("div",null,r.a.createElement("h2",null,r.a.createElement("span",{style:g},this.props.city,", ",this.props.country)),r.a.createElement("p",null,r.a.createElement("img",{alt:"icon",src:this.props.icon})," ",r.a.createElement("span",{style:g},this.props.temp,"\xb0C")),r.a.createElement("p",null,r.a.createElement("span",{style:g},this.props.dscrptn)),r.a.createElement("p",null,"Pressure: ",r.a.createElement("span",{style:g},this.props.pressure," hpa")),r.a.createElement("p",null,"Humidity: ",r.a.createElement("span",{style:g},this.props.humidity," %")),r.a.createElement("p",null,"Min Temperature: ",r.a.createElement("span",{style:g},this.props.tempMin,"\xb0C")),r.a.createElement("p",null,"Max Temperature: ",r.a.createElement("span",{style:g},this.props.tempMax,"\xb0C"))):r.a.createElement("div",null,r.a.createElement("p",null,this.props.error),r.a.createElement("p",{style:{color:"black",fontSize:15,fontFamily:"Arial"}},this.props.geoLocErr))}}]),t}(r.a.Component),w="b31e00def348fa90ff280124c0e4d3b8",v=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).getWeather=function(){var e=Object(p.a)(s.a.mark(function e(t){var a,r,o,c,i,p,u,l,m,d,h,y,E;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){a=e.coords.latitude,r=e.coords.longitude}),t.preventDefault(),o=t.target.elements.city.value,console.log(o),e.next=6,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(o,"&appid=").concat(w,"&units=metric"));case 6:return c=e.sent,e.next=9,fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(a,"&lon=").concat(r,"&appid=").concat(w,"&units=metric"));case 9:return i=e.sent,e.next=12,i.json();case 12:return p=e.sent,e.next=15,c.json();case 15:u=e.sent,console.log(p),console.log(u),l=function(e){return"https://openweathermap.org/img/w/".concat(e.weather[0].icon,".png")},m=function(e){return Math.round(e)},d=function(e){return Math.round(e)},h=function(e){return Math.round(e)},y=function(e){return e.split(/\s+/).map(function(e){return e[0].toUpperCase()+e.substring(1)}).join(" ")},E=function(e){return"404"===e?"Enter your city correctly":"400"===e?"Geolocation is not supported":void 0},function(){return"Turn on (allow) geolocation in your browser or on your device and press SEARCH button again."},""===o&&"400"!==p.cod?n.setState({temp:m(p.main.temp),city:p.name,country:p.sys.country,pressure:p.main.pressure,humidity:p.main.humidity,tempMin:d(p.main.temp_min),tempMax:h(p.main.temp_max),dscrptn:y(p.weather[0].description),icon:l(p),error:"",geoLocErr:""}):"404"===u.cod?n.setState({temp:"",city:"",country:"",pressure:"",humidity:"",tempMin:"",tempMax:"",dscrptn:"",icon:"",error:E(u.cod),geoLocErr:""}):"400"===p.cod&&"400"===u.cod?n.setState({temp:"",city:"",country:"",pressure:"",humidity:"",tempMin:"",tempMax:"",dscrptn:"",icon:"",error:E(p.cod),geoLocErr:"Turn on (allow) geolocation in your browser or on your device and press SEARCH button again."}):n.setState({temp:m(u.main.temp),city:u.name,country:u.sys.country,pressure:u.main.pressure,humidity:u.main.humidity,tempMin:d(u.main.temp_min),tempMax:h(u.main.temp_max),dscrptn:y(u.weather[0].description),icon:l(u),error:"",geoLocErr:""});case 26:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.state={temp:"",city:"",country:"",pressure:"",humidity:"",tempMin:"",tempMax:"",dscrptn:"",icon:"",error:"",geoLocErr:""},n.getWeather=n.getWeather.bind(Object(h.a)(n)),n}return Object(y.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"app",className:"container"},r.a.createElement("div",{id:"wrap",className:"row"},r.a.createElement("div",{id:"info",className:"col-md-6"},r.a.createElement(E,null)),r.a.createElement("div",{id:"form",className:"col-md-6"},r.a.createElement(f,{weatherMethod:this.getWeather}),r.a.createElement(b,{temp:this.state.temp,city:this.state.city,country:this.state.country,pressure:this.state.pressure,humidity:this.state.humidity,tempMin:this.state.tempMin,tempMax:this.state.tempMax,dscrptn:this.state.dscrptn,icon:this.state.icon,error:this.state.error,geoLocErr:this.state.geoLocErr}))))}}]),t}(r.a.Component);n(20),n(21),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.f5c3bb42.chunk.js.map