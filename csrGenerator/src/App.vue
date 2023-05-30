<script setup></script>

<template>
  <header>
    <RouterLink to="/" class="logo">
      <img alt="Vue logo" class="logo" src="@/assets/insa.png" width="30" height="30" />
      <span>Cert Tool</span>
    </RouterLink>

    <div class="wrapper">
      <nav>
        <li><RouterLink to="/">CSR Generation</RouterLink></li>
        <li><RouterLink to="/gencert">Generate Certificate</RouterLink></li>
        <li><RouterLink to="/login">Login</RouterLink></li>
        <li><RouterLink to="/signup">Register</RouterLink></li>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #e3eeff;
  padding: 0.7rem 3rem;
}
header a {
  text-decoration: none;
}
.logo {
  display: flex;
  align-items: center;
}
.logo span {
  margin-left: 0.5rem;
  color: rgb(37, 126, 243);
  font-weight: 900;
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
li a {
  text-decoration: none;
  color: var(--vt-c-text-light-1);
  font-weight: 500;
}
</style>
