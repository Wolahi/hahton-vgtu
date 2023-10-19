import { Card, Select, Spin } from 'antd';
import styles from './shedules.module.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useGetAllFacul from '../../shared/hooks/useGetAllFacul';
import useGroupBuFacul from '../../shared/hooks/useGroupsByFacul';

const Shedules = () => {
  const navigate = useNavigate();
  const [selectFalc, setFalc] = useState<string>('');

  const { data: allFulc, isLodaing: loadingFalcs } = useGetAllFacul();
  const { data, isLodaing } = useGroupBuFacul(selectFalc);
  console.log(allFulc, data);
  return (
    <div className={styles.root}>
      <div className={styles.wrapperSelect}>
        <span className={styles.headerText}>Выберите факультет</span>
        <Select
          value={selectFalc}
          onChange={(e) => setFalc(e)}
          loading={loadingFalcs}
          className={styles.select}
          style={{ width: 150 }}
        />
      </div>
      {isLodaing ? (
        <Spin />
      ) : (
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
          <Card hoverable title={<span className={styles.textHeader}>Группа бпи</span>}>
            <span className={styles.textCard}>
              Факультет компьютерных техноголий и информационных систем
            </span>
          </Card>
          <Card hoverable title={<span className={styles.textHeader}>Группа бпи</span>}>
            <span className={styles.textCard}>
              Факультет компьютерных техноголий и информационных систем
            </span>
          </Card>
          <Card hoverable title={<span className={styles.textHeader}>Группа бпи</span>}>
            <span className={styles.textCard}>
              Факультет компьютерных техноголий и информационных систем
            </span>
          </Card>
          <Card hoverable title={<span className={styles.textHeader}>Группа бпи</span>}>
            <span className={styles.textCard}>
              Факультет компьютерных техноголий и информационных систем
            </span>
          </Card>
          <Card hoverable title={<span className={styles.textHeader}>Группа бпи</span>}>
            <span className={styles.textCard}>
              Факультет компьютерных техноголий и информационных систем
            </span>
          </Card>
          <Card hoverable title={<span className={styles.textHeader}>Группа бпи</span>}>
            <span className={styles.textCard}>
              Факультет компьютерных техноголий и информационных систем
            </span>
          </Card>
          <Card hoverable title={<span className={styles.textHeader}>Группа бпи</span>}>
            <span className={styles.textCard}>
              Факультет компьютерных техноголий и информационных систем
            </span>
          </Card>
          <Card hoverable title={<span className={styles.textHeader}>Группа бпи</span>}>
            <span className={styles.textCard}>
              Факультет компьютерных техноголий и информационных систем
            </span>
          </Card>
          <Card hoverable title={<span className={styles.textHeader}>Группа бпи</span>}>
            <span className={styles.textCard}>
              Факультет компьютерных техноголий и информационных систем
            </span>
          </Card>
          <Card hoverable title={<span className={styles.textHeader}>Группа бпи</span>}>
            <span className={styles.textCard}>
              Факультет компьютерных техноголий и информационных систем
            </span>
          </Card>
          <Card hoverable title={<span className={styles.textHeader}>Группа бпи</span>}>
            <span className={styles.textCard}>
              Факультет компьютерных техноголий и информационных систем
            </span>
          </Card>
          <Card hoverable title={<span className={styles.textHeader}>Группа бпи</span>}>
            <span className={styles.textCard}>
              Факультет компьютерных техноголий и информационных систем
            </span>
          </Card>
          <Card hoverable title={<span className={styles.textHeader}>Группа бпи</span>}>
            <span className={styles.textCard}>
              Факультет компьютерных техноголий и информационных систем
            </span>
          </Card>
          <Card hoverable title={<span className={styles.textHeader}>Группа бпи</span>}>
            <span className={styles.textCard}>
              Факультет компьютерных техноголий и информационных систем
            </span>
          </Card>
          <Card hoverable title={<span className={styles.textHeader}>Группа бпи</span>}>
            <span className={styles.textCard}>
              Факультет компьютерных техноголий и информационных систем
            </span>
          </Card>
          <Card hoverable title={<span className={styles.textHeader}>Группа бпи</span>}>
            <span className={styles.textCard}>
              Факультет компьютерных техноголий и информационных систем
            </span>
          </Card>
          <Card hoverable title={<span className={styles.textHeader}>Группа бпи</span>}>
            <span className={styles.textCard}>
              Факультет компьютерных техноголий и информационных систем
            </span>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Shedules;
