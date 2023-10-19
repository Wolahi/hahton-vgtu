import { Menu } from 'antd';
import { GiTeacher } from 'react-icons/gi';
import VgtuLogo from '../../shared/assets/vgtuicon.png';
import styles from './sidebar.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineSchedule } from 'react-icons/ai';
import { PiStudentLight } from 'react-icons/pi';

const itemsMenu = [
  {
    key: 'teachers',
    icon: <GiTeacher size={20} />,
    label: <span className={styles.text}>Преподаватели</span>,
  },
  {
    key: 'shedule',
    icon: <AiOutlineSchedule size={20} />,
    label: <span className={styles.text}>Расписание</span>,
  },
  {
    key: 'studplan',
    icon: <PiStudentLight size={20} />,
    label: <span className={styles.text}>Учебный план</span>,
  },
];

const SideBar = () => {
  const nagivate = useNavigate();
  return (
    <div className={styles.root}>
      <Link to={'/'}>
        <img className={styles.logo} src={VgtuLogo} />
      </Link>
      <Menu
        mode="inline"
        items={itemsMenu}
        className={styles.sideBar}
        onClick={(e) => nagivate(`/${e.key}`)}
      />
    </div>
  );
};

export default SideBar;
