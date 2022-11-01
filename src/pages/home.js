import StarMaskOnboarding from '@starcoin/starmask-onboarding';
import { Button, Col, Row, Statistic } from 'antd';
import { useEffect, useState } from 'react';
import { providers } from "@starcoin/starcoin";

export const COUNTER_ADDRESS = "0x1168e88ffc5cec53b398b42d61885bbb"
export const COUNTER_RESOURCE_ID = "MyCounter::Counter"
export const INCR_COUNTER_FUNC_NAMW = "MyCounter::incr_counter"
export const INCR_COUNTERBY_FUNC_NAME = "MyCounter::incr_counter_by"

const getResource = async (address, functionId) => {

    let starcoinProvider = new providers.Web3Provider(
        window.starcoin,
        "any"
    );

    const resourceType = `${address}::${functionId}`
    const resource = await starcoinProvider.getResource(address, resourceType)
    console.log(resource)
    return resource
}


const initialStarCoin = () => {
    const currentUrl = new URL(window.location.href);
    const forwarderOrigin =
        currentUrl.hostname === 'localhost' ? 'http://localhost:9032' : undefined;

    const isStarMaskInstalled = StarMaskOnboarding.isStarMaskInstalled();
    const isStarMaskConnected = false;

    let onboarding;
    try {
        const
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


    const [counter, updateCounter] = useState(100);

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

            <Col span={6}>
                <p>Current Value : <b>{counter}</b> </p>
                <p>
                    <Button type='primary' onClick={() => {
                        updateCounter(-1);
                    }}>Load From Contract</Button>
                    <Button onClick={() => {
                        updateCounter(counter + 5);
                    }}>Increment</Button>
                </p>
            </Col>
        </Row >
    );
}

export default Home;