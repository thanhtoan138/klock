'use client'
import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Space, Tabs } from 'antd';

type TabPosition = 'left';

const App: React.FC = () => {
    const [tabPosition, setTabPosition] = useState<TabPosition>('left');
    const [activeKey, setActiveKey] = useState('1');

    const changeTabPosition = (e: RadioChangeEvent) => {
        setTabPosition(e.target.value);
    };

    const handleTabHover = (key: string) => {
        setActiveKey(key);
    };

    return (
        <>
            <Space style={{ marginBottom: 24 }}>
                Tab position:
                <Radio.Group value={tabPosition} onChange={changeTabPosition}>
                    <Radio.Button value="top">top</Radio.Button>
                    <Radio.Button value="bottom">bottom</Radio.Button>
                    <Radio.Button value="left">left</Radio.Button>
                    <Radio.Button value="right">right</Radio.Button>
                </Radio.Group>
            </Space>
            <Tabs
                activeKey={activeKey}
                tabPosition={tabPosition}
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                        label: (
                            <div onMouseEnter={() => handleTabHover(id)}>
                                {`Tab ${id}`}
                            </div>
                        ),
                        key: id,
                        children: `Content of Tab ${id}`,
                    };
                })}
            />
        </>
    );
};

export default App;