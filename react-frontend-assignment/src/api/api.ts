import axios from 'axios';
import { TableData } from '../types';


const API_URL = 'https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json';

export const fetchTableData = async (): Promise<TableData[]> => {  
  try {
    const response = await axios.get<TableData[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};
