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
          Для начала работы с сервисом выберите категорию поиска в левой части экрана. После выбора
          категории поиска <span style={{ color: '#d1af68' }}>преподавателей</span> открывается поле
          для ввода ФИО (или выбор из имеющихся) преподавателей. После ввода отображается результат
          необходимого списка преподавателей. Зайдя в профиль преподавателя можно просмотреть его
          контактную информацию и расписание пар, которые он ведёт. <br />
          Зайдя в категорию
          <span style={{ color: '#d1af68' }}> расписание </span>
          можно выбрать факультет, для которого необходимо найти расписание пар. Выбрав из
          имеющегося списка группу, открывается полное расписание группы.
        </div>
      </div>
    </div>
  );
};
export default Mainpage;
