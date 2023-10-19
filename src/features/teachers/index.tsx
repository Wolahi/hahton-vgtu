import styles from './main.module.scss';
import { Avatar, List, Select } from 'antd';
import VGTUBlueIcon from '../../shared/assets/vgtuBlueLogo.png';
import { useNavigate } from 'react-router-dom';

const Teacherpage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.root}>
      <div className={styles.wriperInstruct}>
        <Select
          showSearch
          className={styles.select}
          defaultValue="lucy"
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
            { value: 'disabled', label: 'Disabled', disabled: true },
          ]}
        />
      </div>
      <div className={styles.listTeacher}>
        <List>
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
