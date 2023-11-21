import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { AiOutlineSearch } from "react-icons/ai";

function ToolbarExample() {


    function search(){

    }

  return (
    <>
        <div style={{ display: "flex", padding: 10, alignItems: "center" }}>
            <span style={{ width: 150 }}>ユーザー名</span>
            <InputGroup className="mb-3" style={{ width: 450 }}>
                <Form.Control
                placeholder="ユーザー名で絞り込む"
                aria-label=""
                aria-describedby="basic-addon2"
                />
            </InputGroup>
        </div>
        <div style={{ display: "flex", padding: 10, alignItems: "center" }}>
            <span style={{ width: 150 }}>ユーザーID</span>
            <InputGroup className="mb-3" style={{ width: 450 }}>
            <Form.Control
            placeholder="ユーザーIDで絞り込む"
            aria-label=""
            aria-describedby="basic-addon2"
            />            
            <Button variant="outline-secondary" id="button-addon2" style={{ background :'#0D78D4', color:'white'}}>
                <AiOutlineSearch style={{ fontSize: '20px' }} />
            </Button>
        </InputGroup>
        </div>
        <div style={{ display: "flex", padding: 10, alignItems: "center" }}>
            <span style={{ width: 150 }}>メールアドレス</span>
            <InputGroup className="mb-3" style={{ width: 450 }}>
            <Form.Control
            placeholder="メールアドレスで絞り込む"
            aria-label=""
            aria-describedby="basic-addon2"
            />            
            <Button variant="outline-secondary" id="button-addon2" style={{ background :'#0D78D4', color:'white'}} onClick={() => search()}>
                <AiOutlineSearch style={{ fontSize: '20px' }} />
            </Button>
        </InputGroup>
        </div>
        <div style={{ display: "flex", padding: 10, alignItems: "center" }}>
            <span style={{ width: 150 }}>組織</span>
            <InputGroup className="mb-3" style={{ width: 450 }}>
            <Form.Control
            placeholder="組織を選択して下さい"
            aria-label=""
            aria-describedby="basic-addon2"
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