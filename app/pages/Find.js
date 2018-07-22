import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';


import Nav from '../components/Nav/Nav';

import '../css/find.css';

class Find extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchKeyword:''
        }

    }
    componentDidMount(){
        this.refs.seachIpt.focus();
    }
    handleChange(e){
        this.setState({
            searchKeyword:e.target.value
        })
    }
  
    handleClick(){
        if(!this.refs.seachIpt.value){
            alert('Write a movie name');
            this.refs.seachIpt.focus();
            return;
        }
        location.href = `/findresult?text=${this.refs.seachIpt.value}`;

    }
    render(){
        return <div className="search">
            <div className="page-body">
                <p className="til">Search</p>
                <div className="search-input"><input value={this.state.searchKeyword} ref="seachIpt" onChange={this.handleChange.bind(this)} type="text" /></div>
                <div className="search-btn"><button onClick={this.handleClick.bind(this)}>Search</button></div>
            </div>

            <Nav />
        </div>
    }
}

export default Find;
