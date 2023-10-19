import { $api } from '../api/api';

export const getAllFacul = async () => {
  return await $api.get('/schedule/GetAllFaculties');
};

export const getGroupsByFacul = async (facul: string) => {
  return await $api.get('/schedule//GetGroupsListByFaculty}', { params: { faculty: facul } });
};

export const getGroupSheduleById = async (groupName: string) => {
  return await $api.get('/schedule//GetSchedules$', { params: { group: groupName } });
};

export const getTeachers = async (subString: string) => {
  return await $api.post('/teacher/GetAllTeacher', {
    data: {
      name: subString,
    },
  });
};

export const getTeacherById = async (id: number) => {
  return await $api.get('/teacher/GetTeacherByCode$', { params: { code: id } });
};
