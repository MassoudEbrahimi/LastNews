import React from 'react'
import { Link } from 'react-router-dom'

class Navigation extends React.Component {
    state = {
        flag: false
    }
    handleTypenews = (event) => {
        this.setState({ flag: !event.flag })
    }
    render() {
        const { flag } = this.state
        return (
            <nav className="nav navbar-dark flex-md-row flex-sm-row flex-wrap f bg-dark text-light p-1 sticky-top position-sticky rtl" >
                <div className="nav navbar-dark bg-dark">
                    <Link to="/" className="nav-item nav-link text-light bg-danger rounded text-nowrap font-title">اخبار روزانه</Link>
                    <Link to="/" className="nav-item nav-link text-light text-nowrap font-link">خانه</Link>
                    <Link to="#" className="nav-item nav-link text-light text-nowrap font-link rounded" onClick={this.handleTypenews} style={{ backgroundColor: "purple" }}> عناوین اخبار</Link>
                    <Link to="/Contactus" className="nav-item nav-link text-light text-nowrap font-link">تماس</Link>
                    {flag === true ? (
                        <div className="d-inline-flex ml-lg-auto ml-md-auto ml-sm-auto m-auto d-lg-flex d-md-flex d-sm-flex">
                            <Link to="./" className="nav-item nav-link text-light text-nowrap font-link m-1" style={{ backgroundColor: "coral" }}>ورزشی</Link>
                            <Link to="./" className="nav-item nav-link text-light text-nowrap font-link m-1" style={{ backgroundColor: "coral" }}>عمومی</Link>
                            <Link to="./" className="nav-item nav-link text-light text-nowrap font-link m-1" style={{ backgroundColor: "coral" }}>جوانان</Link>
                            <Link to="./" className="nav-item nav-link text-light text-nowrap font-link m-1" style={{ backgroundColor: "coral" }}>بین المللی</Link>
                        </div>) : null}
                </div>
                <Link to="/login" className="ml-lg-auto ml-md-auto ml-sm-auto m-auto  nav-item nav-link text-light bg-success rounded  font-title">ورود</Link>
            </nav>
        )
    }
}
export default Navigation