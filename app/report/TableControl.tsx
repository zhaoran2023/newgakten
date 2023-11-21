import Table from 'react-bootstrap/Table'
import { ImArrowRight } from 'react-icons/im';
import { AiOutlineFileText } from 'react-icons/ai';
import { RiFileDownloadLine } from 'react-icons/ri';
import Button from 'react-bootstrap/Button';
import {data} from '@/app/report/data';
import { useRouter } from 'next/navigation';


function TableControl() {
    const router = useRouter();
    const reportDetailedPage =()=>{
        router.push('/report/reportOrganization');
    }
  return (
        <Table style={{marginTop:'30px'}}>
            <thead>
            <tr>
                <th style={{width: '10%'}}>カリキュラム</th>
                <th style={{width: '2%'}}></th>
                <th style={{width: '40%'}}>コース名</th>
                <th style={{width: '10%'}}>対象</th>
                <th style={{width: '10%'}}>実施</th>
                <th style={{width: '10%'}}>実施率</th>
                <th style={{width: '5%'}}></th>
            </tr>
            </thead>
            <tbody>
                {data.report.map((link,index) => (
                    <>
                    <tr>
                        <td>{link.curcul_name}</td>
                        <td>
                            <AiOutlineFileText hidden ={!(link.curcul_type=='1')} style={{ fontSize: '25px' }}/>
                            <RiFileDownloadLine hidden ={!(link.curcul_type=='2')} style={{ fontSize: '25px' }}/>
                        </td>
                        <td>{link.course_name}</td>
                        <td>{link.A}</td>
                        <td>{link.B}</td>
                        <td>{link.C}</td>
                        <td>
                            <Button onClick={reportDetailedPage} variant="outline-secondary" id="button-addon2" style={{ background :'#0D78D4', color:'white'}}>
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