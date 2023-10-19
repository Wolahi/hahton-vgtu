// @ts-ignore
import Title from 'antd/es/typography/Title';
import styles from './main.module.scss';
import { Select, Space } from 'antd';

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
      <Title>ФИО</Title>
    </div>
  );
};
export default Teacherpage;
