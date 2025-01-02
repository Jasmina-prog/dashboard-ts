
import  { useState } from 'react';
import { MailOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu, Switch } from 'antd';
import { NavLink } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: 'sub1',
        label: 'Navigation One',
        icon: <MailOutlined />,
        children: [
          { key: '1', label: <NavLink to={'/main'}>Main</NavLink> },
          { key: '2', label: <NavLink to={'/users'}>Users</NavLink> },
          { key: '3', label: <NavLink to={'/products'}>Products</NavLink> },
          { key: '4', label: <NavLink to={'/carts'}>Carts</NavLink> },
          { key: '5', label: <NavLink to={'/'}>Back to login</NavLink> },
        ],
      },

];

type PropsMenu = {
    name: string
}
export function MenuGlobal(props:PropsMenu) {

    const [theme, setTheme] = useState<MenuTheme>('dark');
  const [current, setCurrent] = useState('1');

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div style={{display:'flex'}}>
    <div className="menu" style={{position:'fixed', top:0, left:0, bottom:0, }}>
    <Switch
        checked={theme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
        />
      <br />
      <br />
      <Menu
        theme={theme}
        onClick={onClick}
        style={{ width: 256, height:'100%' }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
        />

    </div>
        <h1>{props.name}</h1>
    </div>
  );
}
