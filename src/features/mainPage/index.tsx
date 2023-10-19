// @ts-ignore
import Title from 'antd/es/typography/Title';
import styles from './main.module.scss';

const Mainpage = () => {
  return (
    <div>
      <img src="logo.jpg" className={styles.logo} />
      <div className={styles.wriperInstruct}>
        <Title level={3} className={styles.instruct}>
          Для начала работы выберете категорию поиска.
          <br />
          После выбора категории напишите в поле ввода
          <br /> необходимый запрос.
          <br />
          Введя запрос вам выведится информация по той
          <br /> категории которую вы выбирали!
        </Title>
      </div>
    </div>
  );
};
export default Mainpage;
