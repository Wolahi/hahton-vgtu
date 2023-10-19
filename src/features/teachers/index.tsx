// @ts-ignore
import Title from 'antd/es/typography/Title';
import styles from './main.module.scss';
import { Avatar, Select, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Teacherpage = () => {
  return (
    <div>
      <div className={styles.wriperInstruct}>
        <Space wrap>
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
        </Space>
      </div>
      <div className={styles.wriperInfo}>
        <div>
          <Space className={styles.img} size={50} wrap>
            <Avatar src={<img src={''} alt="avatar" />} />
          </Space>
        </div>
        <div className={styles.text}>
          Фамилия Имя Отчество
          <br />
          Должность
          <br />
          Телефон | Почта
          <br />
          Ученая степень
          <br />
          Кафедра
        </div>
      </div>
    </div>
  );
};
export default Teacherpage;
