(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://picsum.photos/id/560/200/200"},{"id":2,"image":"https://picsum.photos/id/439/200/200"},{"id":3,"image":"https://picsum.photos/id/928/200/200"},{"id":4,"image":"https://picsum.photos/id/603/200/200"},{"id":5,"image":"https://picsum.photos/id/36/200/200"},{"id":6,"image":"https://picsum.photos/id/380/200/200"},{"id":7,"image":"https://picsum.photos/id/599/200/200"},{"id":8,"image":"https://picsum.photos/id/695/200/200"},{"id":9,"image":"https://picsum.photos/id/444/200/200"},{"id":10,"image":"https://picsum.photos/id/315/200/200"},{"id":11,"image":"https://picsum.photos/id/46/200/200"},{"id":12,"image":"https://picsum.photos/id/756/200/200"}]')},,,,function(e,i,t){e.exports=t(19)},,,,,function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){"use strict";t.r(i);var a=t(0),c=t.n(a),m=t(2),n=t.n(m);t(15);var l=function(){return c.a.createElement("div",{className:"jumbotron-back jumbotron-fluid"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"display-4 buffer"},"Memory Madness"),c.a.createElement("p",{className:"lead"},"Only click on the images once each. If you click on an image twice, the game will restart. Good luck!")))},s=t(7),d=t(3),r=t(4),o=t(8),g=t(5),u=t(9);t(16),t(17);var h=function(e){return c.a.createElement("div",{className:"gamepiece",onClick:function(){return e.imgClicked(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{className:"game-img",alt:"",src:e.image,"data-id":e.id})))},p=t(6),k=function(e){function i(){var e,t;Object(d.a)(this,i);for(var a=arguments.length,c=new Array(a),m=0;m<a;m++)c[m]=arguments[m];return(t=Object(o.a)(this,(e=Object(g.a)(i)).call.apply(e,[this].concat(c)))).state={clickedArr:[],wins:0,loses:0},t.imgClicked=function(e){var i=t.state.clickedArr;t.setState({clickedArr:[].concat(Object(s.a)(i),[e])}),console.log(t.state)},t}return Object(u.a)(i,e),Object(r.a)(i,[{key:"componentDidUpdate",value:function(){var e,i=this.state.clickedArr;if((e=i).filter(function(i,t){return e.indexOf(i)!==t})[0]){var t=this.state.loses+1;alert("You Lost! You clicked ".concat(i.length-1," unique photos. Try again!")),this.setState({clickedArr:[],loses:t})}else if(12===i.length){var a=this.state.wins+1;alert("You Won! Your memory is bananas."),this.setState({clickedArr:[],wins:a})}}},{key:"render",value:function(){var e=function(e){for(var i,t,a=e.length;0!==a;)t=Math.floor(Math.random()*a),i=e[a-=1],e[a]=e[t],e[t]=i;return e}(p);return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12 center"},c.a.createElement("div",null,c.a.createElement("h4",null,"Wins: ",this.state.wins," Loses: ",this.state.loses)),c.a.createElement("div",null,c.a.createElement(h,{id:e[0].id,image:e[0].image,imgClicked:this.imgClicked}),c.a.createElement(h,{id:e[1].id,image:e[1].image,imgClicked:this.imgClicked}),c.a.createElement(h,{id:e[2].id,image:e[2].image,imgClicked:this.imgClicked}),c.a.createElement(h,{id:e[3].id,image:e[3].image,imgClicked:this.imgClicked})),c.a.createElement("div",null,c.a.createElement(h,{id:e[4].id,image:e[4].image,imgClicked:this.imgClicked}),c.a.createElement(h,{id:e[5].id,image:e[5].image,imgClicked:this.imgClicked}),c.a.createElement(h,{id:e[6].id,image:e[6].image,imgClicked:this.imgClicked}),c.a.createElement(h,{id:e[7].id,image:e[7].image,imgClicked:this.imgClicked})),c.a.createElement("div",null,c.a.createElement(h,{id:e[8].id,image:e[8].image,imgClicked:this.imgClicked}),c.a.createElement(h,{id:e[9].id,image:e[9].image,imgClicked:this.imgClicked}),c.a.createElement(h,{id:e[10].id,image:e[10].image,imgClicked:this.imgClicked}),c.a.createElement(h,{id:e[11].id,image:e[11].image,imgClicked:this.imgClicked})))))}}]),i}(a.Component);t(18);var E=function(){return c.a.createElement("div",{className:"background"},c.a.createElement(l,null),c.a.createElement(k,null))};n.a.render(c.a.createElement(E,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.e13bd8e9.chunk.js.map