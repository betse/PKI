<script setup></script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/insa.png" width="30" height="30" />

    <div class="wrapper">
      <nav>
        <li><RouterLink to="/">CSR Generation</RouterLink></li>
        <li><RouterLink to="/login">Login</RouterLink></li>
        <li><RouterLink to="signup">Register</RouterLink></li>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #e3eeff;
  padding: 0.7rem 3rem;
}
nav {
  display: flex;
  width: 100%;
}
li {
  list-style: none;
  padding: 0 10px;
  color: var(--vt-c-black);
  font-weight: 500;
}
li a{
  text-decoration: none;
  color: var(--vt-c-text-light-1);
  font-weight: 500;
}
</style>
