<template>
  <div class="display">
    <div class="container-fluid">
      <div class="dashboard-header">
        <rds-row>
          <div class="header-content">
            <h1>Display Component's</h1>
          </div>
        </rds-row>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Display',
    
    // components
    components: {
    },

    // component data
    data() {
      return {
      }
    }
  }
</script>
  
<style>
  @media (min-width: 1024px) {
    .display {
      min-height: 100%;
      display: flex;
      align-items: center;
      padding-bottom: 10rem;
    }
  }
  
</style>
  