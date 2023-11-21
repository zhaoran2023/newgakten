
'use client'
import Toppro from '@/app/pages/topProfile'
import MyBreadcrum from '@/app/pages/breadrumb'
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
import { useState } from 'react';
import MltiSelectList from '@/components/MultipleSelection'
import {dataList} from '@/app/admin/course/create/tagsListData';
import { Badge, Modal } from 'react-bootstrap';
import AttachmentSelectList from './AttachmentSelList';

export const dynamicParams = false;
export default function PostPage({ params }: { params: { sug: string } }) {
    const breadItems = [{title:'管理',link:'/admin'},{title:'コース管理',link:'/admin/course'},{title:'コース登録',link:'/admin/course/create/'}];
    const [courseType,setCourseType] = useState('Dojo');//Dojo,問題,アンケート,ファイル
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const handleSubmit = (event:any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };

    return (
        <>
            {/* -- 内容区域 -- */}
            <Toppro><MyBreadcrum param={breadItems} key='courseAddPageBread' /></Toppro>
            {/* <!-- 内容展示区域 --> */}
            <div id="content" className='contentstyle' key='courseAddPage'>
                {/* 新規登録画面 开始 */}
                <Stack gap={1} key='courseAddPageStack01' direction="horizontal" style={{marginTop:'20px'}}>
                    <div className="p-2" key='course02pagediv001' style={{fontSize:'28px',marginLeft:'30px',fontWeight:"bold"}}>コース登録</div>
                </Stack>

                {/* 表单部分 */}
                <Container fluid="fluid" key='course02pagecontainer01' style={{backgroundColor:'#fcfcfc',borderRadius:'8px',height:'80vh',display:'float',overflowY:'scroll',width:'95%',margin:'20px 40px 0px 40px',padding:'40px'}} >
                <Form key="course02pageform001" noValidate  validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicText01" key="course02pagefgroup001">
                        <Form.Label key="course02pageflabel001">{courseType}コース名</Form.Label><Badge  key="course02pageicon001" pill bg='danger' style={{ marginLeft: 5, marginBottom: 10}}>必须</Badge>   

                        <Form.Control type="text" placeholder="Dojoコース名を入力してください" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText02" key="course02pagefgroup002">
                        <Form.Label  key="course02pageflabel002">{courseType}コース説明</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="コース説明を入力してください" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox" key="course02pagefgroup003">
                        <Form.Label  key="course02pageflabel003">コース種目</Form.Label>
                        <Form.Check type="radio" label={courseType} defaultChecked onClick={()=>{setCourseType('Dojo')}}/>
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3" key="course02pagefgroup004">
                        <Form.Label  key="course02pageflabel004">Dojoコースファイル(*.zip)</Form.Label><Badge key="course02pageicon002" pill bg='danger' style={{ marginLeft: 5, marginBottom: 10}}>必须</Badge>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Row className="mb-3"  key="course02pagerow01"><h5>タグ(コース)</h5></Row>
                    
                    {/* 这里是多选下拉组件 */}
                    <MltiSelectList param={dataList} pagekey='course02page'/>

                    <Form.Group className="mb-3" controlId="formBasicText02" key="course02pagefgroup005">
                        <Form.Label   key="course02pageflabel005">添付ファイル</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="添付ファイルを選択してください" />
                    </Form.Group>
                    <Button as="input" type="button" value="選択する" onClick={() => setShow(true)}  key="course02pagefbtn001" /><br/><br/>
                    
                    <Button variant="primary" type="submit"  key="course02pagefbtn002">保存する</Button>
                    
                    
                </Form>

                {/* 附件选择弹窗 */}
                <AttachmentSelectList popTitle='添付ファイル' propShow={show} func={() => setShow(false)}/>
                </Container>
            </div>
        </>
    )
}



  
