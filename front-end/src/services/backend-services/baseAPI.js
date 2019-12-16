import Axios from 'axios';
import { API_BASE_URL } from '../../constants/urls'

export default function baseAPI(){
    debugger
    return Axios.create({
        baseURL: API_BASE_URL,
        config: {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        }
      });
}
