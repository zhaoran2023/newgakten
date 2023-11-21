'use client'
import React, { Component, useState } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, ButtonToolbar, InputGroup, Modal } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { json } from 'stream/consumers';
import { useParams } from 'next/navigation';

function UserInfoFormPage(){

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event:any) => {
    
    const form = event.currentTarget;
    
    const noMailTargetFlg = form.noMailTargetFlg.checked;
    const authCd = form.authCd.value;
    const userId = form.userId.value;
    // const aaa = {"noMailTargetFlg":noMailTargetFlg, "authCd":authCd,"userId":userId};
    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
      <span>
        <Form.Label>ユーザーID</Form.Label>
        
        <Badge pill bg = "danger" style={{ marginLeft: 5, marginBottom: 10 }}>必須</Badge>
      </span>
        
        <Form.Control id='userId' type="string" placeholder="ユーザーIDを入力してくたさい" required/>
        <Form.Control.Feedback type="invalid">
        ユーザーIDは1~32文字で入力してください。
          </Form.Control.Feedback>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <span>
            <Form.Label>氏</Form.Label>
            <Badge pill bg = "danger" style={{ marginLeft: 5, marginBottom: 10 }}>必須</Badge>
          </span>
          
          <Form.Control id='familyName' type="string" placeholder="氏を入力してくたさい" required/>
          <Form.Control.Feedback type="invalid">
          氏は1~32文字で入力してください。
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col}>
          <span>
            <Form.Label>名</Form.Label>
            <Badge pill bg = "danger" style={{ marginLeft: 5, marginBottom: 10 }}>必須</Badge>
          </span>
          <Form.Control id='firstName' type="string" placeholder="名を入力してくたさい" required/>
          <Form.Control.Feedback type="invalid">
          名は1~32文字で入力してください。
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <span>
            <Form.Label>ユーザー名(かな)</Form.Label>
            <Badge pill bg = "danger" style={{ marginLeft: 5, marginBottom: 10 }}>必須</Badge>
          </span>
        </Form.Group>
      </Row>
      <Row className="mb-3" style={{marginTop : -12}}>
        <Form.Group as={Col}>
          <Form.Control id='familyNameKana' type="string" placeholder=""/>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Control id='firstNameKana' type="string" placeholder="" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>メールアドレス</Form.Label>
        <Form.Control id='mail' type="mail" placeholder="メールアドレスを入力してくたさい"/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>権限</Form.Label>
          <Form.Select aria-label="Default select example" id='authCd'>
        <option value='0' defaultChecked>受講者</option>
        <option value="1">学習管理者</option>
        <option value="2">社内管理者</option>
        <option value="4">進捗管理者</option>
      </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
          <span>
            <Form.Label>所属組織</Form.Label>
            <Badge pill bg = "danger" style={{ marginLeft: 5, marginBottom: 10 }}>必須</Badge>
          </span>

              <InputGroup className="mb-3">
              <Form.Control
              required
              placeholder="組織を選択して下さい"
              aria-label=""
              aria-describedby="basic-addon2"
              />
              
              <Button variant="outline-secondary" id="departSelect" style={{ background :'#0D78D4', color:'white'}}>
              選択
              </Button>
              <Form.Control.Feedback type="invalid">
              組織を入力する必要がある。
          </Form.Control.Feedback>
          </InputGroup>
          
      </Form.Group>
      
      <Form.Group className="mb-3">
          <span>
            <Form.Label>パスワード(入力有りなら更新)</Form.Label>
            <Badge pill bg = "danger" style={{ marginLeft: 5, marginBottom: 10 }}>必須</Badge>
          </span>
        <Form.Control id='password' type="password" placeholder="パスワードを入力してくたさい" required/>
      </Form.Group>

      <Row className="mb-3">
      <Form.Label>メール配信設定</Form.Label>
        <Form.Group as={Col} className="mb-3">
          <Form.Check
                inline
                label="メールを通知しない"
                name="group1"
                type='checkbox'
                id={`noMailTargetFlg`}
              />
        </Form.Group>

      </Row>
      <Button type="submit">登録</Button>
      {/* <ButtonGroup className="me-2" aria-label="Second group">
      <Button id = 'btn_userInfoSave' style={{ display: "flex", alignItems: "center" }} onClick={userInfoFormSave}>
        登録
        </Button>{" "}
      </ButtonGroup> */}
    </Form>
  );
}

function UserFormTabs() {
  return (
    <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="ユーザー情報" style={{width : 500}}>
      <UserInfoFormPage/>
      </Tab>
      <Tab eventKey="profile" title="参照可能組織">
        Tab content for Profile
      </Tab>
    </Tabs>
  );
}
export default function Page() { 
  const [show, setShow] = useState(false);
  const params = useParams();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   return (
     <>
     <div className='quanju'>
       {/*--顶部--*/}
       <div id='top'>
       
       </div>
       {/*--中间--*/}
       <div style={{
       width: "100%",
       height: "calc(100% - 50px)",
       flexDirection: "column",
       padding: 10,
       boxSizing: "border-box",
       backgroundColor: "#f0f2f5"
     }}>

      {/*--title--*/}
      <div style={{ height: 40, display:"flex", justifyContent:"space-between" , width : "100%", alignItems: "center", background : "#f0f2f5"}}>
      <div style={{ fontSize: 20, fontWeight: 30}}>
      <strong>ユーザー新規登録</strong>
      </div>
      
      </div>

      {/*--背景颜色为白色部分--*/}
      <div
       style={{
         background: "#FFFFFF",
         boxSizing: "border-box",
         padding: 30,
         borderRadius: 10,
         height: "calc(100% - 10px)"
       }}
     >
       {/*--顶部--*/}
       <UserFormTabs/>
       {/*--中间灰色背景--*/}
       
      </div>
      </div>
     </div>
     </>
     
   );
 }
