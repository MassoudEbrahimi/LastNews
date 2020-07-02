import React, { Component } from 'react';
import { createUser } from '../../Service/postService';
import { toast } from "react-toastify"

class CreateUser extends Component {
    state = {
        username: "",
        password: "",
        email: "",
        userConfirmpassword: "",
        isactive: false,
    };

    handleSubmit = async event => {
        const { username, password, email, userConfirmpassword } = this.state
        debugger
        event.preventDefault();
        if (password !== userConfirmpassword
            || username === "" || email === "") toast.warning("لطفا اطلاعات اجباری را پر کنید")
        else {
            debugger
            try {
                const result = await createUser(JSON.parse(JSON.stringify(this.state)))
                if (result.status === 200) {
                    toast.success('کاربر جدید با موفقیت ثبت گردید')
                    this.setState({
                        username: "",
                        password: "",
                        email: "",
                        userConfirmpassword: "",
                    })
                }
            } catch (ex) {
                if (ex.response && ex.response.status === 400)
                    toast.error('لطفا کلیه موارد را پر کنید');
            }
        }
    }
    render() {
        return (
            <form
                className="form-group bg-light border rounded m-2 shadow p-5"
                onSubmit={this.handleSubmit}
            >
                <label className="col-md-4 control-label" htmlFor="txtTitle">
                    مشخصات فردی
                </label>
                <input
                    autoComplete="off"
                    id="txtname"
                    name="username"
                    type="text"
                    placeholder="نام"
                    className="form-control input-md m-2"
                    value={this.state.username}
                    onChange={e => this.setState({ username: e.target.value })}
                />
                <input
                    autoComplete="off"
                    id="txtEmail"
                    name="userEmail"
                    type="email"
                    placeholder="پست الکترونیکی"
                    className="form-control input-md m-2"
                    value={this.state.email}
                    onChange={e =>
                        this.setState({ email: e.target.value })
                    }
                />
                <input
                    autoComplete="off"
                    name="userPassword"
                    type="password"
                    placeholder="رمز عبور"
                    className="form-control input-md m-2"
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })}
                />
                <input
                    autoComplete="off"
                    name="userPassword"
                    type="password"
                    placeholder="تکرار رمز عبور"
                    className="form-control input-md m-2"
                    value={this.state.userConfirmpassword}
                    onChange={e => this.setState({ userConfirmpassword: e.target.value })}
                />
                <button className="btn btn-success m-5">ساخت کاربر جدید</button>
            </form>
        );
    }
}

export default CreateUser;
