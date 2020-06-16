<template>
  <div>
    <h1>리스트 페이지</h1>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        <a href="#" @click.prevent="readDetailUser(user)">
          {{
          `${user.first_name} ${user.last_name} (${user.gender}) ${user.email}`
          }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Component } from 'vue-property-decorator';
import ApiUser, { UserConfig } from '../../service/ApiUser';
import router from '../../routes';
import { Route } from 'vue-router';

@Component({})
export default class List extends Vue {
  private users?: Array<UserConfig> = [];

  $route!: Route;

  created() {
    this.getAllUsers();
    console.log('this: ', this);
    console.log('this.$route : ', this.$route);
  }

  readDetailUser(user: UserConfig): void {
    console.log('readDetailUser user : ', user);
    console.log('this.$route.path : ', this.$route.path);
    router.push(`/detail/${user.id}`);
    // this.$route.push({ name: '/' });
    // router.push({ name: 'home' });
    // router.
  }

  async getAllUsers() {
    console.log('List Component created');
    await ApiUser.getAll().then(response => {
      this.users = response.result;
    });
  }
}
</script>
