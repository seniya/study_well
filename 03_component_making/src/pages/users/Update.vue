<template>
  <div>
    <h1>수정 페이지</h1>
    <div v-if="renderable">
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
    </div>
    <button @click="actionOnClick">수정</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Route } from 'vue-router';

import router from '../../routes';
import ApiUser, { UserConfig } from '../../service/ApiUser';

@Component({})
export default class Update extends Vue {
  private user!: UserConfig;

  $route!: Route;
  private id!: string;
  private renderable = false;

  created() {
    this.id = this.$route.params.id;
  }

  async mounted() {
    console.log('Detail item id : ', this.id);

    try {
      this.user = await this.fetchData();
      console.log('mounted user :>> ', this.user);
      this.renderItem(this.user);
    } catch (error) {
      console.log('mounted error:>> ', error);
    }
  }

  async fetchData(): Promise<UserConfig> {
    const response = await ApiUser.getOne(this.id);
    return response.result;
  }

  renderItem(user: UserConfig): void {
    console.log('renderItem user :>> ', user);
    this.user = user;
    this.renderable = true;
  }

  async actionOnClick() {
    console.log('actionOnClick :>> ', this.user);

    await ApiUser.update(this.user)
      .then(response => {
        console.log('update user #1: ', response);
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
        console.log('update user #2: ', error);
      });
  }
}
</script>
