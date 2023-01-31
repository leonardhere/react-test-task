import { Menu } from 'antd';
import { useNavigate } from "react-router-dom";

const items = [
    {label: 'Новые', key: '/newtasks'},
    {label: 'Выполненные', key: '/donetasks'},
    {label: 'Архив', key: '/archive'}
];
const TaskMenu = () => {
  const navigate = useNavigate()
  return (
    <Menu
      onClick={({key}) => {
        if(key) {
          navigate(key)
        }
      }

      }
      style={{
        width: 256,
      }}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};
export default TaskMenu;