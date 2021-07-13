import NOT from './NOT.png';
import AND from './AND.png';
import OR from './OR.png';
import XOR from './XOR.png';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

var gate = ''
var binary = []
var blength = 0

function display(a){
  document.getElementById('result').innerHTML += a;
}
function changegate(a){
  gate = a;
}
function addnum(a){
  binary.push(a);
  blength = binary.length;
}
function makeclear(){
  gate = ''
  binary = []
  document.getElementById('result').innerHTML = '';
}
function submit(){
  if (gate == "AND"){
    var n = binary.includes('0');
    if (n == true){
      document.getElementById('result').innerHTML += "<br><br> Outcome: 0/False"
    }
    else{
      document.getElementById('result').innerHTML += "<br><br> Outcome: 1/True"
    }
  }
  else if (gate == 'OR'){
    var n = binary.includes('1');
    if (n == true){
      document.getElementById('result').innerHTML += "<br><br> Outcome: 1/True"
    }
    else{
      document.getElementById('result').innerHTML += "<br><br> Outcome: 0/False"
    }
  }
  else if (gate == 'XOR'){
    var y = 0
    var one = 0
    var zero = 0
    for (var i = 0;i<blength;i++)
      if (binary[y] == 1){
        one += 1
        y += 1
      }
      else if (binary[y] == 0){
        zero +=1
        y += 1
      }
    if (one == 1 || one%2 == 1){
      document.getElementById('result').innerHTML += "<br><br> Outcome: 1/True"
    }
    else{
      document.getElementById('result').innerHTML += "<br><br> Outcome: 0/False"
    }
  }
  else if (gate == 'NOT'){
    var n = binary.includes('1');
    if (blength > 1){
      alert("NOT gates cannot take more than one input")
    }
    else if (n == true){
      document.getElementById('result').innerHTML += "<br><br> Outcome: 0/False"
    }
    else if (n == false){
      document.getElementById('result').innerHTML += "<br><br> Outcome: 1/True"
    }
  }
  else {
    alert("No gate")
  }
}

class Game extends React.Component {
  render() {
    return(
      <div>
        <h1 class="Title">Logic Gate Calculator</h1>
          <div class='title'>
            <p class="Created">
              Created by: Andrew Benner
            </p>
          </div>
					<div class="house">
						<br />
						<div class='one' onClick={() => {display('1 '); addnum('1')}}>
              <p class="Numbers">1</p>
            </div>
						<div class="and" onClick={() => {changegate('AND'); display('AND ')}}>
              <p class="Gates">
                AND GATE
                <img src={AND} width='80' height='40' />
              </p>
            </div>
						<br />
						<div class="or" onClick={() => {changegate('OR'); display('OR ')}}>
              <p class="Gates">
                OR GATE
                <img src={OR} width='80' height='40' />
              </p> 
            </div>
						<div class='zero' onClick={() => {display('0 '); addnum('0')}}>
              <p class="Numbers">0</p>
            </div>
						<br />
						<div class="xor" onClick={() => {changegate('XOR'); display('XOR ')}}>
              <p class="Gates">
                XOR GATE
                <img src={XOR} width='80' height='40' />
              </p>
            </div>
						<br />
						<div class="not" onClick={() => {changegate('NOT'); display('NOT ')}}>
              <p class="Gates">
                NOT GATE
                <img src={NOT} width='80' height='40' />
              </p>
            </div>
						<div class="result">      
              <p class="RResult">RESULT:</p>
              <div class="abox" id ="result"><p class="ResultBox"></p></div>
            </div>
            <div class="holdbox">
              <div class="clear" onClick={() => makeclear()}>
                <p class="Gates">
                  CLEAR
                </p>
              </div>
              <div class="submit" onClick={() => submit()}>
                <p class="Gates">
                  SUBMIT
                </p>
              </div>
            </div>
					</div>
    </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
