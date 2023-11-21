import Table from 'react-bootstrap/Table'
import {data} from '@/app/report/data';
import React from 'react';

function TableIndividualControl() {
  return (
        <Table style={{marginTop:'30px'}}>
            <thead>
            <tr>
                <th style={{width: '10%'}}></th>
                <th style={{width: '20%'}}>試行数</th>
                <th style={{width: '10%'}}>判定</th>
            </tr>
            </thead>
            <tbody>
                {data.reportIndividual.map((link,index) => (
                    <>
                    <tr>
                        <td>{link.row}</td>    
                        <td>
                            {link.rowA}
                        </td>
                        <td>{link.A}</td>
                    </tr>
                    </>
                ))}
            </tbody>
        </Table>
  );
}

export default TableIndividualControl;