import React from 'react'
import {findDOMNode} from 'react-dom'

import './Banner.css'

class Banner extends React.Component {

    constructor(props){
        super(props);

        this.winW = window.innerWidth;
        this.now  = 0;
        this.timer = null;
        this.startX = 0;
        this.moveX = 0;

        this.state = {
            currentIndex: 0
        }
    }


    componentDidMount(){
        this.autoPlay();
    }
    componentWillUnmount(){
        this.closePlay();
    }

    
    touchstart(e){
        this.startX = e.touches[0].pageX;
    }
   
    touchmove(e){
        this.moveX = e.touches[0].pageX - this.startX;
    }

    touchend(){
        this.closePlay();

        if(this.moveX<0){
            this.moveTo('next');
        }else{
            this.moveTo('prev');
        }
    }
    
    moveTo(diretion){
        if(diretion == 'next'){
            this.now = this.now == (this.props.items.length-1)? 0 : this.now+1;
        }else{
            this.now = this.now == 0? this.props.items.length-1 : this.now-1;
        }
        this.startX = 0;
        this.moveX = 0;

        this.setState({
            currentIndex: this.now
        })


        if(this.props.autoplay){
            this.autoPlay();
        }
    }
   
    autoPlay(){
        this.closePlay();
        if(this.props.autoplay){
            this.timer = setInterval(()=>{
                this.moveTo('next');
            }, 3000)
        }
    }
   
    closePlay(){
        clearInterval(this.timer);
    }
    render(){

        let len = this.props.items.length,
            currentIndex = this.state.currentIndex,
            ulWidth = this.winW  * len;

        let ulStyle = {
            'transform': 'translate3d('+(-this.winW *currentIndex)+'px, 0, 0)',
            'WebkitTransform': 'translate3d('+(-this.winW *currentIndex)+'px, 0, 0)',
        }
        if(len){
            ulStyle.width = ulWidth + 'px';
        }
        let liStyle = {
            'width': this.winW  + 'px'
        }
        let dotsStyle = {
            'marginLeft': -((9*len/2)-2)+'px'
        }

        return <div className="banner">
            <ul style= { ulStyle } onTouchStart={this.touchstart.bind(this)} onTouchMove={this.touchmove.bind(this)} onTouchEnd={this.touchend.bind(this)}>
            {
                this.props.items.map((item, index) => {
                    let pic ='';
                    if(item.pic){
                        pic = item.pic? require('../../'+(item.pic)):'';
                    }
                    return (
                        <li style={liStyle} key={ index }><img src={ pic  } /></li>
                    );
                })
            }
            </ul>
            <div className="dots" style={dotsStyle} >
            {
                this.props.items.map((item, index) => {
                    return (
                        <span className = {index==this.state.currentIndex? 'cur':''} key={ index }></span>
                    );
                })
            }
            </div>
        </div>
    }
}

Banner.defaultProps = {
    items: []
}
Banner.propTypes = {
  items: React.PropTypes.array
}

export default  Banner;
