import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';


import actions from '../actions/list';
import FilmList from '../components/FilmList/FilmList';

import '../css/list.css';

class List extends React.Component{
    constructor(props){
        super(props);

        this.pageNo = 1;
        this.title = '';
        this.reqData = {};
    }

    componentWillMount(){

        let { state , dispatch, params} = this.props;
        let reqData = this.setReqData(1);
        dispatch(actions.getMoreList(reqData));

    }

    setReqData(page){
        let { state , dispatch, params} = this.props;
        let reqData = {};

        reqData.pageNo = page;
        switch (params.type){
            case 'hot':           
                reqData.url = '/api/movie/in_theaters';
                this.title = 'New Movies In Theaters'
                break;
            case 'comingsoon':
                reqData.url = '/api/movie/coming_soon';
                this.title = 'Upcoming';
                break;
            case 'top':
                reqData.url = '/api/movie/top250';
                this.title = 'Top10';
                break;
        }

        return reqData;
    }

    loadMore(reqData){
        let {state, dispatch, params } = this.props;
        dispatch(actions.getMoreList(reqData));
    }

    render(){
        let {state, dispatch, params } = this.props;
        let list = state.moreList || [];
        let isFetching = state.isFetching;
        let totalPage = state.totalPage || 0;

        return <div className="film-list">
            <h3 className="list-title">{this.title}</h3>

            <FilmList totalPage={totalPage} listData={list} setReqData={this.setReqData.bind(this)} loadMore={this.loadMore.bind(this)} />

             {isFetching ? (<div className="loading">Loading...</div>) : ''}
        </div>
    }
}
function selectState(state) {
    return {
        state: state.list
    }
}

export default connect(selectState)(List);
