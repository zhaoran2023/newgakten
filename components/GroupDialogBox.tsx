import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Col, Form, InputGroup, Row, Table } from 'react-bootstrap';
import PagingControl from '@/app/report/PagingControl';
import TableIndividualControl from '@/app/report/reportOrganization/reportByOrganization/TableIndividualControl';
import {FaDownload } from "react-icons/fa";
import Stack from 'react-bootstrap/Stack';
import Image from 'next/image'
import { data } from '@/app/report/data';
import { useState } from 'react';

function GroupDialogBox(props:any) {
    const {info} = props; 
    const [radioValue, setRadioValue] = useState(info);
    const toggleShowA = (value:string) => {
        setRadioValue(value)
    }
    const save  = () => {
        props.changeInfo(radioValue);
        for(let i=0;i<data.group.length;i++){
            if(radioValue === data.group[i].id){
                props.changeInfoname(data.group[i].name);
            }
        }
        props.onHide(false);
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton style={{ background:'#F0F2F5'}}>
            <Modal.Title id="contained-modal-title-vcenter" style={{fontWeight:"bold"}}>
                グループ選択
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                    <InputGroup className="mb-3" >
                                <Form.Control
                                placeholder="グループを選択して下さい"
                                aria-label=""
                                aria-describedby="basic-addon2"
                                />
                                <Button  variant="outline-secondary" id="button-addon2" style={{ background :'#0D78D4', color:'white'}}>
                                    選択
                                </Button>
                            </InputGroup>
                        <Table style={{marginTop:'30px'}}>
                            <thead>
                            <tr>
                                <th style={{width: '5%'}}></th>
                                <th style={{width: '90%'}}>グループ名</th>
                            </tr>
                            </thead>
                            <tbody>
                                {data.group.map((link,index) => (
                                    <>
                                    <tr>
                                        <td>
                                            <Form.Check type="radio" value={link.id} checked={radioValue == link.id} onChange={(e) => toggleShowA(e.currentTarget.value)} />
                                        </td>    
                                        <td>
                                            {link.name}
                                        </td>
                                    </tr>
                                    </>
                                ))}
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <div className="p-2" style={{fontSize:'30px',marginLeft:'20px',fontWeight:"bold"}}>
                    <Button onClick={props.onHide} style={{ background:'white', color:'black', marginRight:'10px'}}>キャンセル</Button>
                </div>
                <div className="p-2 ms-auto" style={{marginRight:'3%'}}>
                    <Button variant="primary" onClick={() => save()} style={{alignItems: 'center'}}>確定</Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
  }
  export default GroupDialogBox;
