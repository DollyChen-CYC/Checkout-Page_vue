<template>
  <header>
    <div class="header-menu d-flex flex-column">
      <input
        type="checkbox"
        name="navbar-toggle"
        id="navbar-toggle"
        class="d-none"
      />
      <label for="navbar-toggle" class="navbar-toggle-label"
        ><i class="fas fa-bars"></i
      ></label>
      <nav>
        <ul class="nav-list">
          <li v-for="navItem in navList" :key="navItem.title" class="nav-item">
            <router-link class="nav-link" :to="navItem.link">{{
              navItem.title
            }}</router-link>
          </li>
        </ul>
      </nav>
      <div class="header-actions d-flex justify-content-center">
        <a
          href="#"
          class="header-link header-link-search px-3 d-flex align-items-center"
        >
          <i class="fas fa-search"></i>
        </a>
        <a
          href="#"
          class="
            header-link header-link-shopping-cart
            px-3
            d-flex
            align-items-center
          "
        >
          <i class="fas fa-shopping-cart"></i>
        </a>
        <label
          for="dark-mode-toggle"
          class="header-link header-link-dark px-3 d-flex align-items-center"
        >
          <i class="fas fa-moon"></i>
          <i class="fas fa-sun d-none"></i>
        </label>
        <input
          type="checkbox"
          name="dark-mode-toggle"
          id="dark-mode-toggle"
          class="d-none"
        />
        <!-- use JS to control the toggle of d-flex / d-none -->
      </div>
    </div>
    <router-link to="" class="brand d-flex align-items-center">
      <img class="d-inline-block mr-1" :src="logoImage" alt="Alpha Camp logo" />
      <h1 class="shop-name d-inline-block">ALPHA Shop</h1>
    </router-link>
  </header>
</template>

<script>
import logoImage from "./../assets/images/Icon@2x.png";

const dummyData = {
  navList: [
    {
      title: "男款",
      link: "",
    },
    {
      title: "女款",
      link: "",
    },
    {
      title: "最新消息",
      link: "",
    },
    {
      title: "聯絡我們",
      link: "",
    },
    {
      title: "客製商品",
      link: "",
    },
  ],
};

export default {
  data() {
    return {
      logoImage,
      navList: dummyData.navList,
    };
  },
};
</script>

<style lang="scss" scoped>
  
</style>