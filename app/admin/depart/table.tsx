'use client'
import { Button, Table } from 'rsuite';
import { faker } from '@faker-js/faker';
import SpinnerIcon from '@rsuite/icons/legacy/Spinner';
import { mockTreeData } from './mock';
import "./styles.css";
import {data1} from '@/app/admin/depart/data';
import { HiOutlinePencil } from 'react-icons/hi';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { useRouter } from 'next/navigation';


const { Column, HeaderCell, Cell } = Table;
const mynum:any[] = [];
const length =data1[1].layer;
for (let i = 0; i < length; i++){
  let loopNum = i+1;

  data1.map((item,index)=>{
    if(loopNum == item.level){
      mynum[loopNum] ++;
    }
  });
}

const data = mockTreeData({
  limits: mynum,
  labels: (layer: number) => {
    return data1[layer].label;
  },
  getRowData: () => ({
    price: faker.commerce.price({
      min: 10000,
      max: 1000000,
      dec: 0,
      symbol: '$'
    }),
    rating: faker.finance.amount({ min: 2, max: 5 })
  })
});

export const App = () => {
  const router = useRouter();
    const gotMyPage =()=>{
        router.push('/admin/depart/change');
    }
    const gotUserpage = () => {
      router.push("/admin/depart/user")
    }
  return (
    <Table
      isTree
      defaultExpandAllRows
      rowKey="value"
      height={400}
      data={data1}
      shouldUpdateScroll={false}
      onExpandChange={(isOpen, rowData) => {
        console.log(isOpen, rowData);
      }}
      renderTreeToggle={(icon, rowData:any) => {
        if (rowData.children && rowData.children.length === 0) {
          return <SpinnerIcon spin />;
        }
        return icon;
      }}
     >
    
      <Column flexGrow={1}>
        <HeaderCell>組織名(組織コード)</HeaderCell>
        <Cell dataKey="label" />
      </Column>
      <Column width={200}>
        <HeaderCell>人数</HeaderCell>
        {/* <Cell>
          {rowData =>
            Array.from({ length: rowData.rating }).map((_, i) => <span key={i}>1</span>)
          }
        </Cell> */}
         <Cell dataKey="rating" />
      </Column>
      <Column width={200}>
        <HeaderCell>更新日</HeaderCell>
        <Cell dataKey="price" />
      </Column>
      <Column width={200}>
        <HeaderCell>操作</HeaderCell>
        {/* <Cell dataKey="price" /> */}
        <Cell>
    <div >
      <Button id="button-addon1" onClick={gotMyPage} style={{ height:'30px',width:'40px',background: '#0D78D4', color: 'white', marginRight: '5px' }}>
        <HiOutlinePencil style={{ fontSize: '40px' }} />
      </Button>
      <Button id="button-addon2" style={{ height:'30px',width:'40px',background: '#0D78D4', color: 'white' }} onClick={gotUserpage}>
        <AiOutlineExclamationCircle style={{ fontSize: '40px' }} />
      </Button>
    </div>
  </Cell>
        </Column>
    </Table>
  );
};

 