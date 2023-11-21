import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { PiCaretDoubleLeftBold } from "react-icons/pi";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import { PiCaretRightBold } from "react-icons/pi";
import { PiCaretLeftBold } from "react-icons/pi";
import {data} from '@/app/admin/group/data';

function DabouleSelsetControl() {

    return (
      <>
            <Stack direction="horizontal" >
                <div style = {{ width: "450px"}}>
                    <div>
                        <text>部署 所属メンバ</text>
                    </div>
                    <div style = {{marginTop: "15px"}}>
                        <Form.Select htmlSize = {12} multiple> 
                            {data.selectLeft.map((link,index) => (
                                <>
                                <option value="1">{link.optionLeft}</option>
                                <hr style={{ marginTop: "2px" , marginBottom: "2px"}}/>
                                </>
                            ))}
                        </Form.Select>
                    </div>
                </div>
                <div style={{width:"50px" ,height:"200" ,margin: "20px"}}>
                    <div style={{ display: "flex" ,height:"38px"}}>
                        <Button variant="primary" style={{ display: "flex" , width: "38px" , height: "38px" , padding: "5px", alignItems: "center", textAlign: "center"}}>
                            <PiCaretDoubleRightBold style={{display: "flex" , width: "38px" , height: "38px" }}/>
                        </Button>
                    </div>
                    <div style={{ display: "flex" , height:"38px" ,  marginTop:"15px"}}>
                        <Button variant="primary" style={{ display: "flex" , width: "38px" , height: "38px" , padding: "5px", alignItems: "center", textAlign: "center"}}>
                            <PiCaretRightBold style={{display: "flex" , width: "38px" , height: "38px" }}/>
                        </Button>
                    </div>
                    <div style={{ display: "flex" , height:"38px" ,  marginTop:"15px"}}>
                        <Button variant="primary" style={{ display: "flex" , width: "38px" , height: "38px" , padding: "5px", alignItems: "center", textAlign: "center"}}>
                            <PiCaretLeftBold style={{display: "flex" , width: "38px" , height: "38px" }}/>
                        </Button>
                    </div>
                    <div style={{ display: "flex" , height:"38px" ,  marginTop:"15px"}}>
                        <Button variant="primary" style={{ display: "flex" , width: "38px" , height: "38px" , padding: "5px", alignItems: "center", textAlign: "center"}}>
                            <PiCaretDoubleLeftBold style={{display: "flex" , width: "38px" , height: "38px" }}/>
                        </Button>
                    </div>
                </div>
                <div style={{ width: "450px"}}>
                    <div>
                        <text>グループ 所属メンバ</text>
                    </div>
                    <div style = {{marginTop: "15px"}} >
                        <Form.Select htmlSize = {12} multiple>
                            {data.selectRight.map((link,index) => (
                                <>
                                <option value="1">{link.optionRight}</option>
                                <hr style={{ marginTop: "2px" , marginBottom: "2px"}}/>
                                </>
                            ))}
                        </Form.Select>
                    </div>
                </div>
            </Stack>
        </>
    );
}

export default DabouleSelsetControl;