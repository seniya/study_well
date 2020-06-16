<template>
  <div>
    <h1>입력 페이지</h1>
    <p>
      *first_name :
      <input type="text" v-model="user.first_name" />
    </p>
    <p>
      *last_name :
      <input type="text" v-model="user.last_name" />
    </p>
    <p>
      *email :
      <input type="text" v-model="user.email" />
    </p>
    <p>
      *gender :
      <input type="text" v-model="user.gender" />
    </p>
    <p>
      *status :
      <input type="text" v-model="user.status" />
    </p>
    <p>
      address :
      <input type="text" v-model="user.address" />
    </p>
    <p>
      dob :
      <input type="text" v-model="user.dob" />
    </p>
    <p>
      phone :
      <input type="text" v-model="user.phone" />
    </p>
    <p>
      website :
      <input type="text" v-model="user.website" />
    </p>
    <button @click="actionOnClick">생성</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import router from '../../routes';
import ApiUser, { UserConfig } from '../../service/ApiUser';

@Component({})
export default class Create extends Vue {
  private user: UserConfig = {
    first_name: 'Kim',
    last_name: 'Malrang',
    email: '11111slew19@roberts.com',
    gender: 'male',
    status: 'active',
    address: '',
    dob: '',
    phone: '',
    website: ''
  };

  async mounted() {
    console.log('Create mounted');

    // const user = {
    //   first_name: 'Brian',
    //   last_name: 'Ratke',
    //   gender: 'male',
    //   email: '111111lew19@roberts.com',
    //   status: 'active'
    // };

    // ApiUser.create(user)
    //   .then(response => {
    //     console.log('create user #1: ', response);
    //   })
    //   .catch(error => {
    //     console.log('create user #1: ', error);
    //   });
  }

  async actionOnClick() {
    console.log('actionOnClick :>> ', this.user);

    await ApiUser.create(this.user)
      .then(response => {
        console.log('create user #1: ', response);
        const id = response.result.id;
        if (id === undefined) {
          alert('작은 실패');
        } else {
          alert('성공');
          router.push(`/detail/` + id);
        }
      })
      .catch(error => {
        alert('큰 실패');
        console.log('create user #2: ', error);
      });
  }
}
</script>
