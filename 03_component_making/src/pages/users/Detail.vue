<template>
  <div>
    <h1>상세 페이지</h1>
    <div v-if="renderable">
      <p>{{ `first_name : ${user.first_name}` }}</p>
      <p>{{ `last_name : ${user.last_name}` }}</p>
      <p>{{ `email : ${user.email}` }}</p>
      <p>{{ `gender : ${user.gender}` }}</p>
      <p>{{ `status : ${user.status}` }}</p>
      <p>{{ `address : ${user.address}` }}</p>
      <p>{{ `dob : ${user.dob}` }}</p>
      <p>{{ `phone : ${user.phone}` }}</p>
      <p>{{ `website : ${user.website}` }}</p>
      <button @click="actionOnClick">수정</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ApiUser, { UserConfig } from '../../service/ApiUser';
import router from '../../routes';
import { Route } from 'vue-router';

@Component({})
export default class Detail extends Vue {
  /* Prop example
  @Prop() readonly msg!: string
  @Prop({default: 'John doe'}) readonly name: string
  @Prop({required: true}) readonly age: number
  @Prop(String) readonly address: string
  @Prop({required: false, type: String, default: 'Developer'}) readonly job: string
  */

  $route!: Route;

  private id!: string;
  private renderable = false;
  private user?: UserConfig;

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

  actionOnClick(): void {
    console.log('actionOnClick :>> ');
    router.push(`/update/` + this.id);
  }
}
</script>
