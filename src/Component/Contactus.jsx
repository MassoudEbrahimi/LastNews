import React from 'react'
import "../CSS/Contactus.css"
import { Link } from 'react-router-dom'

class Contactus extends React.Component {
    state = {
        fullname: "",
        email: "",
        phone: "",
        subject: "",
        text: ""
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <>
                <div className="text-center col-lg-6 offset-lg-3 col-md-8 offset-md-2" style={{ marginTop: "60px" }}>
                    <div className="card shadow-lg card-position w-auto rtl m-1" style={{ width: "auto", height: "auto" }}>
                        <div className="card-body" >
                            <form action="" id="form" onSubmit={this.handleSubmit} >
                                <div className="form-group">
                                    <span className="fa fa-user m-2 fa-icon" aria-hidden="true" />
                                    <input type="text" className="form-control m-1  col-12" onChange={e => this.setState({ fullname: e.target.value })} placeholder="نام و نام خانوادگی" />
                                </div>
                                <div className="form-group ">
                                    <span className="fa fa-envelope m-2 fa-icon" aria-hidden="true" />
                                    <input type="email" className="form-control m-1  col-12" onChange={e => this.setState({ email: e.target.value })} placeholder="ایمیل" />
                                </div>
                                <div className="form-group">
                                    <span className="fa fa-phone m-2 fa-icon" aria-hidden="true" />
                                    <input type="text" className="form-control m-1  col-12" onChange={e => this.setState({ phone: e.target.value })} placeholder="شماره تلفن" />
                                </div>
                                <div className="form-group">
                                    <span className="fa fa-object-ungroup m-2 fa-icon" aria-hidden="true" />
                                    <input type="text" className="form-control m-1  col-12" onChange={e => this.setState({ subject: e.target.value })} placeholder="موضوع" />
                                </div>
                                <div className="form-group">
                                    <span className="fa fa-commenting m-2 fa-icon" aria-hidden="true" />
                                    <textarea className="form-control textarea m-1  col-12" onChange={e => this.setState({ text: e.target.value })} style={{ height: "100px" }} placeholder="متن پیام"></textarea>
                                </div>
                                <input className="btn btn-success text-light m-1 p-2 float-right" type="submit" form="form" value="ارسال" />
                                <Link className="btn btn-danger text-light m-1 p-2 float-left" to="/">بازگشت</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Contactus
