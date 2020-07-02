import { Component } from 'react';
import Cookie from 'js-cookie'


class LogOut extends Component {
    state = {}
    componentDidMount = () => {
        Cookie.remove('token')
        window.location = "/"
    }
    render() {
        return null;
    }
}

export default LogOut;