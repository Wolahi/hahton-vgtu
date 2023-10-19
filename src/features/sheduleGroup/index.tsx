import { useParams } from 'react-router';
import styles from '../sheduleGroup/shedule.module.scss';
import { Card, List } from 'antd';

const SheduleGroup = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className={styles.root}>
      <span className={styles.headerText}>Рассписание группы бпи</span>
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
  );
};

export default SheduleGroup;
