import { Card, Select } from 'antd';
import styles from './shedules.module.scss';
import { useNavigate } from 'react-router-dom';

const Shedules = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.root}>
      <div className={styles.wrapperSelect}>
        <span className={styles.headerText}>Выберите факультет</span>
        <Select className={styles.select} style={{ width: 150 }} />
      </div>
      <div className={styles.gridRasp}>
        <Card
          hoverable
          onClick={() => navigate(`/shedule-group/${1}`)}
          title={<span className={styles.textHeader}>Группа бпи</span>}
        >
          <span className={styles.textCard}>
            Факультет компьютерных техноголий и информационных систем
          </span>
        </Card>
        <Card
          hoverable
          onClick={() => navigate(`/shedule-group/${1}`)}
          title={<span className={styles.textHeader}>Группа бпи</span>}
        >
          <span className={styles.textCard}>
            Факультет компьютерных техноголий и информационных систем
          </span>
        </Card>
        <Card
          onClick={() => navigate(`/shedule-group/${1}`)}
          hoverable
          title={<span className={styles.textHeader}>Группа бпи</span>}
        >
          <span className={styles.textCard}>
            Факультет компьютерных техноголий и информационных систем
          </span>
        </Card>
        <Card
          onClick={() => navigate(`/shedule-group/${1}`)}
          hoverable
          title={<span className={styles.textHeader}>Группа бпи</span>}
        >
          <span className={styles.textCard}>
            Факультет компьютерных техноголий и информационных систем
          </span>
        </Card>
        <Card
          onClick={() => navigate(`/shedule-group/${1}`)}
          hoverable
          title={<span className={styles.textHeader}>Группа бпи</span>}
        >
          <span className={styles.textCard}>
            Факультет компьютерных техноголий и информационных систем
          </span>
        </Card>
        <Card
          onClick={() => navigate(`/shedule-group/${1}`)}
          hoverable
          title={<span className={styles.textHeader}>Группа бпи</span>}
        >
          <span className={styles.textCard}>
            Факультет компьютерных техноголий и информационных систем
          </span>
        </Card>
        <Card
          onClick={() => navigate(`/shedule-group/${1}`)}
          hoverable
          title={<span className={styles.textHeader}>Группа бпи</span>}
        >
          <span className={styles.textCard}>
            Факультет компьютерных техноголий и информационных систем
          </span>
        </Card>
        <Card
          onClick={() => navigate(`/shedule-group/${1}`)}
          hoverable
          title={<span className={styles.textHeader}>Группа бпи</span>}
        >
          <span className={styles.textCard}>
            Факультет компьютерных техноголий и информационных систем
          </span>
        </Card>
        <Card
          onClick={() => navigate(`/shedule-group/${1}`)}
          hoverable
          title={<span className={styles.textHeader}>Группа бпи</span>}
        >
          <span className={styles.textCard}>
            Факультет компьютерных техноголий и информационных систем
          </span>
        </Card>
        <Card
          onClick={() => navigate(`/shedule-group/${1}`)}
          hoverable
          title={<span className={styles.textHeader}>Группа бпи</span>}
        >
          <span className={styles.textCard}>
            Факультет компьютерных техноголий и информационных систем
          </span>
        </Card>
        <Card
          onClick={() => navigate(`/shedule-group/${1}`)}
          hoverable
          title={<span className={styles.textHeader}>Группа бпи</span>}
        >
          <span className={styles.textCard}>
            Факультет компьютерных техноголий и информационных систем
          </span>
        </Card>
        <Card
          onClick={() => navigate(`/shedule-group/${1}`)}
          hoverable
          title={<span className={styles.textHeader}>Группа бпи</span>}
        >
          <span className={styles.textCard}>
            Факультет компьютерных техноголий и информационных систем
          </span>
        </Card>
        <Card
          onClick={() => navigate(`/shedule-group/${1}`)}
          hoverable
          title={<span className={styles.textHeader}>Группа бпи</span>}
        >
          <span className={styles.textCard}>
            Факультет компьютерных техноголий и информационных систем
          </span>
        </Card>
        <Card
          onClick={() => navigate(`/shedule-group/${1}`)}
          hoverable
          title={<span className={styles.textHeader}>Группа бпи</span>}
        >
          <span className={styles.textCard}>
            Факультет компьютерных техноголий и информационных систем
          </span>
        </Card>
        <Card
          onClick={() => navigate(`/shedule-group/${1}`)}
          hoverable
          title={<span className={styles.textHeader}>Группа бпи</span>}
        >
          <span className={styles.textCard}>
            Факультет компьютерных техноголий и информационных систем
          </span>
        </Card>
      </div>
    </div>
  );
};

export default Shedules;
