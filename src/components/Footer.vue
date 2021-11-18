<template>
  <footer>
    <div class="footer-container">
      <div class="footer-container__brand">
        <router-link to="" class="footer-container__brand__link">
          <img
            :src="require('../assets/images/Icon@2x.png')"
            alt="Alpha Camp logo"
          />
          <h1 class="footer-container__brand__link__brand-name">ALPHA Shop</h1>
        </router-link>
      </div>
      <div class="footer-container__info-column">
        <h2 class="footer-container__info-column__title">客戶服務</h2>
        <ul class="footer-container__info-column__info-list">
          <li class="footer-container__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__info-column__info-list__item__link"
              >運送說明</router-link
            >
          </li>
          <li class="footer-container__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__info-column__info-list__item__link"
              >退換貨相關</router-link
            >
          </li>
          <li class="footer-container__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__info-column__info-list__item__link"
              >付款資訊</router-link
            >
          </li>
          <li class="footer-container__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__info-column__info-list__item__link"
              >FAQ</router-link
            >
          </li>
        </ul>
      </div>
      <div class="footer-container__info-column">
        <h2 class="footer-container__info-column__title">關於我們</h2>
        <ul class="footer-container__info-column__info-list">
          <li class="footer-container__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__info-column__info-list__item__link"
              >品牌故事</router-link
            >
          </li>
          <li class="footer-container__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__info-column__info-list__item__link"
              >媒體聯繫</router-link
            >
          </li>
          <li class="footer-container__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__info-column__info-list__item__link"
              >Press kit</router-link
            >
          </li>
        </ul>
      </div>
      <div class="footer-container__info-column">
        <h2 class="footer-container__info-column__title">資訊</h2>
        <ul class="footer-container__info-column__info-list">
          <li class="footer-container__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__info-column__info-list__item__link"
              >隱私權政策</router-link
            >
          </li>
          <li class="footer-container__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__info-column__info-list__item__link"
              >Cookie</router-link
            >
          </li>
          <li class="footer-container__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__info-column__info-list__item__link"
              >GDPR</router-link
            >
          </li>
        </ul>
      </div>
      <div class="footer-container__info-column">
        <h2 class="footer-container__info-column__title">追蹤 ALPHA Shop</h2>
        <ul class="footer-container__info-column__info-list">
          <li class="footer-container__info-column__info-list__item">
            +886 02123-45678
          </li>
          <li class="footer-container__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__info-column__info-list__item__link"
              ><i class="footer-icon fab fa-facebook-f"></i
            ></router-link>
            <router-link
              to=""
              class="footer-container__info-column__info-list__item__link"
              ><i class="footer-icon fab fa-instagram"></i
            ></router-link>
            <router-link
              to=""
              class="footer-container__info-column__info-list__item__link"
              ><i class="footer-icon fab fa-whatsapp"></i
            ></router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>