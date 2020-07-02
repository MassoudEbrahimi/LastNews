import React from 'react';
import Navigation from '../Admin/Navbar'
import Sidebar from '../Admin/SideBar'
import CreatePost from "./createPost"
import AllPosts from "./allPosts"
import CreateUser from "./CreateUsers"
import AllUsers from "./AllUsers"
import { Switch, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import EditUser from './editUsers';
import EditPost from './editPosts';
import LogOut from './Logout';
import { ToastContainer } from 'react-toastify';

class Dashboard extends React.Component {
    render() {
        return (
            <>
                <Navigation />
                <div className="container-fluid rtl">
                    <ToastContainer />
                    <div className="row">
                        <Sidebar />
                        <main
                            role="main"
                            className="col-md-9 ml-sm-auto col-lg-9 px-4"
                        >
                            <Switch>
                                <Switch>
                                    <Route
                                        path="/admin/create-post"
                                        component={CreatePost}
                                    />
                                    <Route
                                        path="/admin/allposts"
                                        component={AllPosts}
                                    />
                                    <Route
                                        path="/admin/editPost"
                                        component={EditPost}
                                    />
                                    <Route
                                        path="/admin/create-user"
                                        component={CreateUser}
                                    />
                                    <Route
                                        path="/admin/allUsers"
                                        component={AllUsers}
                                    />
                                    <Route
                                        path="/admin/edituser"
                                        component={EditUser}
                                    />
                                    <Route
                                        path="/admin/logout"
                                        component={LogOut}
                                    />

                                </Switch>
                            </Switch>
                        </main>
                    </div>
                </div>
            </>
        )
    }
}

export default Dashboard;
