import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import PagingControl from '@/app/report/PagingControl';
import TableIndividualControl from '@/app/report/reportOrganization/reportByOrganization/TableIndividualControl';
import {FaDownload } from "react-icons/fa";
import Stack from 'react-bootstrap/Stack';
import Image from 'next/image'

function ReportIndividualPage(props:any) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{ background:'#F0F2F5'}}>
          <Modal.Title id="contained-modal-title-vcenter" style={{fontWeight:"bold"}}>
            進捗管理 (Dojoコース-個別詳細結果)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Row>
                    <Col><text style={{ fontSize: 18, fontWeight:"bold"}}>カリキュラム名</text></Col>
                    <Col><text style={{ fontSize: 18, fontWeight:"bold"}}>組織名</text></Col>
                </Row>
                <Row>
                    <Col> <text style={{ fontSize: 15}}>受講済みの確認</text></Col>
                    <Col> <text style={{ fontSize: 15}}>受講済みの確認</text></Col>
                </Row>
                <Row>
                    <Col><text style={{ fontSize: 18, fontWeight:"bold"}}>コース名</text></Col>
                    <Col><text style={{ fontSize: 18, fontWeight:"bold"}}>ユーザー名</text></Col>
                </Row>
                <Row>
                    <Col><Stack direction="horizontal" gap={0} key='courseHomePageStack'>
                            <div className="p-2"><Image src='/Dojo.png' width={25} height={25} alt="Dojo"/></div>
                            <div className="p-2"><text style={{ fontSize: 18}}>《サンプル》ISO理解度テスト</text></div>
                        </Stack></Col>
                    <Col> <text style={{ fontSize: 15}}>受講済みの確認</text></Col>
                </Row>
                <Row>
                    <Col> <text style={{ fontSize: 18, fontWeight:"bold"}}>学習日時</text></Col>
                </Row>
                <Row>
                    <text style={{ fontSize: 15}}>ナビゲーションセールス課</text>
                </Row>
                <Row>
                    <text style={{ fontSize: 18, fontWeight:"bold"}}>結果</text>
                </Row>
                <Row>
                    <text style={{ fontSize: 15}}>[合格率]100% (1/1)</text>
                    <text style={{ fontSize: 15}}>[実施率]100% (1/1)</text>
                </Row>
                <Row>
                    <TableIndividualControl/>
                </Row>
                <Row>
                    <PagingControl/>
                </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer>
            <div className="p-2" style={{fontSize:'30px',marginLeft:'20px',fontWeight:"bold"}}>
                <Button onClick={props.onHide} style={{ background:'white', color:'black', marginRight:'10px'}}>キャンセル</Button>
            </div>
            <div className="p-2 ms-auto" style={{marginRight:'3%'}}>
                <Button variant="primary"  
                style={{display: 'flex', alignItems: 'center'}}>
                <FaDownload style={{margin:"5px" }}/>エクスポート</Button>
            </div>
        </Modal.Footer>
      </Modal>
    );
  }
  export default ReportIndividualPage;