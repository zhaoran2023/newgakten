import {dataList} from '@/app/admin/course/create/tagsListData'
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import React, {useRef, useState } from 'react';

/**
 * 20231120 此代码还可以再优化
 * @author zhaoran
 * @param param 传递数据源
 * @param pagekey 传递控件KEY标识，确保KEY的唯一性。
 * @returns 
 */
export default  function MltiSelectList({
    param,
    pagekey
  }: {
    param: any[],
    pagekey:string
  }) {

    const Leftrefs = useRef<any>([]);
    const Rightrefs = useRef<any>([]);
    const RightGroup = useRef<any>();
    const LeftGroup = useRef<any>();
    const leftInput = useRef<any>();
    const initCheckStatus = ()=>{
        let arr:any = [];
        dataList.map((item,index)=>{
          arr[index] = item.status;
        });
        return arr;
      }
    const [leftcheckState,setLeftChecks] = useState<any>(initCheckStatus());
    const [rightcheckState,setRightChecks] = useState<any>(initCheckStatus());
    const [selectItems,setNewList]=useState<any[]>([]);
    const [tempSelectItems,setTempItemsList]=useState<any[]>([]);
    const [tempArr,setTempArr] = useState<any[]>([]);

    //初始化左侧列表项
    let leftTagList = dataList.map((item,index)=>{
        if(item.status){
            setNewList([...selectItems,item]);
        }
        return (
          <ListGroup.Item key={`${pagekey}grouupLeftitem_${index}`} 
            style={{borderRadius:'2px'}}
            as="li"
            active={(leftcheckState[index])?true:false}
            eventKey={item.tagid}
            ref={(swipeable: any) => Leftrefs.current[index] = swipeable} 
            variant="light" 
            onClick={()=>{leftItemChecked(index)}} 
           >
            {item.name}
          </ListGroup.Item>
        )
    });

    // 初始化右侧列表项
    let rightTagList = selectItems.map((item,index)=>{
        return (
            <ListGroup.Item key={`${pagekey}grouupRighttitem_${index}`} 
                variant="light"
                eventKey={item.tagid}
                active={(rightcheckState[index])?true:false}
                ref={(swipeable: any) => Rightrefs.current[index] = swipeable}
                onClick={()=>{RightItemChecked(index)}}
            >
                {item.name}
            </ListGroup.Item>
        )
    });

    //左侧点击事件
    const leftItemChecked = (index:number)=>{
        leftcheckState[index] = !leftcheckState[index];
        setLeftChecks([...leftcheckState,leftcheckState[index]]);
        if(leftcheckState[index]){
            let isSel = false;
            selectItems.map((item)=>{
                if(item.tagid === dataList[index].tagid){
                    isSel = true;
                }
            });

            if(!isSel){               
                setTempItemsList([...tempSelectItems,dataList[index]]);
            }
        }else{
            tempSelectItems.splice(index,1);
        }
    }
    
    // 右侧点击事件
    const RightItemChecked = (index:number)=>{
        rightcheckState[index] = !rightcheckState[index];
        setRightChecks([...rightcheckState,rightcheckState[index]]);
        if(rightcheckState[index]){
            tempArr.push(selectItems[index].tagid);
        }else{
           tempArr.splice(index,1);
        }
        console.log(tempArr);
    }

    const clearActiveStyle = ()=>{
        dataList.map((item,index)=>{
            leftcheckState[index] = false;
            setLeftChecks([...leftcheckState,leftcheckState[index]]);
            
        });
        selectItems.map((item,index)=>{
            rightcheckState[index] = false;
            setRightChecks([...rightcheckState,rightcheckState[index]]);
        });
        
    }

    //@param true:所有 false：多选 
    const setInputVal = (param:boolean)=>{
        let inputVal = leftInput.current.value;
        if(inputVal !=null && inputVal!=''){
            let tid =Math.random()+'';
            let  inputItem = {tagid:tid,name:inputVal,status:false};
            setRightChecks([...rightcheckState,false]);
            if(param){
                selectItems.push(inputItem);
            }else{
                tempSelectItems.push(inputItem);
            }
            leftInput.current.value="";  
        }
    }

    // 定义按钮事件
    const moveToRightAll =()=>{
        let newArr = Array.from(new Set([...dataList, ...selectItems]));
        setNewList(newArr);
        clearActiveStyle();
        
    }
    
    
    const moveToRight =()=>{
        clearActiveStyle();
        setInputVal(false);
        if(tempSelectItems.length>0){
            tempSelectItems.map((item)=>{
                selectItems.push(item);
            });
            setNewList(selectItems);
            setTempItemsList([]);
        }

    }
    
    const moveToLeft =()=>{
        if(tempArr.length>0){
            let arr1 = selectItems.filter(si=>{return !(tempArr).includes(si.tagid)});
            setNewList(arr1);
            setTempArr([]);
        }
        clearActiveStyle();
    }

    const moveToLeftAll =()=>{
        clearActiveStyle();
        setTempItemsList([]);
        setNewList([]);
    }
    return (
        <Row className="mb-3"  key={`${pagekey}row02`}>
            <Col xs lg="2" key={`${pagekey}row02col01`}>
            <h6>タグ(コース)</h6>
            <div style={{border:'1px solid #dee2e6',borderRadius:'0.375rem'}} key={`${pagekey}leftlistdiv01`}>
            <ListGroup defaultActiveKey={`${pagekey}Litemleft0`} ref={LeftGroup} key={`${pagekey}LeftGroup0`} style={{height:'205px',overflowY:'auto',marginBottom:'5px',borderRadius:0}}>
               {leftTagList}
            </ListGroup>
            </div>
            
            <Form.Control
                type="search"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                ref={leftInput}
            />
            </Col>
            <Col md="auto"  key={`${pagekey}row02col02`}>
            <div className="d-grid gap-2" style={{marginTop:'45px'}} key={`${pagekey}buttonGroupDiv01`}>
                <Button onClick={()=>{moveToRightAll()}}><BsChevronDoubleRight style={{width:"22", height:"22"}} /></Button>
                <Button onClick={()=>{moveToRight()}}><BsChevronRight style={{width:"22", height:"22"}} /></Button>
                <Button onClick={()=>{moveToLeft()}}><BsChevronLeft style={{width:"22", height:"22"}} /></Button>
                <Button onClick={()=>{moveToLeftAll()}}><BsChevronDoubleLeft style={{width:"22", height:"22"}} /></Button>
            </div>
                
            </Col>
            <Col xs lg="2"  key={`${pagekey}row02col03`}>
            <h5>このコースに設定するタグ</h5>
            <div style={{border:'1px solid #dee2e6',borderRadius:'0.375rem'}} key={`${pagekey}rightlistdiv01`}>
            <ListGroup  style={{height:'243px',overflowY:'auto',marginBottom:'5px',borderRadius:0}} key={`${pagekey}RightGroup0`}  ref={RightGroup}>
                {rightTagList}
            </ListGroup>
            </div>
                
            </Col>
        </Row>
    );
}