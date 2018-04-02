import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header from "./Header";
import Search from "./Search";
import Home from "./Home";
import About from "./About";
import Result from "./Result";

class App extends React.Component{

  constructor(props){
    super(props);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.setURL = this.setURL.bind(this);
    this.state = {
      input: "",
      url: "",
      title: ""
    };
  }

  handleSearchInput(e){
    let userInput = document.getElementById("searchInput").value;
    if (userInput){
      this.setState(() => {
        return {
          input: userInput
        }
      })
    } else{
      e.preventDefault();
    }
  }

  setURL(e){
    let url = e.target.id
    let title = e.target.innerText
    if(url){
       this.setState(() => {
        return {
          url: url,
          title: title
         }
       })
     }
  }

  render(){
    return(
      <div>
        <Header search={this.handleSearchInput}/>
        <Switch>
          <Route path={process.env.PUBLIC_URL + "/search"} render={() => <Search input={this.state.input} setURL={this.setURL}/>} />
          <Route path= {process.env.PUBLIC_URL + "/about"} render={() => <About />} />
          <Route path={process.env.PUBLIC_URL + "/result"} render={() => <Result url={this.state.url} title={this.state.title}/>} />
          <Route path={process.env.PUBLIC_URL + "/"} exact={true} render={() => <Home search={this.handleSearchInput} />} />
        </Switch>
      </div>
    )
  }
}

export default App;