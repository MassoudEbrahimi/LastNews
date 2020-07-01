import React from 'react'
import { tokenAuth } from '../Service/loginServce'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import Cookie from 'js-cookie'
// import Cookie from "js-cookie"


class Loginpage extends React.Component {
    state = {
        username: "",
        password: ""
    }
    onHandleLoginSubmit = async e => {
        e.preventDefault();
        try {
            const { data } = await tokenAuth(this.state.username, this.state.password)
            debugger
            console.log(data.token)
            Cookie.set('token', data.token) 
            // localStorage.setItem('token', data.Token)
            this.props.history.replace('/admin')
        } catch (ex) {
            if (ex.response && ex.response.status === 400)
                toast.error('نام کاربری یا رمز ورود اشتباه است')
        }
    }
    componentDidMount() {
        localStorage.clear();
    }


    render() {
        return (
            <div className="card shadow-lg card-position " style={{ width: "450px", height: "auto" }}>
                <div className="card-body">
                    <form onSubmit={this.onHandleLoginSubmit}>
                        <div className="form-group">
                            <span className="fa fa-user m-1" />
                            <label>نام کاربری</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Username"
                                onChange={event => this.setState({ username: event.target.value })} />
                        </div>
                        <div className="form-group">
                            <span className="fa fa-unlock-alt m-1" />
                            <label >رمز عبور</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Password"
                                onChange={event => this.setState({ password: event.target.value })} />
                        </div>
                        <div className="text-right">
                            <Link to="./" className="btn btn-danger text-light mb-2 w-25 p-2 m-1 ">بازگشت</Link>
                            <button type="submit" className="btn btn-primary mb-2 w-25 p-2 m-1 text-light">ورود</button>
                        </div>
                    </form>
                </div>
            </div >
        )
    }
}

export default Loginpage