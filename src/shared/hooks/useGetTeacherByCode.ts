import { useEffect, useState } from 'react';
import { getTeacherById } from '../service/setvice';

const useGetTeachers = (id: number) => {
  const [isLodaing, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getTeacherById(id);
      if (data.data) {
        setData(data.data);
      }
      setLoading(false);
    })();
  }, [id]);

  return { data, isLodaing };
};

export default useGetTeachers;
