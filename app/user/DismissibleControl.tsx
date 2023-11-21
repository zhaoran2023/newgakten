import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import Form from "react-bootstrap/Form";
import Stack from 'react-bootstrap/Stack';
import PagingControl from '@/app/user/PagingControl';
import ToolbarControl from '@/app/user/ToolbarControl';

function DismissibleExample() {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  return (
    <Row>
      <Col md={20} className="mb-2">
        <Stack direction="horizontal" gap={3}>
          <div className="p-2">
            <Button onClick={toggleShowA} className="mb-2">
              絞り込み
            </Button>
          </div>
          <div className="p-2 ms-auto">
            <PagingControl/>
          </div>
        </Stack>
        <Toast show={showA} onClose={toggleShowA} style={{width: "100%"}}>
          <Toast.Body style={{background: "#f5f7fa"}}>
              <div style={{ display: "flex", padding: 10, alignItems: "center"}}></div>
              <div style={{ display: "flex", padding: 10, alignItems: "center" }}>
                <span style={{ width: 150 }}>学習期間</span>
                <Form.Control type="date" style={{ width: 150, marginRight:'10px' }}></Form.Control>
                ~ 
                <Form.Control type="date" style={{ width: 150, marginLeft:'10px' }}></Form.Control>
              </div>
              <ToolbarControl />
              <div style={{ display: "flex" }}>
                <Button style={{ background:'white', color:'black', marginRight:'10px'}}>グループ</Button>
                <Button>絞り込む</Button>
              </div>
          </Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default DismissibleExample;