import HttpService from './HttpService';
import { AxiosResponse } from 'axios';

/*
function getAll(): Promise<AxiosResponse> {
  return HttpService({
    url: '/users1',
    method: 'get'
  });
}

! -> Nullable 이라고합니다. 느낌표를 붙이면 null과 undefind를 허용합니다. 즉 초기화 하지 않아도 됩니다.
아래 두 코드는 같은 의미입니다.

? -> Optional 이라고합니다. 말그대로 필수값이 아닌 옵셔널한 값이라는 뜻입니다. 
사실 클래스 내부에서 프로퍼티에 쓰기에는 적합하지 않다고 생각합니다. 아마 다음 수업에서 프로퍼티에 ?를 사용하는대신 !를 사용하는 방법에 대한 내용이 포함되어 있을 것입니다.
*/

interface UserConfig {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  status: string;
  address?: string;
  dob?: string;
  phone?: string;
  website?: string;
}

const ApiUser = {
  getAll: function(): Promise<AxiosResponse> {
    return HttpService({
      url: `/users`,
      method: 'get'
    });
  },
  getOne: function(id: string): Promise<AxiosResponse> {
    return HttpService({
      url: `/users/${id}`,
      method: 'get'
    });
  },
  create: function(user: UserConfig) {
    return HttpService({
      url: `/users`,
      method: 'post',
      data: user
    });
  },
  update: function(user: UserConfig) {
    return HttpService({
      url: `/users/${user.id}`,
      method: 'put',
      data: user
    });
  }
};

export default ApiUser;
