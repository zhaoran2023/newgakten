
import React from 'react';
import { title } from 'process';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {HiHome} from 'react-icons/hi';
import Script from 'next/script';
interface Props {

    title: string;
    link: string;

  }

export default  function breadcrumb({
    param
  }: {
    param: Props[]
  }) {
 
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="/"><HiHome style={{width:'25px',height:'25px',color:'#A2ABB2' }}/></Breadcrumb.Item>
            {Array.isArray(param)
            ? param.map(item => {
                return <Breadcrumb.Item href={item.link} key={`Breadcrumb${item.title}`}>{item.title}</Breadcrumb.Item>;
            })
            : null}
        
      </Breadcrumb>
    );
}