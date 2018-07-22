import 'isomorphic-fetch';
import queryString from 'query-string';
import config from './config';
let request = {};



request.get = (url, options) => {

    if(options){
        url+='?'+queryString.stringify(options);
    }
    return fetch(url)
        .then((response) => {
            return response.json()
        }).then(function(json) {
            return json
        }).catch((err) => {
            console.log('parsing failed', err)
        })
}




request.post = (url, options) => {
    options = Object.assign(config.reqHeader, {
        body: JSON.stringify(options)
    });

    return fetch(url, options)
        .then((response) => {
            return response.json()
        }).then((json) => {
            return json
        }).catch((err) => {
            console.log('post failed data:' + err)
        })
}

module.exports = request;
