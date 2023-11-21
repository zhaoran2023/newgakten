'use client'
import React, { Component, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import DismissibleControl from '@/app/user/DismissibleControl';
import TableControl from '@/app/user/TableControl';
import PagingControl from '@/app/user/PagingControl';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ButtonToolbar, Modal } from 'react-bootstrap';
import { CiInboxIn } from "react-icons/ci";
import { AiOutlineCaretDown, AiFillPlusSquare } from "react-icons/ai";
import { useRouter } from 'next/navigation';

export default function Page() {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const router = useRouter();
   const gotUserDetailPage =()=>{
    router.push('/user/userDetailTabs');
}
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
       <strong>ユーザー管理</strong>
       </div>
       <ButtonToolbar aria-label="Toolbar with button groups">
       <ButtonGroup className="me-2" aria-label="First group">
        <Button
         variant="primary"
         onClick={handleShow}
         style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "5px",
         }}
        >
         <CiInboxIn
          style={{
           fontSize: 22,
          }}
         />
         エクスポート
        </Button>{" "}
        <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
          <Modal.Title>CSV出力</Modal.Title>
         </Modal.Header>
         <Modal.Body>
          全ての組織をCSV形式でタウンロードします。
         </Modal.Body>
         <Modal.Footer
          style={{ display: "flex", justifyContent: "space-between" }}
         >
          <Button
           variant="secondary"
           onClick={handleClose}
           style={{ backgroundColor: "white", color: "black" }}
          >
           キャンセル
          </Button>
          <Button variant="primary" onClick={handleClose}>
           ダウンロード
          </Button>
         </Modal.Footer>
        </Modal>
       </ButtonGroup>
       <ButtonGroup className="me-2" aria-label="Second group">
        <Button style={{ display: "flex", alignItems: "center" }}>
         一括操作
         <AiOutlineCaretDown />
        </Button>{" "}
       </ButtonGroup>
       <ButtonGroup aria-label="Third group">
        <Button style={{ display: "flex", alignItems: "center" }} onClick={gotUserDetailPage}>
         <AiFillPlusSquare />
         新規追加
        </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ユーザー新規登録</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
       </ButtonGroup>
</ButtonToolbar>
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
        <DismissibleControl/>
                        <TableControl/>
                        <PagingControl/>
        {/*--中间灰色背景--*/}
        
       </div>
       </div>
      </div>
      </>
      
    );
  }