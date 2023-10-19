import { useParams } from 'react-router';
import styles from './teacherInfo.module.scss';
import { Card, List, Spin } from 'antd';
import useGetTeacherByCode from '../../shared/hooks/useGetTeacherByCode';

const TeacherInfo = () => {
  const { id } = useParams();
  const { data, isLodaing } = useGetTeacherByCode(Number(id));

  if (isLodaing) {
    return (
      <div className={styles.root}>
        <Spin />
      </div>
    );
  }
  console.log(data);
  return (
    <div className={styles.root}>
      <div className={styles.cardTeacher}>
        <div className={styles.photoWrapper}>
          <img
            src={'https://cchgeu.ru/upload/iblock/e50/abramov.jpg'}
            className={styles.photo}
            alt="profile"
          />
        </div>
        <div className={styles.infoTeacher}>
          <span className={styles.nameTechText}>Перелыгин Илья</span>
          <span className={styles.text}>Доцент</span>
          <span className={styles.text}>Кандидат технических наук</span>
          <span className={styles.text}>+7 910 280 96 67</span>
        </div>
      </div>
      <div className={styles.sheduleTeacher}>
        <span className={styles.nameTechText}>Рассписание преподавателя</span>
        <section className={styles.default}>
          <span className={styles.subHeaderText}>Числитель</span>
          <div className={styles.cardsShedule}>
            <Card title={<span className={styles.cardTitleText}>Понедельник</span>}>
              <List>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
              </List>
            </Card>
            <Card title={<span className={styles.cardTitleText}>Понедельник</span>}>
              <List>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
              </List>
            </Card>
            <Card title={<span className={styles.cardTitleText}>Понедельник</span>}>
              <List>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
              </List>
            </Card>
            <Card title={<span className={styles.cardTitleText}>Понедельник</span>}>
              <List>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
              </List>
            </Card>
            <Card title={<span className={styles.cardTitleText}>Понедельник</span>}>
              <List>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
              </List>
            </Card>
          </div>
        </section>
        <section className={styles.default}>
          <span className={styles.subHeaderText}>Знаменатель</span>
          <div className={styles.cardsShedule}>
            <Card title={<span className={styles.cardTitleText}>Понедельник</span>}>
              <List>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
              </List>
            </Card>
            <Card title={<span className={styles.cardTitleText}>Понедельник</span>}>
              <List>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
              </List>
            </Card>
            <Card title={<span className={styles.cardTitleText}>Понедельник</span>}>
              <List>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
              </List>
            </Card>
            <Card title={<span className={styles.cardTitleText}>Понедельник</span>}>
              <List>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
              </List>
            </Card>
            <Card title={<span className={styles.cardTitleText}>Понедельник</span>}>
              <List>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
                <List.Item className={styles.listItem}>
                  <span className={styles.text}>8.30 - 10.05 Философия ауд. 2032</span>
                </List.Item>
              </List>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeacherInfo;
