import Table from 'react-bootstrap/Table'
import {data} from '@/app/admin/group/data';


function TableControl() {
  return (
        <div className="p-2">
            <Table style={{marginTop:'30px'}}>
                <thead>
                <tr>
                    <th style={{width: '20%' , fontWeight:"bold"}}>組織コード</th>
                    <th style={{width: '20%' , fontWeight:"bold"}}>組織名</th>
                    <th style={{width: '10%' , fontWeight:"bold"}}>ユーザ一ID</th>
                    <th style={{width: '20%' , fontWeight:"bold"}}>ユーザ一名</th>
                    <th style={{width: '23%' , fontWeight:"bold"}}>メールアドレス</th>
                    <th style={{width: '7%' , fontWeight:"bold"}}>権限</th>
                </tr>
                </thead>
                <tbody>
                    {data.groupuser.map((link,index) => (
                        <>
                        <tr>
                            <td>{link.soshiki_code}</td>
                            <td>{link.soshiki_name}</td>
                            <td>{link.user_ID}</td>
                            <td>{link.user_name}</td>
                            <td>{link.email_address}</td>
                            <td>{link.authority}</td>
                        </tr>
                        </>
                    ))}
                </tbody>
            </Table>
        </div>
  );
}

export default TableControl;