
'use client'
import Toppro from '@/app/pages/topProfile'
import MyBreadcrum from '@/app/pages/breadrumb'



export default function Home() {
  
  const breadItems = [{title:'导航项一',link:'/'},{title:'导航项二',link:'/'}];
  return (
    <>
      {/* -- 内容区域 -- */}
      <Toppro key='toppro'>
        <MyBreadcrum param={breadItems} key='mybreadcrum' />
      </Toppro>
      {/* <!-- 内容展示区域 --> */}
      <div id="content" className='contentstyle' >
          
      </div>
     </>
  )
}
