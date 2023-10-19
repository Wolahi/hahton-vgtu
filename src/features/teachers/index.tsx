import styles from './main.module.scss';
import { Avatar, Input, List, Spin } from 'antd';
import VGTUBlueIcon from '../../shared/assets/vgtuBlueLogo.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useGetTeachers from '../../shared/hooks/useGetTeachers';

const Teacherpage = () => {
  const navigate = useNavigate();
  const [vauleSerach, setValueSearch] = useState<string>('');
  const { data, isLodaing } = useGetTeachers(vauleSerach);

  console.log(data);
  return (
    <div className={styles.root}>
      <div className={styles.wriperInstruct}>
        <Input
          value={vauleSerach}
          onChange={(e) => setValueSearch(e.target.value)}
          className={styles.select}
          defaultValue="lucy"
        />
      </div>
      <div className={styles.listTeacher}>
        <List loading={isLodaing}>
          <List.Item className={styles.listItem} onClick={() => navigate(`/teacher-info/${20}`)}>
            <Avatar src={<img src={VGTUBlueIcon} />} className={styles.avatar} />
            <div className={styles.infoBloc}>
              <span className={styles.nameTechText}>Перелыгин Илья</span>
              <span className={styles.text}>Доцент</span>
              <span className={styles.text}>Кандидат технических наук</span>
              <span className={styles.text}>+7 910 280 96 67</span>
            </div>
          </List.Item>
          <List.Item className={styles.listItem}>
            <Avatar src={<img src={VGTUBlueIcon} />} className={styles.avatar} />
            <div className={styles.infoBloc}>
              <span className={styles.nameTechText}>Перелыгин Илья</span>
              <span className={styles.text}>Доцент</span>
              <span className={styles.text}>Кандидат технических наук</span>
              <span className={styles.text}>+7 910 280 96 67</span>
            </div>
          </List.Item>
          <List.Item className={styles.listItem}>
            <Avatar src={<img src={VGTUBlueIcon} />} className={styles.avatar} />
            <div className={styles.infoBloc}>
              <span className={styles.nameTechText}>Перелыгин Илья</span>
              <span className={styles.text}>Доцент</span>
              <span className={styles.text}>Кандидат технических наук</span>
              <span className={styles.text}>+7 910 280 96 67</span>
            </div>
          </List.Item>
          <List.Item className={styles.listItem}>
            <Avatar src={<img src={VGTUBlueIcon} />} className={styles.avatar} />
            <div className={styles.infoBloc}>
              <span className={styles.nameTechText}>Перелыгин Илья</span>
              <span className={styles.text}>Доцент</span>
              <span className={styles.text}>Кандидат технических наук</span>
              <span className={styles.text}>+7 910 280 96 67</span>
            </div>
          </List.Item>
          <List.Item className={styles.listItem}>
            <Avatar src={<img src={VGTUBlueIcon} />} className={styles.avatar} />
            <div className={styles.infoBloc}>
              <span className={styles.nameTechText}>Перелыгин Илья</span>
              <span className={styles.text}>Доцент</span>
              <span className={styles.text}>Кандидат технических наук</span>
              <span className={styles.text}>+7 910 280 96 67</span>
            </div>
          </List.Item>
          <List.Item className={styles.listItem}>
            <Avatar src={<img src={VGTUBlueIcon} />} className={styles.avatar} />
            <div className={styles.infoBloc}>
              <span className={styles.nameTechText}>Перелыгин Илья</span>
              <span className={styles.text}>Доцент</span>
              <span className={styles.text}>Кандидат технических наук</span>
              <span className={styles.text}>+7 910 280 96 67</span>
            </div>
          </List.Item>
          <List.Item className={styles.listItem}>
            <Avatar src={<img src={VGTUBlueIcon} />} className={styles.avatar} />
            <div className={styles.infoBloc}>
              <span className={styles.nameTechText}>Перелыгин Илья</span>
              <span className={styles.text}>Доцент</span>
              <span className={styles.text}>Кандидат технических наук</span>
              <span className={styles.text}>+7 910 280 96 67</span>
            </div>
          </List.Item>
          <List.Item className={styles.listItem}>
            <Avatar src={<img src={VGTUBlueIcon} />} className={styles.avatar} />
            <div className={styles.infoBloc}>
              <span className={styles.nameTechText}>Перелыгин Илья</span>
              <span className={styles.text}>Доцент</span>
              <span className={styles.text}>Кандидат технических наук</span>
              <span className={styles.text}>+7 910 280 96 67</span>
            </div>
          </List.Item>
        </List>
      </div>
    </div>
  );
};
export default Teacherpage;
