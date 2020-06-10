<template>
  <div>리스트 페이지</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ApiUser from '../../service/ApiUser';

@Component({})
export default class List extends Vue {
  async mounted() {
    console.log('HellowWorld mounted');

    // const users = await ApiUser.getAll();
    // console.log('users #1: ', users);

    ApiUser.getAll()
      .then(response => {
        console.log('users #2: ', response);
      })
      .catch(error => {
        console.log('users #2: ', error);
      });

    // ApiUser.getAll();

    // const users3 = await ApiUser.getAll();
    //console.log('users #1: ', users);
  }
}
</script>
