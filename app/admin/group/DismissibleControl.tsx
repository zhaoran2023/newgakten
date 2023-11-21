import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import Form from "react-bootstrap/Form";
import Stack from 'react-bootstrap/Stack';
import PagingControl from '@/app/report/PagingControl';
import { AiFillFilter,AiFillCaretDown , AiFillCaretUp } from "react-icons/ai";
import InputGroup from 'react-bootstrap/InputGroup';

function DismissibleControl() {
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => {
      setShowA(!showA)};
    return (
      <Row>
        <Col md={20} className="mb-2">
          <Stack direction="horizontal">
            <div className="p-2">
              <button onClick={toggleShowA} className="mb-2" >
                <AiFillFilter style={{display: 'inline-block'}}/>
                絞り込み 
                <AiFillCaretDown hidden ={showA} style={{display: 'inline-block'}}/>
                <AiFillCaretUp hidden ={!showA} style={{display: 'inline-block'}}/>
              </button>
            </div>
            <div className="p-2 ms-auto">
              <PagingControl/>
            </div>
          </Stack>
          <Toast show={showA} onClose={toggleShowA} style={{width: "100%"}}>
            <Toast.Body style={{background: "#F0F2F5"}}>
                <div style={{ display: "flex", padding: 10, alignItems: "center" }}>
                    <text style={{ width: 150 , alignItems: "center" ,fontWeight:"bold"}}>グルーブ</text>
                    <InputGroup className="mb-3" style={{ width: "450px"}}>
                        <Form.Control placeholder="グループ名で絞り込む" style={{ display: "flex"}}/>
                    </InputGroup>
                </div>
                <div style={{ display: "flex" , marginBottom:"20px"}}>
                    <Button variant="outline-secondary" >検索条件をクリア</Button>
                    <Button variant="primary" style={{ marginLeft:"20px"}}>絞り込む</Button>
                </div>
            </Toast.Body>
          </Toast>
        </Col>
      </Row>
    );
  }
  
  export default DismissibleControl;