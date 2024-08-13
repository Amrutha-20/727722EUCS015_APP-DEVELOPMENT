import React from 'react'
import Sidebar from './components/Sidebar';
import styled  from 'styled-components';
import UserList from './pages/UserList';


const ApppContainer = styled.div`
  display: flex;
`;

const MaincContent = styled.div`
  flex-grow: 1;
  padding: 20px;
`;
const Ordercontent = () => {
  return (
      
<ApppContainer>
    <Sidebar />
    <MaincContent>
    <UserList />
    </MaincContent>
</ApppContainer>  
 )
}

export default Ordercontent;