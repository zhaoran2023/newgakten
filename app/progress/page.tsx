import { lusitana } from '@/app/ui/fonts';
import Toppro from '@/app/pages/topProfile'

export default function Page() {
    return (
        <>
            {/* -- 内容区域 -- */}
            <Toppro>这里设置面包屑</Toppro>
            {/* <!-- 内容展示区域 --> */}
            <div id="content" className='contentstyle' >
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}> 这里是【進捗管理】页面</h1>
            </div>
        </>
    )
}