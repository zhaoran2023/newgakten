
import 'bootstrap/dist/css/bootstrap.min.css';
import NavLinks from '@/app/pages/navlinks';
import Image from 'react-bootstrap/Image';
import {GiHamburgerMenu} from 'react-icons/gi';

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden" style={{borderRadius: '0',border:'none',backgroundColor:'#1F2937'}}>
        {/* 左侧导航部分 */}
        <div className="w-full flex-none md:w-64 " >
          {/* 网站log及抽屉效果实现 */}
          <div className="row" style={{height:'9vh',borderBottom: '2px solid #485159'}}>
            <div className="col"><Image src='/logo.png' alt="aaaa" style={{width:'120px',height:'40px',borderRadius: '0',border:'none'}}/></div>
            <div className="col" style={{display:'flex',justifyContent:'flex-end',margin:'auto'}}><GiHamburgerMenu  style={{marginRight:'10px',color:'#fcfcfc'}}/></div>
          </div>
          <NavLinks key='navlinks'/>
        </div>
        {/* 右侧主体内容 */}
        <div className="flex-grow md:block" style={{display:'block',backgroundColor:'#F1F2F6',overflowY:'hidden'}}>{children}</div>
    </div>
  
  )
}