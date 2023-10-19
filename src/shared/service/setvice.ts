import axios from 'axios';

export const getAllFacul = async () => {
  return await axios.get('/allFacul');
};

export const getGroupsByFacul = async (facul: string) => {
  return await axios.get('/schedule//GetGroupsListByFaculty}', { params: { faculty: facul } });
};

export const getGroupSheduleById = async (groupName: string) => {
  return await axios.get('/schedule//GetSchedules$', { params: { group: groupName } });
};

export const getTeachers = async (subString: string) => {
  return await axios.post('/teacher/GetAllTeacher', {
    data: {
      name: subString,
    },
  });
};

export const getTeacherById = async (id: number) => {
  return await axios.get('/teacher/GetTeacherByCode$', { params: { code: id } });
};
