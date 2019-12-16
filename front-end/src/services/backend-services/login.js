import baseAPI from './baseAPI';
import { LOGIN_URL } from '../../constants/urls'

export default function userLogin(credentials) {
  debugger
  return baseAPI().post( LOGIN_URL, credentials );
}
