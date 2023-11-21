'use client'

import React, { Component } from 'react';
import Toppro from '@/app/pages/topProfile';
import MyBreadcrum from '@/app/pages/breadrumb';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import BasicControl from '@/app/report/BasicControl';
import DismissibleControl from '@/app/report/DismissibleControl';
import TableControl from '@/app/report/TableControl';
import PagingControl from '@/app/report/PagingControl';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col,Row } from 'react-bootstrap';

export default function Page() {
    const breadItems = [{title:'進捗管理',link:'/report'}];
    return (
        <>
            {/* -- 内容区域 -- */}
            <Toppro>
                <MyBreadcrum param={breadItems} key='courseHomePageBread' />
            </Toppro>
            {/* <!-- 内容展示区域 --> */}
            <div id="content" className='contentstyle' key='courseHomePage'>
                {/* 【進捗管理】 页面 */}
                <Stack gap={1} key='courseHomePageStack'>
                    <div className="p-2" style={{fontSize:'30px',marginLeft:'20px'}}>進捗管理</div>
                </Stack>
                <Container fluid="fluid" style={{backgroundColor:'#fcfcfc',height:'100%',width:'95%',margin:'50px',padding:'30px'}}>
                    <Row>
                        <BasicControl msg={''}/>
                    </Row>
                    <Row>
                        <DismissibleControl/>
                    </Row>
                    <Row>
                        <TableControl/>
                    </Row>
                    <Row>
                        <Col className="mb-2">
                            <Stack direction="horizontal">
                                <div className="p-2 ms-auto">
                                    <PagingControl/>
                                </div>
                            </Stack>  
                        </Col>  
                    </Row>
                </Container>
            </div>
        </>
    )
}