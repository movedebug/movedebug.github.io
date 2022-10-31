import StarMaskOnboarding from '@starcoin/starmask-onboarding';
import { Button, Col, Row, Statistic } from 'antd';
import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setInitial, setAccount } from "../feature/global";

const initialStarCoin = () => {
    const currentUrl = new URL(window.location.href);
    const forwarderOrigin =
        currentUrl.hostname === 'localhost' ? 'http://localhost:9032' : undefined;

    const isStarMaskInstalled = StarMaskOnboarding.isStarMaskInstalled();
    const isStarMaskConnected = false;

    let onboarding;
    try {
        onboarding = new StarMaskOnboarding({ forwarderOrigin });
    } catch (error) {
        console.error(error);
    }

    return {
        isStarMaskInstalled,
        isStarMaskConnected,
        onboarding,
        account: "none"
    };
};

const Home = () => {
    useEffect(() => {
        document.title = "welcome to move debug world";
        console.log("useEffect")
    });
    // const global = useSelector((state) => state.global);
    // const counter = useSelector((state) => state.counter);
    const initial = initialStarCoin();
    // const dispath = useDispatch();
    // dispath(setInitial(
    //     { isStarMaskInstalled: initial.isStarMaskInstalled, isStarMaskConnected: initial.isStarMaskConnected }
    // ));

    const [globalState, updateGlobal] = useState(initial);
    const connectStarmask = async () => {
        let accounts = await window.starcoin.request({
            method: 'stc_requestAccounts',
        });
        // dispath(setAccount(accounts));
        // console.log(accounts);
        // dispath(increment());
        updateGlobal({
            isStarMaskInstalled: true,
            isStarMaskConnected: true,
            account: accounts[0]
        });
    };

    return (
        <Row>
            <Col span={6}>
                <Statistic title="Starmask installed" value={globalState.isStarMaskInstalled} />
                {
                    globalState.isStarMaskInstalled ||
                    <Button onClick={() => { initial.onboarding.startOnboarding(); }}>Click install starmask</Button>
                }
            </Col>
            <Col span={6}>
                <Statistic title="Starmask connected" value={globalState.isStarMaskConnected} />
                {
                    globalState.isStarMaskConnected ?
                        <p>{globalState.account}</p>
                        :
                        <Button type='primary' onClick={connectStarmask}>Connect Starmask</Button>
                }
            </Col>
        </Row >
    );
}

export default Home;