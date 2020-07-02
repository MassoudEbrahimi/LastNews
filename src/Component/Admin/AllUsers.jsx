import React, { Component } from 'react';
import { getUser, deleteUser, createUser, updateUser } from '../../Service/postService'
import { paginate } from '../../Utils/paginate';
import Pagination from '../Pagination';
import { toast } from 'react-toastify';


class AllUsers extends Component {
    state = {
        users: [],
        currentPage: 1,
        pageSize: 5
    };

    async componentDidMount() {
        const { data } = await getUser();
        this.setState({ users: data.users })
    }
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    handleDeletePost = async id => {
        const originalUser = this.state.users;
        const users = this.state.users.filter(p => id !== p.id)
        this.setState({ users })
        try {
            const result = await deleteUser(id)
            if (result.state === 200) {
                toast.success("با موفقیت حذف گردید")
            }
        } catch (ex) {
            if (ex.response && ex.response.status === 404)
                toast.error('کاربری با این مشخصات یافت نشد')
            this.setState({ users: originalUser })
        }
    }
    handleRedirect = data => {
    

        this.props.history.push({
            pathname: '/admin/edituser',
            data
        });
    };
    getPageData = () => {
        const { pageSize, currentPage, users: allUsers } = this.state;
        const users = paginate(allUsers, currentPage, pageSize);

        return {
            totalCount: allUsers.length,
            data: users
        };
    };

    render() {
        const { pageSize, currentPage } = this.state;
        const { totalCount, data } = this.getPageData();
        return (
            <div className="bg-light m-3 p-4 border rounded">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>نام</th>
                            <th>پست الکترونیکی</th>
                            <th> رمز عبور</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(user => (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => this.handleRedirect(user)}
                                    >
                                        ویرایش
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => this.handleDeletePost(user.id)}
                                    >
                                        حذف
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    totalcount={totalCount}
                    pagesize={pageSize}
                    currentpage={currentPage}
                    handlepage={this.handlePageChange}
                />
            </div>
        );
    }
}

export default AllUsers;
