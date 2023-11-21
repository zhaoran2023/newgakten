import Table from 'react-bootstrap/Table'
import { MdEdit } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';
import Button from 'react-bootstrap/Button';
import {data} from '@/app/user/data';
import { redirect, useRouter } from 'next/navigation';
function convertAuthCode(authCd:number){

    let authNameStr: any = '';
    if(authCd == 0){
        authNameStr = '受講者';
    }
    if(authCd == 1){
        authNameStr = '学習管理者';
    }
    if(authCd == 2){
        authNameStr = '社内管理者';
    }
    if(authCd == 4){
        authNameStr = '進捗管理者';
    }
    return (
        authNameStr
    );
}

function TableControl() {
    const router = useRouter();
    const gotUserDetailPage =(params:any)=>{
        const userName = params.userName;
        router.push('/user/userDetailTabs', );
    }
    // function gotUserDetailPage(params:any){
    //     const userName = params.userName;
    //     router.push('/user/userDetailTabs', params);
    // }
  return (
        <Table style={{marginTop:'30px'}}>
            <thead>
            <tr>
                <th style={{width: '10%'}}>ユーザー名</th>
                <th style={{width: '20%'}}>ユーザーID</th>
                <th style={{width: '10%'}}>組織</th>
                <th style={{width: '30%'}}>メールアドレス</th>
                <th style={{width: '10%'}}>權限</th>
                <th style={{width: '10%'}}>通知</th>
                <th style={{width: '20%'}}>更新日</th>
                <th style={{width: '5%'}}></th>
            </tr>
            </thead>
            <tbody>
            
                {data.result.map((link,index) => (
                    <>
                    <tr>
                        <td>{link.userName}</td>
                        <td>{link.userId}</td>
                        <td>{link.departName}</td>
                        <td>{link.mail}</td>
                        <td>{convertAuthCode(link.authCd)}</td>
                        <td><image id="button-addon2">
                                <TfiEmail style={{ fontSize: '20px' }} />
                            </image></td>
                        <td>{link.updDateStr}</td>
                        <td>
                            <Button variant="outline-secondary" id="button-edit" style={{ background :'#0D78D4', color:'white'}} onClick={(e)=>gotUserDetailPage(data.result[index])}>
                                <MdEdit style={{ fontSize: '20px' }} />
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