'use client'
import { lusitana } from '@/app/ui/fonts';
import Toppro from '@/app/pages/topProfile'
import MyBreadcrum from '@/app/pages/breadrumb'
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import { AiFillFilter,AiFillCaretDown , AiFillCaretUp } from "react-icons/ai";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import PagingControl from '@/components/PagingControl';
import { RiAddBoxFill } from "react-icons/ri";
import MySearchForm from '@/app/admin/course/searchform';
import MyTabelList from '@/app/admin/course/tablelist';
import { useRouter } from 'next/navigation';


export default function Page() {
    const breadItems = [{title:'管理',link:'/admin'},{title:'コース管理',link:'/admin/course'}];
    const [showA, setShowA] = useState(true);
    const myroute = useRouter();
    const gotoNewPageFunc = ()=>{
        myroute.push('/admin/course/create/');
    }
    return (
        <>
            {/* -- 内容区域 -- */}
            <Toppro>
                <MyBreadcrum param={breadItems} key='courseHomePageBread' />
            </Toppro>
            {/* <!-- 内容展示区域 --> */}
            <div id="content" className='contentstyle' key='courseHomePage'>
                
                {/* 【コース管理】 页面 */}
                <Stack gap={1} key='courseHomePageStack01' direction="horizontal" style={{marginTop:'20px'}}>
                    <div className="p-2" key='course01pagediv001' style={{fontSize:'28px',marginLeft:'30px',fontWeight:"bold"}}>コース管理</div>
                    <div className="p-2 ms-auto" key='course01pagediv002' style={{marginRight:'40px'}}>
                        <Button key="course01pagebtn001" onClick={gotoNewPageFunc}>
                            <RiAddBoxFill key="course01pageicon003" style={{size:20,display:'inline-block',color:'#fff',marginRight:'10px'}} />
                            新規追加
                        </Button>
                    </div>
                </Stack>
                <Container fluid="fluid" key='course01pagecontainer01' style={{backgroundColor:'#fcfcfc',height:'100%',width:'95%',borderRadius:'8px',margin:'20px 40px 0px 40px'}} >
                    <Row>
                        <Col>
                        <Accordion defaultActiveKey={['0']} bsPrefix="buttn" key="course01pageaccording001" >
                            <Accordion.Item eventKey="0" key="course01pageaccoritem001">
                                <Accordion.Header style={{marginLeft:'30px'}} onClick={() => {setShowA(!showA)}}  key="course01pageaccorhead001">
                                <Stack direction="horizontal" gap={3} key='courseHomePageStack02'>
                                    <div className="p-2"  key='course01pagediv003'>
                                    <AiFillFilter style={{display: 'inline-block'}} key="course01pageicon001" />絞り込み
                                    <AiFillCaretDown hidden ={showA} style={{display: 'inline-block'}} key="course01pageicon002"/>
                                    <AiFillCaretUp hidden ={!showA} style={{display: 'inline-block'}} key="course01pageicon004"/>
                                    </div>
                                    <div className="p-2 ms-auto" style={{width:'125vh'}} key="course01pagediv004"></div>
                                    <div className="p-2" style={{display:'inline-block'}}  key="course01pagediv005">
                                        <PagingControl/>
                                    </div>
                                </Stack>
                                </Accordion.Header>

                                <Accordion.Body style={{margin:'0px 30px 30px 30px'}}  key="course01pageaccbody001">
                                    {/* 查询表单 */}
                                    <MySearchForm/>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {/* 数据列表 */}
                            <MyTabelList/>
                            <Stack direction="horizontal" gap={3}  key='courseHomePageStack03'>
                                <div className="p-2" key='course01pagediv009'></div>
                                <div className="p-2 ms-auto"  key='course01pagediv010'></div>
                                <div className="p-2" style={{marginRight:'50px'}} key='course01pagediv011'><PagingControl/></div>
                            </Stack>
                        </Col>
                    </Row>
                </Container>


            </div>
        </>
    )
}