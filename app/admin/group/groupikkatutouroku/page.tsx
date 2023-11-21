'use client'

import Toppro from '@/app/pages/topProfile';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import React, { Component } from 'react';
import MyBreadcrum from '@/app/pages/breadrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BasicControl from '@/app/report/BasicControl';
import GroupikkatutourokuControl from '@/app/admin/group/GroupikkatutourokuControl';

export default function Page() {
    const breadItems = [{title:'管理',link:'/admin'},{title:'グルーブ管理',link:'/admin/group'},{title:'グルーブ変更',link:'/admin/group/groupupdate/update'},
    {title:'グループメンバ一括登録',link:'/admin/group/groupupdate/groupikkatutouroku'}];
    return (
        <>
            {/* -- 内容区域 -- */}
            <Toppro>
                <MyBreadcrum param={breadItems} key='courseHomePageBread'/>
            </Toppro>
            <div id="content" className='contentstyle' key='courseHomePage'>
                <Stack direction="horizontal"  gap={1} key='courseHomePageStack'>
                    <div className="p-2" style={{fontSize:'30px',marginLeft:'20px',fontWeight:"bold"}}>グループメンバ一括登録</div>
                    <div className="p-2 ms-auto" style={{marginRight:'3%'}}>
                        <Button variant="primary">アップロード</Button>
                    </div>
                </Stack>
                <Container fluid="fluid" style={{backgroundColor:'#FFFFFF',height:'100%',width:'95%',margin:'50px'}}>
                    <Row>
                        <BasicControl msg={''}/>
                    </Row>
                    <Row style={{ margin: "20px" }}>
                        <GroupikkatutourokuControl/>
                    </Row>
                </Container>
            </div>
        </>
    )
}