import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';

function GroupikkatutourokuControl() {
  return (
        <div className="p-2">
            <div style={{ display: "flex", justifyContent: "space-between" ,margin:"20px"}}>
                {/*--左侧--*/}
                <text>ファイル選択</text>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" ,margin:"20px"}}>
                <InputGroup itemType ="text" className="mb-3" style={{width: "400px"}}>
                    <Form.Control  disabled = {true} placeholder="ファイルが選択されていません"/>
                    <Button variant="primary" id="button-addon2">ファイル選択</Button>
                </InputGroup>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" ,margin:"20px"}} >
                <Form.Select style={{ width: "400px" }}>
                    <option value="1">UTF-8</option>
                    <option value="2">Shift_JIS</option>
                </Form.Select>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" ,margin:"20px"}}>
                {/*--左侧--*/}
                <text style={{ fontWeight:"bold"}}>一括登録方法</text>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" ,margin:"20px"}}>
                <Form.Check type={'radio'} name='torokuhonho' label="ユーザ追加（現在グループに設定済みのユーザは解除せず、ユーザ追加のみ実行します。）"/>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" ,margin:"20px"}}>
                <Form.Check type={'radio'} name='torokuhonho' label="ユーザ入替（現在グループに所属するユーザを全て解除し、アップロードファイルで指定したユーザのみ所属させます。）"/>
            </div>
        </div>
  );
}

export default GroupikkatutourokuControl;