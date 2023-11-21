'use client'

import Toppro from '@/app/pages/topProfile';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillPlusSquare } from "react-icons/ai";
import MyBreadcrum from '@/app/pages/breadrumb';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BasicControl from '@/app/report/BasicControl';
import DismissibleControl from '@/app/admin/group/DismissibleControl';
import TableControl from '@/app/admin/group/TableControl';
import PagingControl from '@/app/admin/group/PagingControl';
import { useRouter } from 'next/navigation';

export default function Page() {
    const breadItems = [{title:'管理',link:'/admin'},{title:'グルーブ管理',link:'/admin/group'}];
    const router = useRouter();
    const groupInsertPage =()=>{
        // router.push('/admin/group/groupupdate/insert');
    }
    return (
        <>
            {/* -- 内容区域 -- */}
            <Toppro>
                <MyBreadcrum param={breadItems} key='courseHomePageBread'/>
            </Toppro>
            <div id="content" className='contentstyle' key='courseHomePage'>
                <Stack direction="horizontal"  gap={1} key='courseHomePageStack'>
                    <div className="p-2" style={{fontSize:'30px',marginLeft:'20px',fontWeight:"bold"}}>グルーブ管理</div>
                    <div className="p-2 ms-auto" style={{marginRight:'3%'}}>
                        <Button variant="primary"  
                        onClick={groupInsertPage} 
                        style={{display: 'flex', alignItems: 'center'}}>
                        <AiFillPlusSquare style={{margin:"5px" }}/>新規追加</Button>
                    </div>
                </Stack>
                <Container fluid="fluid" style={{backgroundColor:'#FFFFFF',height:'100%',width:'95%',margin:'50px'}}>
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
                        <div id='bottom'><PagingControl/></div>
                    </Row>
                </Container>
            </div>
        </>
    )
}