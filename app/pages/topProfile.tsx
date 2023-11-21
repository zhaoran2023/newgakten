'use client'

import React, { useState } from 'react';
import styles from '@/app/pages/layout.module.css'
import Stack from 'react-bootstrap/Stack';
import {FaBell} from 'react-icons/fa'
import {FaUserLarge} from 'react-icons/fa6'
import {BsQuestionSquareFill} from  'react-icons/bs'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function topContainer({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <>
      {/* <!-- 顶部信息栏 --> */}
      {/* <div className={styles.topinfo}>	 */}
      <Stack direction="horizontal" gap={4} style={{height:'9vh',borderBottom: '2px solid #E4E6EB',backgroundColor:'#FCFCFC'}}>
        {/* <span style={{fontSize:'29px'}}>放置个人头像，登录信息及面包屑</span> */}
        <div className="p-2" style={{marginLeft:'30px',marginTop:'10px',display: 'inline-block'}}>{children}</div>
        <div className="p-2 ms-auto"><BsQuestionSquareFill style={{width:'20px',height:'20px',display: 'inline-block',color:'#040404',marginRight:'15px'}} />HELP</div>
        <div className="p-2"><FaBell style={{width:'20px',height:'20px',display: 'inline-block',color:'#040404',marginRight:'15px'}}/>お知らせ</div>
        <div className="p-2" style={{display: 'inline-block',width:'220px'}}>
          <FaUserLarge style={{width:'20px',height:'20px',display: 'inline-block',color:'#040404'}} />
          
          {/* 个人设置及退出功能在这里，待完善。。 */}
          <Navbar expand="lg" className="bg-body-tertiary" style={{display: 'inline-block'}}>
              <Container>
              <Navbar.Toggle aria-controls="navbar-dark-example" />
              <Navbar.Collapse id="navbar-dark-example">
                <Nav>
                  <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="テンダ三太郎"
                    menuVariant="dark"
                  >
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          
        </div>
      </Stack>
    </>
  )
}