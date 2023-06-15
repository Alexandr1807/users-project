import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UsersTable from './components/UsersTable/UsersTable';
import { Layout, Space } from 'antd';
import UserProfile from './components/UserProfile/UserProfile';

function App() {
  const { Content } = Layout;

  
  const contentStyle: React.CSSProperties = {
    minHeight: '100vh',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#2f8f61',
  };

  return (
    <BrowserRouter>
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
          <Layout>
            <Content style={contentStyle}>
            <div className='container'>
              <Routes>
                <Route path="/" element={<UsersTable />}/>
                <Route path="user/:id" element={<UserProfile />}/>
                <Route path="*" element={<h1>Not page</h1>}/>
              </Routes>
            </div>
            </Content>
          </Layout>
        </Space>
    </BrowserRouter>
  );
}

export default App;