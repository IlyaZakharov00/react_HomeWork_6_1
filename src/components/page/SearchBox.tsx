import React from "react";
import { SearchBoxView } from "./SearchBoxView";


export class SearchBox extends React.Component<any, any> {
  y: any;

  constructor(props: any) {
    super(props);
    this.state = { fixed: false };
  }

  componentDidMount() {
    const searchBox = document.querySelector(".container")
    if(!searchBox) return
    window.addEventListener("scroll", ()=>{this.setPosition(searchBox)})
  }
  
  componentDidUpdate(prevProps: any, prevState: any) {
    if(prevState.fixed !== this.state.fixed){
      console.log("компонент обновился", prevProps, prevState)
    } 
    
  }
  
  componentWillUnmount() {
    const searchBox = document.querySelector(".container")
    if(!searchBox) return
    window.removeEventListener("scroll",  ()=>{this.setPosition(searchBox)})
  }

  render() {
    return <SearchBoxView fixed={this.state.fixed} />
  }

  isFixed(searchBox:any) {
    let coords = searchBox?.getBoundingClientRect()
    if(coords.y < 0){
      return true;
    } else {
        this.setState({fixed:false})
        return false;
    }
  }

  setPosition(searchBox:any) {
    this.setState({fixed: this.isFixed(searchBox)})
    return this.state.fixed;
  }
}