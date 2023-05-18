import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import UserListSection from './section-components/user-list';
import Footer from './global-components/footer';

const UserList = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="User List" />
        <UserListSection />
        <Footer />
    </div>
}

export default UserList

