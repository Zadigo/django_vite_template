<template>
  <li class="nav-item dropdown">
    <a :class="{ show }" class="nav-link dropdown-toggle" href @click.prevent="showDropdown">
      {{ linkName }}
    </a>

    <ul ref="link" :class="{ show, 'dropdown-menu-dark' : darkMode }" class="dropdown-menu p-2" @mouseleave="show = false">
      <template v-for="(item, x) in items" :key="x">
        <li v-if="hasSubmenu(item.subMenu)" class="has-submenu">
          <a :class="{ 'bg-dark text-light': darkMode }" class="dropdown-item dropdown-toggle" href @click.prevent>
            {{ item.name }}
          </a>

          <div :class="{ 'bg-dark text-light': darkMode }" class="megasubmenu dropdown-menu">
            <div :class="[item.subMenu.length === 1 ? 'justify-content-start' : 'justify-content-around']" class="d-flex gap-2 w-auto align-items-left">
              <div v-for="(subItem, y) in item.subMenu" :key="y" class="w-auto">
                <h6 class="title">{{ subItem.title }}</h6>

                <ul class="list-unstyled">
                  <li v-for="(link, z) in subItem.links" :key="z">
                    <a :href="link.href" :class="{'text-light': darkMode, 'text-dark': !darkMode}" class="rounded-2">
                      {{ link.name }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <!-- <div class="row">
              <div class="col-12">
                <h6 class="title">{{ item.subMenu.title }}</h6>
                <ul class="list-unstyled w-auto">
                  <li v-for="(link, y) in item.subMenu.links" :key="y">
                    <a :href="link.href" :class="{'text-light': darkMode, 'text-dark': !darkMode}" class="rounded-2">
                      {{ link.name }}
                    </a>
                  </li>
                </ul>
              </div>
            </div> -->
          </div>
        </li>

        <li v-else>
          <router-link v-if="item.to" :to="item.to" :class="{ 'text-light': darkMode }" class="dropdown-item">
            {{ item.name }}
          </router-link>

          <a v-else :href="item.href" :class="{ 'text-light': darkMode }" class="dropdown-item">
            {{ item.name }}
          </a>
        </li>
      </template>

      <!-- <li><a class="dropdown-item" href="#"> Dropdown item 1 </a></li>

      <li class="has-submenu">
        <a class="dropdown-item dropdown-toggle" href @click.prevent> Dropdown item 4 </a>

        <div class="megasubmenu dropdown-menu">
          <div class="row">
            <div class="col-12">
              <h6 class="title">Title Menu One</h6>
              <ul class="list-unstyled">
                <li><a href="#">Custom Menu</a></li>
                <li><a href="#">Custom Menu</a></li>
                <li><a href="#">Custom Menu</a></li>
                <li><a href="#">Custom Menu</a></li>
                <li><a href="#">Custom Menu</a></li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      
      <li class="has-submenu">
        <a class="dropdown-item dropdown-toggle" href @click.prevent> Dropdown item 5 </a>

        <div class="megasubmenu dropdown-menu">
          Excepteur sint occaecat cupidatat non
          proident.
        </div>
      </li>
      
      <li><a class="dropdown-item" href="#"> Dropdown item 6 </a></li> -->
    </ul>
  </li>
</template>

<script>
import { inject, ref } from 'vue'
import sidedropdown from '../../../data/sidedropdown.json'

export default {
  name: 'BaseSideDropdown',
  props: {
    linkName: {
      type: String,
      required: true
    }
  },
  setup () {
    const target = null
    const show = ref(false)
    const darkMode = inject('darkMode', false)
    return {
      show,
      darkMode,
      target,
      items: sidedropdown
    }
  },
  mounted () {
    this.target = this.$refs.link
  },  
  methods: {
    showDropdown () {
      this.show = !this.show
    },
    hasSubmenu (item) {
      return item.length > 0
    }
  }
}
</script>

<style>
.dropdown-item.dropdown-item-dark:focus,
.dropdown-item.dropdown-item-dark:hover {
  /* color: ; */
  /* background-color: rgba(38, 38, 38, .5); */
}
.megasubmenu a {
  display: block;
  padding: .25rem 1rem;
}
.megasubmenu a:hover {
  color: #1e2125;
  background-color: #e9ecef;
}
</style>
