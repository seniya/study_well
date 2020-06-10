<template>
  <div>상세정보 페이지</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ApiUser from '../../service/ApiUser';

@Component({})
export default class Detail extends Vue {
  async mounted() {
    console.log('HellowWorld mounted');

    // const users = await ApiUser.getAll();
    // console.log('users #1: ', users);

    ApiUser.getOne('1753')
      .then(response => {
        console.log('user #1: ', response);
      })
      .catch(error => {
        console.log('user #1: ', error);
      });

    // ApiUser.getAll();

    // const users3 = await ApiUser.getAll();
    //console.log('users #1: ', users);
  }
}
</script>
