import { Menu } from 'antd';
import { GiTeacher } from 'react-icons/gi';
import { GrSchedules } from 'react-icons/gr';
import VgtuLogo from '../../shared/assets/vgtuicon.png';
import styles from './sidebar.module.scss';
import { Link, useNavigate } from 'react-router-dom';

const itemsMenu = [
  {
    key: 'teachers',
    icon: <GiTeacher size={20} />,
    label: 'Преподаватели',
  },
  {
    key: 'shedule',
    icon: <GrSchedules size={20} />,
    label: 'Расписисание',
  },
  {
    key: 'studplan',
    icon: <GrSchedules size={20} />,
    label: 'Учебный план',
  },
];

export const SideBar = () => {
  const nagivate = useNavigate();
  return (
    <div className={styles.root}>
      <Link to={'/'}>
        <img className={styles.logo} src={VgtuLogo} />
      </Link>
      <Menu items={itemsMenu} className={styles.sideBar} onClick={(e) => nagivate(`/${e.key}`)} />
    </div>
  );
};
