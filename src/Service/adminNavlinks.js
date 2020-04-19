const adminNavLinks = [
    {
        id: 1,
        text: 'ساخت پست جدید',
        link: '/admin/create-post',
        icon: 'fa fa-plus feather'
    },
    {
        id: 2,
        text: 'لیست پست ها',
        link: '/admin/allposts',
        icon: 'fa fa-list feather'
    },
    {
        id: 3,
        text: 'ساخت کاربر جدید',
        link: '/admin/create-user',
        icon: 'fa fa-plus feather'
    },
    {
        id: 4,
        text: 'لیست تمامی کاربران',
        link: '/admin/allUsers',
        icon: 'fa fa-list feather'
    }
];

const getAdminNavLinks = () => {
    return [...adminNavLinks];
};

export default getAdminNavLinks;
