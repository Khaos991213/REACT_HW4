import React from 'react'
import $ from 'jquery'
export default class UserGithub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            githubtUrl: '',
            avatarUrl: '',
        }
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
                    bio: data.bio,
                    twitter_username: data.twitter_username,
                    location: data.location
                });
            }
        });
    }
    render() {
        return (
            <div>
                <h3>{this.state.username}</h3>
                <img src={this.state.avatarUrl} />
                <br></br>
                <a href={this.state.githubtUrl}>My Github Link</a>
                <h2>Biograph:{this.state.bio}</h2>
                <h2>Twitter_name:{this.state.twitter_username}</h2>
                <h2>Live in:{this.state.location}</h2>
            </div>
        );
    }
}