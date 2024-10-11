
<template>
  <header>
    <rds-app-bar
      :appSwitcher="true"
      :help="true"
      :settings="true"
      userName="Rahul Aher"
      userDescription="Administrator"
      @settings-click="logClick"
      @help-click="logClick"
      @avatar-click="logClick"
      @app-switcher-click="logClick"
    >
      <template #app-info>
        <div class="app-switcher">
          <rds-icon
            height="24"
            width="24"
            light
            name="calendar-outline"
          />
          <p class="app-name">
            Asthetic Wedding
          </p>
        </div>
      </template>
      <template #dropdown-content>
          Dropdown content
      </template>
    </rds-app-bar>
  </header>
</template>


<script setup lang="ts">
// imports
import { ref } from 'vue';


</script>

<style>
/*  */


</style>

