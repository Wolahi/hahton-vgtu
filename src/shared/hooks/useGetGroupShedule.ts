import { useEffect, useState } from 'react';
import { getGroupSheduleById } from '../service/setvice';

const useGetGroupNameShedules = (groupName: string) => {
  const [isLodaing, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getGroupSheduleById(groupName);
      if (data.data) {
        setData(data.data);
      }
      setLoading(false);
    })();
  }, [groupName]);

  return { data, isLodaing };
};

export default useGetGroupNameShedules;
