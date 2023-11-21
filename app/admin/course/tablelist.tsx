import Table from 'react-bootstrap/Table'
import { AiOutlineFileText } from 'react-icons/ai';
import { RiFileDownloadLine } from 'react-icons/ri';
import Button from 'react-bootstrap/Button';
import {data} from '@/app/report/data';
import { FiExternalLink } from "react-icons/fi";
import { TfiPencilAlt } from "react-icons/tfi";

export default function TableList() {
  return (
    
        <Table style={{margin:'30px',width:'95%'}} key='course01pagetabel01'>
            <thead key='course01pagethd01'>
            <tr style={{borderBottom:'2px solid #A7AFB8'}}  key='course01pagetr01'>
                <th style={{width:'5%'}}  key='course01pagetrth01'></th>
                <th style={{width:'15%'}} key='course01pagetrth02'>コース名</th>
                <th style={{width:'20%'}} key='course01pagetrth03'>コース説明</th>
                <th style={{width:'10%'}} key='course01pagetrth04'>合格点</th>
                <th style={{width:'10%'}} key='course01pagetrth05'>更新日</th>
                <th style={{width:'10%'}} key='course01pagetrth06'>実施率</th>
                <th style={{width:'10%'}} key='course01pagetrth07'>操作</th>
            </tr>
            </thead>
            <tbody  key='course01pagetbd01'>
                {data.report.map((link,index) => (
                    <tr  key={`course01pagetr02_${index}`}>
                        
                        <td  key={`course01pagetr02td01${index}`}>
                            <AiOutlineFileText key={`course01pageicon005${index}`} hidden ={!(link.curcul_type=='1')} style={{ fontSize: '25px' }}/>
                            <RiFileDownloadLine key={`course01pageicon006${index}`} hidden ={!(link.curcul_type=='2')} style={{ fontSize: '25px' }}/>
                        </td>
                        <td key={`course01pagetr02td02${index}`}>{link.course_name}</td>
                        <td key={`course01pagetr02td03${index}`}>{link.curcul_name}</td>
                        <td key={`course01pagetr02td04${index}`}>52</td>
                        <td key={`course01pagetr02td05${index}`}>{link.B}</td>
                        <td key={`course01pagetr02td06${index}`}>100%</td>
                        <td>
                            <Button variant="primary" id="button-editon2"  key={`course01pagebtn004${index}`} style={{ width:'40px',height:'40px',marginRight:'10px' }}>
                                <TfiPencilAlt style={{ fontSize: '20px', position:'relative',zIndex:10,top:-2,left:-2 }}  key={`course01pageicon007${index}`} />
                            </Button>
                            <Button variant="primary" id="button-addon2"  key={`course01pagebtn005${index}`} style={{width:'40px',height:'40px' }}>
                                <FiExternalLink  style={{ fontSize: '20px',position:'relative',zIndex:10,top:-2,left:-1 }}  key={`course01pageicon008${index}`} />
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        
    
  );
}
