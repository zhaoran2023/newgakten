'use client'

import React, { Component } from 'react';
import Toppro from '@/app/pages/topProfile';
import MyBreadcrum from '@/app/pages/breadrumb';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BasicControl from '@/app/report/BasicControl';
import TableControl from '@/app/report/reportOrganization/reportByOrganization/TableControl';
import PagingControl from '@/app/report/PagingControl';
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Page() {
    const breadItems = [{title:'進捗管理',link:'/report'},
                        {title:'進捗管理 (Dojoコース-組織一覧)',link:'/report/reportOrganization'},
                        {title:'進捗管理 (Dojoコース-組織別一覧)',link:'/report/reportDetailed/reportByOrganization'}];
    return (
        <>
            {/* -- 内容区域 -- */}
            <Toppro>
                <MyBreadcrum param={breadItems} key='courseHomePageBread' />
            </Toppro>
            {/* <!-- 内容展示区域 --> */}
            <div id="content" className='contentstyle' key='courseHomePage'>
                {/* 【進捗管理】 页面 */}
                <Stack direction="horizontal"  gap={1} key='courseHomePageStack'>
                    <div className="p-2" style={{fontSize:'30px',marginLeft:'20px',fontWeight:"bold"}}>進捗管理 (Dojoコース-組織別一覧)</div>
                </Stack>
                <Container fluid="fluid" style={{backgroundColor:'#fcfcfc',height:'100%',width:'95%',margin:'50px',padding:'30px'}}>
                    <Row>
                        <BasicControl msg={''}/>
                    </Row>
                    <Row>
                        <text style={{ fontSize: 20, fontWeight:"bold"}}>カリキュラム名</text>
                    </Row>
                    <Row>
                        <text style={{ fontSize: 18}}>受講済みの確認</text>
                    </Row>
                    <Row>
                        <text style={{ fontSize: 20, fontWeight:"bold"}}>コース名</text>
                    </Row>
                    <Row>
                        <Stack direction="horizontal" gap={0} key='courseHomePageStack'>
                            <div className="p-2"><Image src='/Dojo.png' width={25} height={25} alt="Dojo"/></div>
                            <div className="p-2"><text style={{ fontSize: 18}}>《サンプル》ISO理解度テスト</text></div>
                        </Stack>
                    </Row>
                    <Row>
                        <text style={{ fontSize: 20, fontWeight:"bold"}}>組織名</text>
                    </Row>
                    <Row>
                        <text style={{ fontSize: 18}}>ナビゲーションセールス課</text>
                    </Row>
                    <Row>
                        <text style={{ fontSize: 20, fontWeight:"bold"}}>受講状況</text>
                    </Row>
                    <Row>
                        <text style={{ fontSize: 18}}>[合格率]100% (1/1)</text>
                        <text style={{ fontSize: 18}}>[実施率]100% (1/1)</text>
                    </Row>
                    <Row><div><PagingControl/></div></Row>
                    <Row>
                        <TableControl/>
                    </Row>
                    <Row><div><PagingControl/></div></Row>
                </Container>
            </div>
        </>
    )
}