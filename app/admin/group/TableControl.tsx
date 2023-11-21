import Table from 'react-bootstrap/Table'
import { MdEdit } from 'react-icons/md';
import { TbUserSearch } from 'react-icons/tb';
import Button from 'react-bootstrap/Button';
import {data} from '@/app/admin/group/data';
import { useRouter } from 'next/navigation';

function TableControl() {
    const router = useRouter();
    const groupUpdatePage =()=>{
        // router.push('/admin/group/groupupdate/update');
    }
    const groupUserPage =()=>{
        router.push('/admin/group/groupuser');
    }
  return (
        <div className="p-2">
            <Table style={{marginTop:'30px'}}>
                <thead>
                <tr>
                    <th style={{width: '60%' , fontWeight:"bold"}}>グループ名</th>
                    <th style={{width: '12.5%' , fontWeight:"bold"}}>人数</th>
                    <th style={{width: '22.5%' , fontWeight:"bold"}}>更新日</th>
                    <th style={{width: '2.5%' , fontWeight:"bold"}}>操作</th>
                    <th style={{width: '2.5%' , fontWeight:"bold"}}></th>
                </tr>
                </thead>
                <tbody>
                    {data.group.map((link,index) => (
                        <>
                        <tr>
                            <td>{link.group_name}</td>
                            <td>{link.group_jinsuu}</td>
                            <td>{link.group_koushihi}</td>
                            <td> 
                                <Button variant="primary" 
                                onClick={groupUpdatePage}
                                style={{ display: "flex" , width: "38px" , height: "38px" , padding: "5px", alignItems: "center", textAlign: "center"}}>
                                    <MdEdit style={{display: "flex" , width: "38px" , height: "38px" }}/>
                                </Button>
                            </td>
                            <td>
                                <Button variant="primary" 
                                onClick={groupUserPage}
                                style={{ display: "flex" , width: "38px" , height: "38px" , padding: "5px", alignItems: "center", textAlign: "center"}}>
                                    <TbUserSearch style={{display: "flex" , width: "38px" , height: "38px"}}/>
                                </Button>
                            </td>
                        </tr>
                        </>
                    ))}
                </tbody>
            </Table>
        </div>
  );
}

export default TableControl;