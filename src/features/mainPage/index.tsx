// @ts-ignore
import styles from './main.module.scss';
import VgtuBlueLogo from '../../shared/assets/vgtuBlueLogo.png';

const Mainpage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapperLogo}>
        <img src={VgtuBlueLogo} className={styles.logo} />
      </div>
      <div className={styles.wriperInstruct}>
        <div className={styles.titleText}>Инструкция использования</div>
        <div className={styles.text}>
          Для начала работы выберете категорию поиска.
          <br />
          После выбора категории напишите в поле ввода
          <br /> необходимый запрос.
          <br />
          Введя запрос вам выведится информация по той
          <br /> категории которую вы выбирали!
        </div>
      </div>
    </div>
  );
};
export default Mainpage;
