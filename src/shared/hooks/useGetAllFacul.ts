import { useEffect, useState } from 'react';
import { getAllFacul } from '../service/setvice';

const useGetAllFacul = () => {
  const [isLodaing, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getAllFacul();
      if (data.data) {
        setData(data.data);
      }
      setLoading(false);
    })();
  }, []);

  return { data, isLodaing };
};

export default useGetAllFacul;
