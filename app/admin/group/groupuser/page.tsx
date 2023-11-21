'use client'

import Toppro from '@/app/pages/topProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import MyBreadcrum from '@/app/pages/breadrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BasicControl from '@/app/report/BasicControl';
import PagingControl from '@/app/report/PagingControl';
import GroupUserTableControl from '@/app/admin/group/GroupUserTableControl';

export default function Page() {
    const breadItems = [{title:'管理',link:'/admin'},{title:'グルーブ管理',link:'/admin/group'},{title:'グループユーザー一覧',link:'/admin/group/groupuser'}];
    return (
        <>
            {/* -- 内容区域 -- */}
            <Toppro>
                <MyBreadcrum param={breadItems} key='courseHomePageBread'/>
            </Toppro>
            <div id="content" className='contentstyle' key='courseHomePage'>
                <Stack direction="horizontal"  gap={1} key='courseHomePageStack'>
                    <div className="p-2" style={{fontSize:'30px',marginLeft:'20px',fontWeight:"bold"}}>グループユーザー一覧</div>
                </Stack>
                <Container fluid="fluid" style={{backgroundColor:'#FFFFFF',height:'100%',width:'95%',margin:'50px'}}>
                    <Row>
                        <BasicControl msg={''}/>
                    </Row>
                    <Row  style={{ margin: "20px" }}>
                        <div className="p-2 ms-auto">
                            <PagingControl/>
                        </div>
                    </Row>
                    <Row  style={{ margin: "20px" }}>
                        <GroupUserTableControl/>
                    </Row>
                    <Row  style={{ margin: "20px" }}>
                        <div id='bottom'>
                            <PagingControl/>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}