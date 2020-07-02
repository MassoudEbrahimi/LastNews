import React, { Component } from 'react';
import { createUser } from '../../Service/postService';
import { toast } from "react-toastify"

class CreateUser extends Component {
    state = {
        username: "",
        password: "",
        email: "",
        isactive: false,
    };

    handleSubmit = async event => {

        event.preventDefault();
        if (this.state.password === this.state.userConfirmpassword
            & this.state.username !== "" &
            this.state.userLastname !== "" &
            this.state.email !== "") {
            const result = await createUser(
                JSON.parse(JSON.stringify(this.state))
            )
            if (result.status === 200) toast.success('کاربر جدید با موفقیت ثبت گردید')
        }
        else if (this.state.username === "" ||
            this.state.userLastname === "" ||
            this.state.email === "") {
            toast.error('اطلاعات اجباری را وارد کنید')
        }
        else {
            toast.error('رمز عبور با همدیگر تطابق ندارد')
        }

    };


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
