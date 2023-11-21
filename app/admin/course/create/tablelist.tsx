import { useRef, useState } from "react";
import { Form, Table } from "react-bootstrap"


export default function AttachMentList({
    datas
  }: {
    datas:any[]
  }) {
    const initCheckStatus = ()=>{
        let arr:any = [];
        datas.map((item,index)=>{
          arr[index] = item.checked;
        });
        return arr;
      }
    const checkAllRef = useRef<any>();
    const [checkAll,setCheckAll] = useState<boolean>(false);
    const [checkStat,setCheckStatus] = useState<any>(initCheckStatus);
    
    const handleAllcheckBox = (crurrentStatus :boolean)=>{
        setCheckAll(!crurrentStatus);
        
    }

    return (
        <Table style={{margin:'30px',width:'95%',overflowY:'auto'}} key='course02pagetabel01'>
            <thead  key='course02pagethead01'>
                <tr  key='course02pagethead01tr01' style={{borderBottom:'2px solid #A7AFB8'}}>
                    <th  key='course02pagethead01th01'>
                        <Form.Check aria-label="option 1" 
                         key='course02pagecheckall01' 
                         ref={checkAllRef}
                        //  onClick={handleAllcheckBox(checkAll)}
                         />
                    </th>
                    <th  key='course02pagethead01th02'>ファイル名</th>
                    <th  key='course02pagethead01th03'>ファイル説明</th>
                </tr>
            </thead>
            <tbody>
            {datas.map((item,index) => (
                 <tr key={`course02pagetbodytr${index}01`}>
                    <td  key={`course02pagetbodytr${index}td01`}>
                        <Form.Check aria-label="option 1"  key='course02pagecheckall01' 
                        checked={checkStat[index]}
                    />
                    </td>
                    <td key={`course02pagetbodytr${index}td02`}>{item.file_name}</td>
                    <td key={`course02pagetbodytr${index}td03`}>{item.file_description}</td>
                 </tr>
            ))}
            </tbody>
        </Table>
    )
}