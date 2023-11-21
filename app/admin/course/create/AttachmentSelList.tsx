import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import {dataList} from '@/app/admin/course/create/attachmentData'
import AttachMentList from './tablelist'

export default  function AttachmentSelectList({
    popTitle,
    propShow,
    func
  }: {
    popTitle:String,
    propShow: any,
    func:any
  }) {
    return (
        <Modal
                show={propShow}
                onHide={func}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                size="lg"
                key='courseAddPageModal01'
            >
                <Modal.Header closeButton style={{backgroundColor:'#f1f2f6'}} key='courseAddPageModal01hd'>
                <Modal.Title id="example-custom-modal-styling-title" key='courseAddPageModal01title'>
                    {popTitle}
                </Modal.Title>
                </Modal.Header>
                <Modal.Body  key='courseAddPageModal01body'>
                <InputGroup className="mb-3"  key='courseAddPageModal01body'>
                    <Form.Control
                    placeholder="ファイル名で絞り込む"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    key='course02PageModal01conttol01'
                    />
                     <Button
                        variant="primary"
                        id="button-addon2"
                        style={{ borderRadius: "0 5px 5px 0" }}
                        key="course02pagefbtn003"
                    >
                        <AiOutlineSearch
                         key="course02pageicon003"
                        style={{
                        fontSize: 25,
                        }}
                        />
                    </Button>
                </InputGroup>
                <AttachMentList datas={dataList} />
                </Modal.Body>
            </Modal>
    )
}