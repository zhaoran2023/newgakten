import Table from 'react-bootstrap/Table'
import { ImArrowRight } from 'react-icons/im';
import Button from 'react-bootstrap/Button';
import {data} from '@/app/report/data';
import { useRouter } from 'next/navigation';


function TableControl() {
    const router = useRouter();
    const reportDetailedPage =()=>{
        router.push('/report/reportOrganization/reportByOrganization');
    }
  return (
        <Table style={{marginTop:'30px'}}>
            <thead>
            <tr>
                <th style={{width: '30%'}}>組織/グループ</th>
                <th style={{width: '10%'}}>タイプ</th>
                <th style={{width: '10%'}}>対象</th>
                <th style={{width: '10%'}}>実施</th>
                <th style={{width: '10%'}}>合格</th>
                <th style={{width: '10%'}}>実施率</th>
                <th style={{width: '5%'}}></th>
            </tr>
            </thead>
            <tbody>
                {data.reportDetailed.map((link,index) => (
                    <>
                    <tr>
                        <td>{link.name}</td>    
                        <td>
                            {link.type}
                        </td>
                        <td>{link.A}</td>
                        <td>{link.B}</td>
                        <td>{link.C}</td>
                        <td>{link.D}</td>
                        <td>
                            <Button  onClick={reportDetailedPage} variant="outline-secondary" id="button-addon2" style={{ background :'#0D78D4', color:'white'}}>
                                <ImArrowRight style={{ fontSize: '20px' }} />
                            </Button>
                        </td>
                    </tr>
                    </>
                ))}
            </tbody>
        </Table>

  );
}

export default TableControl;