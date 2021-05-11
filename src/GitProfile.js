import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class UserGithub extends React.Component { 
    constructor(props) { 
        super(props); 
        this.state = { username: '', githubtUrl: '', avatarUrl: '', followersUrl:'',followingUrl:'',LocationUrl:''} 
    } 
    componentDidMount() { 
        $.get(this.props.source, (result) => { 
            console.log(result); 
            const data = result; 
            if (data) { 
                this.setState({ 
                    username: data.name, 
                    githubtUrl: data.html_url, 
                    avatarUrl: data.avatar_url,
                    followersUrl:data.followers_url,
                    followingUrl:data.following_url,
                    LocationUrl:data.location
                }); 
            } 
        }); 
    } 
    render() { 
        return (
        <div>             
            <h3>{this.state.username}</h3>             
            <img src={this.state.avatarUrl} alt="Myimage"></img>
            <br/>
            <a href={this.state.githubtUrl}>Github Link</a>.
            <br/>
            <a href={this.state.followersUrl}>Followers</a>.
            <br/>
            <a href={this.state.followingUrl}>Following</a>.
            <br/>
            <h3>Location:{this.state.LocationUrl}</h3>    
            <br/>  
        </div>
        ); 
    } 
} 
ReactDOM.render(   
<UserGithub source="https://api.github.com/users/khaos991213" />,   
document.getElementById('root') );