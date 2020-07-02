import React from 'react';
import Navigation from './Component/Navbar'
import Sidebar from './Component/SideBar'
import Posts from "./Component/Posts"
import Footer from './Component/Footer'
import { ToastContainer } from 'react-toastify'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <ToastContainer />
        <Navigation />
        <div className="container-fluid rtl">
          <div className="row">
            <Sidebar />
            <main
              role="main"
              className="col-md-9 ml-sm-auto col-lg-9 px-4"
            >
              <Posts />
            </main>
          </div>
          <Footer />
        </div>

      </>
    )
  }
}

export default App;
