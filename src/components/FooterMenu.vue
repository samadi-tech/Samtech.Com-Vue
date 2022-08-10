<template>
    <section class="bg-slate-700 pt-5">
        <div class="container flex flex-wrap lg:mb-10">
            <div class="w-full flex flex-col md:w-1/3">
                <h1 class="uppercase text-base font-medium text-gray-50 mb-3">Menu</h1>
                <router-link class="text-gray-100 text-base font-thin" :to="{ name: 'Home' }"
                    @click="changeMenu('Home')" :class="menuActive === 'Home'
                    ? 'text-red-500' : ''">Home
                </router-link>
                <router-link class="text-gray-100 text-base font-thin" :to="{ name: 'Profil' }"
                    @click="changeMenu('Profil')" :class="menuActive === 'Profil'
                    ? 'text-red-500' : ''">Profil
                </router-link>
                <router-link class="text-gray-100 text-base font-thin" :to="{ name: 'Gallery' }"
                    @click="changeMenu('Gallery')" :class="menuActive === 'Gallery'
                    ? 'text-red-500' : ''">Gallery
                </router-link>
                <router-link class="text-gray-100 text-base font-thin" :to="{ name: 'About' }"
                    @click="changeMenu('About')" :class="menuActive === 'About'
                    ? 'text-red-500' : ''">About
                </router-link>
            </div>
            <div class="w-full my-10 md:w-1/3 md:my-0">
                <h1 class="uppercase text-base font-medium text-gray-50 mb-3">Alamat</h1>

                <p class="text-gray-100 text-base font-normal">PT Samadi Tech . Com</p>
                <p class="text-gray-100 text-base font-thin lg:w-1/2">Jalan bersama namun tidak menikah no 119, Kadu,
                    Tangerang,
                    Banten, 15810</p>
            </div>
            <div class="w-full mb-3 md:w-1/3">
                <h1 class="uppercase text-base font-medium text-gray-50 mb-3">Kontak</h1>
                <p class="text-gray-100 text-base font-thin">adienugroho.email@gmail.com</p>
                <p class="text-gray-100 text-base font-thin">085865138701</p>
                <p class="text-gray-100 text-base font-thin">@adie1007</p>
            </div>
        </div>
        <footer class="text-center text-sm text-gray-200 py-5 border-t-2 border-gray-600">Hak Cipta : &copy;
            Copyright.
            Samadi-Tech |
            ADI
            NUGROHO</footer>
    </section>
</template>

<script setup>

import { onMounted, ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const menuActive = computed(() => {
    return store.state.HomeState.navbar.menuActive
})

const changeMenu = (e) => {
    store.dispatch('HomeState/getMenuActive', e)
}

</script>

