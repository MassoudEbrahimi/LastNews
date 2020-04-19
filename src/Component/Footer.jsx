import React from 'react'


const Footer = () => {
    return (
        <nav className="nav navbar fixed-bottom navbar-dark bg-dark rtl col-md-9 col-lg-9 ml-sm-auto sm px-4 float-left shadow text-light">
            <div className="float-right">
                <span className="fa fa-copyright m-1" />
                تمامی حقوق سایت محفوظ می باشد
              </div>
            <div className="float-left social-media">
                <a href="https://www.facebook.com/" className="fa fa-facebook-square social-media"> </a>
                <a href="https://twitter.com/" className="fa fa-twitter social-media" > </a>
                <a href="https://www.instagram.com/" className="fa fa-instagram social-media"> </a>
                <a href="https://github.com/" className="fa fa-github social-media"> </a>
            </div>
        </nav>
    )
}
export default Footer
