
'use client'
import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Space, Tabs } from 'antd';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import '../scss/nav2.scss';
type TabPosition = 'left';

const Nav2: React.FC = () => {
    const [tabPosition, setTabPosition] = useState<TabPosition>('left');
    const [activeKey, setActiveKey] = useState('1');

    const changeTabPosition = (e: RadioChangeEvent) => {
        setTabPosition(e.target.value);
    };

    const handleTabHover = (key: string) => {
        setActiveKey(key);
    };
    const tabList = [
        {
            key: 'tab1', title: 'Popular destinations', content: [
                { topic: '', name: '', provice: '' },

            ], picture: [
                { image: 'https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/j6qewd8nu90qsxynwg9o.webp', locate: 'Australia' },
                { image: 'https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/ma2flmh7fal5visbuiy3.webp', locate: 'Da Nang' },
                { image: 'https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/otv8vrjkqxriwlvbld8o.webp', locate: 'Sapa' },
                { image: 'https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/lwlid7jn0quxuonwabzk.webp', locate: 'Ho Chi Minh  City' },
                { image: 'https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/j6qewd8nu90qsxynwg9o.webp', locate: 'Australia' },
                { image: 'https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/ma2flmh7fal5visbuiy3.webp', locate: 'Da Nang' },
                { image: 'https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/otv8vrjkqxriwlvbld8o.webp', locate: 'Sapa' },
                { image: 'https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/lwlid7jn0quxuonwabzk.webp', locate: 'Ho Chi Minh City' },
                { image: 'https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/j6qewd8nu90qsxynwg9o.webp', locate: 'Australia' },
                { image: 'https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/ma2flmh7fal5visbuiy3.webp', locate: 'Da Nang' },
                { image: 'https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/otv8vrjkqxriwlvbld8o.webp', locate: 'Sapa' },
                { image: 'https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/lwlid7jn0quxuonwabzk.webp', locate: 'Ho Chi Minh  City' },
            ]
        },
        {
            key: 'tab2', title: 'East Asia', content: [
                { topic: 'Select a country or city to explore', name: 'HongKong & MaCau', provice: 'HongKong , MaCau' },
                { name: 'TaiWan', provice: 'Taipie Yiland Taipie Yiland Taipie Yiland' },
                { name: 'Jabpan', provice: 'Taipie Yiland Taipie Yiland Taipie Yiland Taipie Yiland Taipie Yiland' },
                { name: 'MaindLand China', provice: 'Taipie Yiland Taipie Yiland Taipie Yiland Taipie Yiland Taipie Yiland Taipie Yiland Taipie Yiland Taipie Yiland Taipie Yiland Taipie Yiland Taipie Yiland Taipie Yiland Taipie Yiland Taipie Yiland' },
            ],
        },
        // { key: 'tab3', title: 'South East Asia', content: 'content3' },
        // { key: 'tab4', title: 'South Asia / Middle East', content: 'content2' },
        // { key: 'tab5', title: 'Oceania', content: 'content3' },
        // { key: 'tab6', title: 'Europe / Africa', content: 'content2' },
        // { key: 'tab7', title: 'North America', content: 'content3' },
    ];
    return (
        <Container className='nav2'>

            <Tabs style={{ border: '1px solid gray', width: '900px', height: '550px' }}
                activeKey={activeKey}
                tabPosition={tabPosition}
                items={tabList?.map((item, i) => {
                    const id = String(item.key);
                    return {
                        label: (
                            <div className='label' onMouseEnter={() => handleTabHover(id)} >
                                <div className='title'>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        ),
                        key: id,
                        children: (
                            <>
                                <div className='row mt-3'>
                                    {item.picture?.map((p) => (
                                        <>
                                            <div className='col-3'>
                                                <img src={p.image} width={140} height={74} alt="" style={{ borderRadius: '6px' }} />
                                                <p style={{ position: 'relative', color: 'white', fontSize: '16px', fontWeight: '500', bottom: '15px', left: '10px' }}>{p.locate}</p>
                                            </div>

                                            {/* <div style={{ position: 'relative', right: '122px', top: '48px', color: 'red', fontSize: '16px', fontWeight: '500' }}>
                                                <p>{p.locate}</p>
                                            </div> */}
                                        </>
                                    ))}
                                </div>
                                <div className='cont'>
                                    {item.content?.map((c) => (
                                        <>
                                            <p>{c.topic}</p>
                                            <div className='row'>
                                                <div className='col-lg-5'><p style={{ fontSize: '18px', fontWeight: 500, padding: '20px' }}>{c.name}</p></div>
                                                <div className='col-lg-7' style={{ height: '100px' }}><p style={{ fontSize: '16px', fontWeight: 500, padding: '20px', color: "gray" }}>{c.provice}</p></div>
                                            </div>
                                        </>
                                    ))}

                                </div>
                            </>
                        ),
                    }
                })}

            />
        </Container >

    )
}

export default Nav2;