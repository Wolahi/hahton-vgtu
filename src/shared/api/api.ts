import axios from 'axios';

export const $api = axios.create({ baseURL: 'http://192.168.180.1:7177' });