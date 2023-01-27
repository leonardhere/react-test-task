import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Главная', 'sub1', <AppstoreOutlined />, [
    getItem('Элемент 1', 'g1', null, [getItem('Элемент 1.1', '1'),], 'group'),
    getItem('Элемент 2', 'g2', null, [getItem('Элемент 2.1', '3'),], 'group'),
  ]),
  getItem('Почта', 'sub2', <MailOutlined />, [
    getItem('Элемент', '5'),
    getItem('Элемент 2', '6'),
    getItem('Тут ещё элементы', 'sub3', null, [getItem('Опять элемент', '7'), getItem('И ещё', '8')]),
  ]),
  {
    type: 'divider',
  },
];
const LeftMenu = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};
export default LeftMenu;