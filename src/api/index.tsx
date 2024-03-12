import axios, { } from 'axios';
import { studentList } from '../utils/types';

let baseUrl = 'https://reqres.in/api'

export const getStudentList = (page: number): Promise<studentList[]> => {
  return new Promise((resolve) => {
    axios.get(`${baseUrl}/users?page=${page}`).then(r => {
      resolve(r.data.data)
    }).catch((e) => { console.log('e', e) });
  })
};
