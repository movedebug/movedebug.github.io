import { Layout } from 'antd';

const { Header } = Layout;

const PageHeader = () => {
    const headerScript = `Debug::print(&u);`;
    return (
        <Header
            className="site-layout-background"
            style={{
                marginLeft: 20,
                fontWeight: "bold",
                textAlign: "center"
            }}
        >{headerScript}</Header>
    );
}
export default PageHeader;