<template>
  <div>
    <ContentNavigation v-slot="{ navigation }">
      <!-- <pre>{{ navigation }}</pre> -->
      <nav class="header-nav">
        <ul>
          <li v-for="link of navigation" :key="link._path">
            <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </ContentNavigation>
    <NuxtPage />
  </div>
</template>

<style>
.header-nav ul {
  padding: 10px;
  display: flex;
  align-items: center;
  list-style: none;
}
.header-nav ul li {
  padding: 0 10px;
}
pre {
  background: #efefef;
  border-radius: 5px;
  padding: 15px;
}
</style>
