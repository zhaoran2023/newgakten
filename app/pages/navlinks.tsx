'use client';

import {menubar} from '@/app/lib/menu';
import Dropdown from 'react-bootstrap/Dropdown';
import {VscAdd,VscRemove} from 'react-icons/vsc'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import styles from '@/app/pages/layout.module.css'


export default function NavLinks() {
    const [isOpen, setOpen] = useState(false);
    
    
  
    const SubMenuFunc = (submenu:any,parentInx:number)=>{
      const subMenuItems = submenu.map((item:any,subInx:number)=>{
        return (
            <Dropdown.Item key={`sub_dropItem_${parentInx}_${subInx}`} eventKey={`sub_dropItem_${parentInx}_${subInx}`} href={item.href}  className='text-white' style={{paddingLeft:'50px'}}>{item.name}</Dropdown.Item>
        )
      });
      return (
        <Collapse in={isOpen} key={`collapse02_${parentInx}`}>
            <div id="example-collapse-text" key={`collapse_div_${parentInx}`}>{subMenuItems}</div>
        </Collapse>
      ); 

    };

    const pMenuItems =  menubar.map((link,index) => {
      let hasSub = false;
      if(link.submenu != null){
        hasSub = true;
      }
      const explandSubMenu = ()=>{
        if(hasSub){
          setOpen(!isOpen)
        }
        
      }
      return (
        <div key={`navigationPegediv01_${link.id}`}>
          <Dropdown.Item eventKey={index} href={link.href} key={`navigationPege_${link.id}`}  className='text-white' onClick={() =>explandSubMenu() }>
          <link.icon style={{width:'20px',height:'20px',marginRight:'10px', display:'inline-block',color:'#A3AAB2'}}  key={`linkicon_${link.id}`} /> {link.name}
          {hasSub?
              <Button
                variant="link"
                key = {`navigation01Btn_${link.id}`}
                onClick={() => setOpen(!isOpen)}
                aria-controls="example-collapse-text"
                aria-expanded={isOpen}
                style={{float:'right',border:0,color:'#ffffff'}}
              >
              {!isOpen?<VscAdd key={`vscadd_${link.id}`}  />:<VscRemove key={`vscremove_${link.id}`} />}
              </Button>:''}
          </Dropdown.Item>
          <Dropdown.Divider as='hr' key={`navigation01Hr_${index}`} style={{ border: '1px solid #474F57',marginLeft:'15px',marginRight:'15px'}} />
          {hasSub?SubMenuFunc(link.submenu,index):''}
        </div>
      )
    });

    
    return (
      // 动态实现二级导航菜单 式样待调整
      <Dropdown.Menu show className={`${styles.dropdownmenu} flex w-full flex-none md:w-64  wd:9%`} id={`dropdownmenu_01`} key={`dropdownmenu_01`} style={{borderRadius: '0',border:'none',backgroundColor:'#1F2937'}} >
        {pMenuItems}
      </Dropdown.Menu>
    );
      
}