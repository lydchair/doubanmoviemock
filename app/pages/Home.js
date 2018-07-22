import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import actions from '../actions/home';
import Banner from '../components/Banner/Banner'
import SwiperList from '../components/SwiperList/SwiperList'
import Header from '../components/Header/Header'
import SecTitle from '../components/SecTitle/SecTitle'
import Nav from '../components/Nav/Nav';

import '../css/home.css';

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count:0
        }
    }

    componentWillMount(){
        let { state , dispatch} = this.props;
        
        dispatch(actions.getHotList(9));
        
        dispatch(actions.getComingSoonList(9));
      
        dispatch(actions.getTopList(9))

    }

    render(){
        let { state , dispatch } = this.props;
        let hotList = state.hotList,
            comingSoonList = state.comingSoonList,
            topList = state.topList;

        return <div>
            <div className="page-body">
                <section className="sec">
                    <SecTitle til="New Movies In Theaters" path="/list/hot"/>
                    <SwiperList showingList = {hotList}/>
                </section>


                <section className="sec">
                    <SecTitle til="Upcoming" path="/list/comingsoon"/>
                    <SwiperList showingList = {comingSoonList}/>
                </section>

                <section className="sec">
                    <SecTitle til="Top10" path="/list/top"/>
                    <SwiperList showingList = {topList}/>
                </section>
            </div>

            <Nav />
        </div>
    }
}
function selectState(state) {
    return {
        state: state.home
    }
}

export default connect(selectState)(Home);
