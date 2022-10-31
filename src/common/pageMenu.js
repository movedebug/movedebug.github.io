import {
    HomeOutlined,
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate, useLocation } from "react-router-dom";

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Home', '/', <HomeOutlined />),
    getItem('Hello', '/hello', <DesktopOutlined />),
    getItem('Option 1', '/1', <PieChartOutlined />),
    getItem('User', '/sub1', <UserOutlined />, [
        getItem('Tom', '/3'),
        getItem('Bill', '/4'),
        getItem('Alex', '/5'),
    ]),
    getItem('Team', '/sub2', <TeamOutlined />, [getItem('Team 1', '/6'), getItem('Team 2', '/8')]),
    getItem('Files', '/9', <FileOutlined />),
];


const PageMenu = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    return (
        <Menu
            theme="dark"
            defaultSelectedKeys={[location.pathname]}
            mode="inline"
            items={items}
            onClick={({ key }) => {
                navigate(key);
            }}
        />
    );
}

export default PageMenu;