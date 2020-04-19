import React, { Component } from 'react';
import { getUsers } from '../../Service/postService'
import { paginate } from '../../Utils/paginate';
import Pagination from '../Pagination';

class AllUsers extends Component {
    state = {
        users: [],
        currentPage: 1,
        pageSize: 5
    };

    async componentDidMount() {
        const { data } = await getUsers();
        this.setState({ users: data.users })
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
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
                                        onClick=""
                                    >
                                        ویرایش
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick=""
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
