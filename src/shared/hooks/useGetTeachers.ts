import { useEffect, useState } from 'react';
import { getTeachers } from '../service/setvice';

const useGetTeachers = (name: string) => {
  const [isLodaing, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getTeachers(name);
      if (data.data) {
        setData(data.data);
      }
      setLoading(false);
    })();
  }, [name]);

  return { data, isLodaing };
};

export default useGetTeachers;
