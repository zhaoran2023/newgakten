import Table from 'react-bootstrap/Table'
import { ImArrowRight } from 'react-icons/im';
import Button from 'react-bootstrap/Button';
import {data} from '@/app/report/data';
import { useRouter } from 'next/navigation';
import React from 'react';
import ReportIndividualPage from '@/app/report/reportOrganization/reportByOrganization/reportIndividualPage';

function TableControl() {
    const [modalShow, setModalShow] = React.useState(false);
  return (
        <Table style={{marginTop:'30px'}}>
            <thead>
            <tr>
                <th style={{width: '10%'}}>ユーザ名</th>
                <th style={{width: '20%'}}>ユーザーID</th>
                <th style={{width: '10%'}}>点数</th>
                <th style={{width: '10%'}}>回数</th>
                <th style={{width: '10%'}}>結果</th>
                <th style={{width: '10%'}}>学習日</th>
                <th style={{width: '5%'}}></th>
            </tr>
            </thead>
            <tbody>
                {data.reportByOrganization.map((link,index) => (
                    <>
                    <tr>
                        <td>{link.name}</td>    
                        <td>
                            {link.id}
                        </td>
                        <td>{link.A}</td>
                        <td>{link.B}</td>
                        <td>{link.C}</td>
                        <td>{link.D}</td>
                        <td>
                            <Button  onClick={() => setModalShow(true)} variant="outline-secondary" id="button-addon2" style={{ background :'#0D78D4', color:'white'}}>
                                <ImArrowRight style={{ fontSize: '20px' }} />
                            </Button>
                            <ReportIndividualPage
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </td>
                    </tr>
                    </>
                ))}
            </tbody>
        </Table>
  );
}

export default TableControl;