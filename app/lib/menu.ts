
import {BsSpeedometer,BsPersonFillGear} from 'react-icons/bs';
import {FaBookOpenReader} from 'react-icons/fa6'
import {MdManageAccounts} from 'react-icons/md'

export const menubar  = [
    { id:'report01',
      name: '進捗管理', 
      href: '/report', 
      icon: BsSpeedometer },
    { id:'study01',
      name: '学習', 
      href: '/study', 
      icon: FaBookOpenReader },
    {
      id:'admin01',
      name: '管理',
      href: '#',
      icon: MdManageAccounts,
      submenu:[{
        id:'admin02',
        name: 'グループ管理',
        href:'/admin/group',
      },
      {
        id:'admin03',
        name: 'ユーザ管理',
        href:'/user',
      },
      {
        id:'admin04',
        name: '部署管理',
        href:'/admin/depart',
      },
      {
        id:'admin05',
        name: 'コース管理',
        href:'/admin/course',
      },
      {
        id:'admin06',
        name: 'カリキュラム管理',
        href:'/',
      },
      {
        id:'admin07',
        name: '添付ファイル管理',
        href:'/',
      },
      {
        id:'admin08',
        name: 'メール配信履歴',
        href:'/',
      },
      {
        id:'admin09',
        name: '集計・分析',
        href:'/',
      }
        ]
    }
  ];