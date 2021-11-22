<template>
  <header>
    <div class="header__container">
      <input
        type="checkbox"
        name="navbar__toggle"
        id="navbar__toggle"
        class="navbar__toggle"
      />
      <label for="navbar__toggle" class="navbar__toggle-label"
        ><i class="fas fa-bars"></i
      ></label>
      <nav>
        <ul class="navbar__nav-list">
          <li
            v-for="navItem in navList"
            :key="navItem.title"
            class="navbar__nav-list__nav-item"
          >
            <router-link
              class="navbar__nav-list__nav-item__nav-link"
              :to="navItem.link"
            >
              {{ navItem.title }}
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="header-actions">
        <router-link to="" class="header-actions__header-link">
          <i class="fas fa-search"></i>
        </router-link>
        <router-link to="" class="header-actions__header-link">
          <i class="fas fa-shopping-cart"></i>
        </router-link>
        <div
          @click="toggleDarkMode"
          for="header-actions__dark-mode-toggle"
          class="header-actions__dark-mode-toggle header-actions__header-link"
        >
          <span v-show="darkMode"><i class="fas fa-sun"></i></span>
          <span v-show="!darkMode"><i class="fas fa-moon"></i></span>
        </div>
      </div>
    </div>
    <router-link to="" class="header__brand">
      <img
        class="header__brand__logo-img"
        :src="require('./../assets/images/Icon@2x.png')"
        alt="Alpha Shop logo"
      />
      <h1 class="header__brand__shop-name">ALPHA Shop</h1>
    </router-link>
  </header>
</template>

<script>
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
      navList: dummyData.navList,
      darkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
  },
  watch: {
    darkMode: function () {
      if (this.darkMode) {
        document.documentElement.setAttribute("dark-theme", "dark");
      } else {
        document.documentElement.setAttribute("dark-theme", "light");
      }
    },
  },
};
</script>
