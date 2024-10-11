<template>
  <div class="home">
    <div class="container-fluid">
      <!-- Content here -->
      <div class="home-header">
        <rds-row>
          <div class="header-content">
            <h1>Home Component</h1>
            
          </div>
        </rds-row>
      </div>
    </div>
  </div>
</template>

<style>
@include heading-3;

@media (min-width: 1024px) {
  .home {
    min-height: 100%;
    display: flex;
    align-items: center;
    padding-bottom: 5rem;
  }
}

.mt-1 {
  margin-top: 1%;
}

.mt-3 {
  margin-top: 3%;
}


</style>
