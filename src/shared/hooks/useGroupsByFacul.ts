import { useEffect, useState } from 'react';
import { getGroupsByFacul } from '../service/setvice';

const useGroupBuFacul = (facul: string) => {
  const [isLodaing, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getGroupsByFacul(facul);
      if (data.data) {
        setData(data.data);
      }
      setLoading(false);
    })();
  }, [facul]);

  return { data, isLodaing };
};

export default useGroupBuFacul;
