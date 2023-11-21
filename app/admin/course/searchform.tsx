import { lusitana } from '@/app/ui/fonts';
import Toast from 'react-bootstrap/Toast';
import Form from "react-bootstrap/Form";
import {data} from '@/app/report/data';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CloseButton from 'react-bootstrap/CloseButton';
import { MutableRefObject, useRef, useState } from 'react';
import styles from '@/app/pages/layout.module.css';

export default  function MySearchForm() {
    const [isShowBtn,setShowBtn] = useState(true);
    const myInputRef:MutableRefObject<any> = useRef(null);
    const handleClearInput = ()=>{
        myInputRef.current.value='';
        setShowBtn(true);
    }
    return (
        <>
            <Toast style={{width: "100%"}} key="course01pagetost001">
                <Toast.Body style={{background: "#f5f7fa",borderRadius:'10px'}} key="course01pagetostbody001">
                    <Form  key="course01pageform001" style={{margin:'30px'}}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" key="course01pagefgroup001">
                        <Form.Label column sm="1"  key="course01pageflabel001">
                        コース種目
                        </Form.Label>
                        <Col sm="5" key="course01pagecol001">
                        <div key="course01pagediv005" className="mb-3">
                            {/* 这里暂时保留，根据review后的文档要求，目前只实现Dojo类别的课程20231115
                            <Form.Check
                                inline
                                label="全て"
                                name="all"
                                type='radio'
                                id='course01pagefradio001'
                                key='course01pagefradio001'
                                checked
                            /> */}
                            <Form.Check
                                inline
                                label="DOJO"
                                name="dojo"
                                type='radio'
                                id='course01pagefradio002'
                                key='course01pagefradio002'
                                defaultChecked
                            />
                            {/* 
                            <Form.Check
                                inline
                                label="問題"
                                name="problem"
                                type='radio'
                                id='course01pagefradio003'
                                key='course01pagefradio003'
                            />
                            <Form.Check
                                inline
                                label="アンケート"
                                name="questionnaire"
                                type='radio'
                                id='course01pagefradio004'
                                key='course01pagefradio004'
                            />
                            <Form.Check
                                inline
                                label="ファイル"
                                name="files"
                                type='radio'
                                id='course01pagefradio005'
                                key='course01pagefradio005'
                            /> */}
                            </div>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3"  controlId="formPlaintextPassword" key="course01pagefgroup002">
                        <Form.Label column sm="1" key="course01pageflabel002">
                        タグ(コース)
                        </Form.Label>
                        <Col style={{display:'flex',alignItems: 'flex-start'}} key="course01pagecol002">
                            <Form.Control
                            type='text'
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                            style={{display:'inline-block',width:'450px'}} 
                            key="course01pagefcotrol001"
                            placeholder='表示するタグをタグ名で絞り込む'
                            onKeyDown={()=>setShowBtn(false)}
                            ref={myInputRef}
                            />{!isShowBtn?<CloseButton variant='blue'  className={styles.mycloseBtn}  onClick={handleClearInput} key='course01pageclsbtn001'/>:''}

                            <div style={{ width:'70%',display:'inline-block',whiteSpace:'break-spaces'}}  key="course01pagediv006">
                                    {data.tag.map((link,index) => (
                                        <Button  key={`course01pagebtn003_${index}`} variant="outline-dark" hidden ={!isShowBtn} style={{ background:'white', color:'black', marginLeft:'10px',marginBottom:'14px'}}>{link}</Button>  
                                    ))}
                            </div> 
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"  key="course01pagefgroup003">
                        <Form.Label column sm="1" key="course01pageflabel003">
                        コース
                        </Form.Label>
                        <Col sm="5" key="course01pagecol003">
                        <Form.Control key="course01pagefcotrol002" type="search" placeholder="コース名で絞り込む" style={{display:'inline-block',width:'450px'}} />
                        </Col>
                    </Form.Group>
                    <Button as="input" key="course01pagebtn003" variant="outline-dark" type="reset" value="検索条件をクリア" style={{marginRight:'10px'}}/>
                    <Button as="input" key="course01pagebtn004" variant="primary" type="submit" value="絞り込む" />
                    </Form>
            </Toast.Body>
            </Toast>  
        </>
    );
}