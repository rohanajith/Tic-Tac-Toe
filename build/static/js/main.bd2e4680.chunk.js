(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(41)},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(23),s=a.n(i),l=(a(34),a(27)),o=a(11),c=a(12),m=a(16),d=a(13),u=a(15),p=a(42),v=a(43),f=a(45),g=(a(35),0),y=1,h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleClick=function(e){var t=a.state.board;null===t[e]&&!a.state.winner&&a.state.gameOver&&(t[e]=a.state.player,g+=1,a.setState({board:t,player:"X"===a.state.player?"O":"X"}),a.gameWinner()),9===g&&a.state.gameOver&&y&&(a.matchTied(a.state.gameOver),a.setState({gameOver:!1}))},a.matchTied=function(e,t){e?(a.setState({tied:a.state.tied+1,val:1}),document.getElementById("final").innerHTML=" Match Tied",document.getElementById("timer").style.display="none",clearInterval(a.interval)):(document.getElementById("final").innerHTML=t+" won this round",a.setState({val:1}),clearInterval(a.interval),document.getElementById("timer").style.display="none")},a.gameWinner=function(e){for(var t,n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<n.length;r++){var i=Object(l.a)(n[r],3),s=i[0],o=i[1],c=i[2];a.state.board[s]&&a.state.board[s]===a.state.board[o]&&a.state.board[s]===a.state.board[c]&&("X"===a.state.player?(t="Player 1",a.setState({p1:a.state.p1+1})):(t="Player2",a.setState({p2:a.state.p2+1})),y=0,a.setState({gameOver:!1},function(){console.log(a.state.gameOver),a.matchTied(a.state.gameOver,t)}))}},a.state={board:Array(9).fill(null),check:Array(9).fill(1),player:"X",p1:0,p2:0,tied:0,winner:0,val:0,disqualify:0,timer:10,gameOver:!0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){sessionStorage.getItem("player1")&&sessionStorage.getItem("tied")&&sessionStorage.getItem("player2")&&this.setState({p1:JSON.parse(sessionStorage.getItem("player1")),tied:JSON.parse(sessionStorage.getItem("tied")),p2:JSON.parse(sessionStorage.getItem("player2"))})}},{key:"componentDidMount",value:function(){this.setTime()}},{key:"componentWillUpdate",value:function(e,t){sessionStorage.setItem("player1",t.p1),sessionStorage.setItem("tied",t.tied),sessionStorage.setItem("player2",t.p2)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"setTime",value:function(){var e=this;this.interval=setInterval(function(){e.state.timer>0?e.setState(function(e){return{timer:e.timer-1}}):(clearInterval(e.interval),"X"===e.state.player?document.getElementById("result").innerHTML="Player 1 is disqualified. <span>Player 2 wins.</span>":document.getElementById("result").innerHTML="Player 2 is disqualified. <span>Player 1 wins.</span>",e.setState({gameOver:!1,disqualify:1}))},1e3)}},{key:"resetTime",value:function(e){var t=this.state.check;this.state.board[e]&&this.state.check[e]&&(t[e]=0,this.setState({timer:10}))}},{key:"startAgain",value:function(){sessionStorage.clear(),window.location.replace("https://rohanajith.github.io/Tic-Tac-Toe/#/")}},{key:"render",value:function(){var e=this,t=this.state.board.map(function(t,a){return r.a.createElement("div",{className:"box",key:a,onClick:function(){e.handleClick(a),e.resetTime(a)}},t)});return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"options"},r.a.createElement(p.a,{className:"justify-content-md-center"},r.a.createElement(v.a,null,r.a.createElement("div",{className:"board"},t)),r.a.createElement(v.a,{xs:!0,lg:"2",className:"font"}," Player 1",r.a.createElement(v.a,null,this.state.p1),r.a.createElement("p",{id:"timer"},"Timer  : ",r.a.createElement("span",{id:"timerValue"},this.state.timer))),r.a.createElement(v.a,{className:"font",md:"auto"},"Tied",r.a.createElement(v.a,null,this.state.tied)),r.a.createElement(v.a,{className:"font",xs:!0,lg:"2"},"Player 2",r.a.createElement(v.a,null,this.state.p2)))),r.a.createElement("div",{id:"final"}),r.a.createElement("div",{id:"result"}),1===this.state.disqualify&&r.a.createElement(f.a,{variant:"info",id:"newGame",onClick:function(){e.startAgain()}},"Start new game"),1===this.state.val&&r.a.createElement("meta",{httpEquiv:"refresh",content:"4"}))}}]),t}(n.Component),E=a(44),b=a(14),S=(a(36),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("img",{src:"https://i.pinimg.com/originals/f0/df/fd/f0dffdcf873936786b4ee8b518521a5a.jpg",alt:"bg"}),r.a.createElement("div",{className:"centered"},"Tic Tac Toe",r.a.createElement(E.a,null,r.a.createElement(b.b,{to:"/game"},r.a.createElement(f.a,{variant:"primary"},"Play Game")))))}}]),t}(n.Component)),O=a(8);var k=function(){return r.a.createElement(b.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(O.a,{exact:!0,path:"/",component:S}),r.a.createElement(O.a,{path:"/game",component:h})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.bd2e4680.chunk.js.map