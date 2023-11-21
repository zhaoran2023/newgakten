import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { AiOutlineSearch } from "react-icons/ai";
import {data} from '@/app/report/data';
import { ToggleButton } from 'react-bootstrap';
import { useState } from 'react';
import GroupDialogBox from '@/components/GroupDialogBox';
import React from 'react';

function ToolbarExample() {
    const [radioValue, setRadioValue] = useState('');
    const toggleShowA = (value:string) => {
        if(radioValue === value){
            setRadioValue('')
        }else{
            setRadioValue(value)
        }
    }
    const [modalShow, setModalShow] = React.useState(false);
    const [groupDialogBoxinfo, setState] = useState('');
    const [groupDialogBoxinfoname, setStatename] = useState('');
    const changeInfo = (info:any) => {
        setState(info);
      }
    const changeInfoname = (info:any) => {
    setStatename(info);
    }
    return (
    <>
        <div style={{ display: "flex", padding: 10, alignItems: "center" }}>
            <span style={{ width: 150 ,marginBottom: 16}}>タグ(カリキュラム)</span>
            <InputGroup className="mb-3" style={{ width: 450 }}>
                <Form.Control
                placeholder="表示するタグをタグ名で絞り込む"
                aria-label=""
                aria-describedby="basic-addon2"
                />
            </InputGroup>
            <div style={{ width: 800 }}>
                {data.tag.map((radio,idx) => (
                    <>
                        <ToggleButton
                            className="mb-2"
                            key={idx}
                            id={`check-${idx}`}
                            type="checkbox"
                            variant={'outline-primary'}
                            checked={radioValue === radio}
                            value={radio}
                            onChange={(e) => toggleShowA(e.currentTarget.value)}
                            style={{marginLeft:'10px',marginBottom:'14px'}}
                            >
                            {radio}
                        </ToggleButton>
                    </>
                ))}
            </div>
        </div>
        <div style={{ display: "flex", padding: 10, alignItems: "center" }}>
            <span style={{ width: 150 ,marginBottom: 16}}>カリキュラム</span>
            <InputGroup  className="mb-3" style={{ width: 450 }}>
                <Form.Control 
                placeholder="カリキュラム名で絞り込む"
                aria-label=""
                aria-describedby="basic-addon2"
                />            
                <Button variant="outline-secondary" id="button-addon2" style={{ background :'#0D78D4', color:'white'}}>
                    <AiOutlineSearch style={{ fontSize: '20px' }} />
                </Button>
            </InputGroup>
        </div>
        <div style={{ display: "flex", padding: 10, alignItems: "center" }}>
            <span style={{ width: 150 ,marginBottom: 16}}>組織</span>
            <InputGroup className="mb-3" style={{ width: 450 }}>
                <Form.Control
                placeholder="組織を選択して下さい"
                aria-label=""
                aria-describedby="basic-addon2"
                disabled = {true}
                />
                <Button variant="outline-secondary" id="button-addon2" style={{ background :'#0D78D4', color:'white'}}>
                選択
                </Button>
            </InputGroup>
        </div>
        <div style={{ display: "flex", padding: 10, alignItems: "center" }}>
            <span style={{ width: 150 ,marginBottom: 16}}>グループ</span>
            <InputGroup className="mb-3" style={{ width: 450 }}>
                <Form.Control
                placeholder="グループを選択して下さい"
                aria-label=""
                aria-describedby="basic-addon2"
                disabled = {true}
                value={groupDialogBoxinfoname}
                />
                <Button  onClick={() => setModalShow(true)} variant="outline-secondary" id="button-addon2" style={{ background :'#0D78D4', color:'white'}}>
                    選択
                </Button>
                <GroupDialogBox
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    info={groupDialogBoxinfo}
                    changeInfo={(groupDialogBoxinfo: any) => {changeInfo(groupDialogBoxinfo)}}
                    changeInfoname={(groupDialogBoxinfoname: any) => {changeInfoname(groupDialogBoxinfoname)}}
                />
            </InputGroup>
        </div>
        <div style={{ display: "flex", padding: 10, alignItems: "center" }}>
            <span style={{ width: 150 ,marginBottom: 16}}>ユーザー</span>
            <InputGroup className="mb-3" style={{ width: 450 }}>
                <Form.Control
                placeholder="ユーザーを選択して下さい"
                aria-label=""
                aria-describedby="basic-addon2"
                disabled = {true}
                />
                <Button variant="outline-secondary" id="button-addon2" style={{ background :'#0D78D4', color:'white'}}>
                選択
                </Button>
            </InputGroup>
        </div>
    </>
  );
}

export default ToolbarExample;