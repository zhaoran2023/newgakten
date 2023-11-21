import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function ToolbarExample() {

  return (
    <>
        <div style={{ display: "flex", padding: 10, alignItems: "left" }}>
            <text style={{ width: 90 , fontWeight:"bold"}}>グルーブ名</text>
            <label style={{ display: "flex", width: 30 ,borderRadius:"10px" , height:"15px" , color: "#FFFFFF", background : "#D9363F", fontSize:"10px", 
            justifyContent:"center", margin:"5px" }}>必要</label>
        </div>
        <div style={{ display: "flex", padding: 10, alignItems: "left" }}>
            <InputGroup className="mb-3" style={{ width: "450px" }}>
                <Form.Control 
                    placeholder="グループ名で絞り込む"
                />
            </InputGroup>
        </div>
        <div style={{ display: "flex", padding: 10, alignItems: "left" }}>
            <text style={{ width: "90" , fontWeight:"bold"}}>組織選択</text>
        </div>
        <div style={{ display: "flex" , padding: 10, alignItems: "left"}}>
            <InputGroup className="mb-3" style={{ width: "450px" }}>
                <Form.Control
                placeholder="選択した組織選択名を表示"
                />
                <Button variant="primary" id="button-addon2">
                選択
                </Button>
            </InputGroup>
        </div>
        <div style={{ display: "flex", padding: 10, alignItems: "left" }}>
            <text style={{ width: "120px" , fontWeight:"bold"}}>メンバー登録</text>
        </div>
    </>
  );
}

export default ToolbarExample;