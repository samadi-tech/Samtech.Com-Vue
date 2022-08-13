<template>
    <section class="bg-slate-700 pt-5">
        <div class="container flex flex-wrap lg:mb-10">
            <div class="w-full flex flex-col md:w-1/3">
                <h1 class="uppercase text-base font-medium text-gray-50 mb-3">Menu</h1>
                <router-link class="text-gray-100 text-base font-thin" :to="{ name: 'Home' }"
                    @click="changeMenu('Home')" :class="menuActive === 'Home'
                    ? 'text-gray-50 font-semibold' : ''">Home
                </router-link>
                <router-link class="text-gray-100 text-base font-thin" :to="{ name: 'Profil' }"
                    @click="changeMenu('Profil')" :class="menuActive === 'Profil'
                    ? 'text-gray-50 font-semibold' : ''">Profil
                </router-link>
                <router-link class="text-gray-100 text-base font-thin" :to="{ name: 'Gallery' }"
                    @click="changeMenu('Gallery')" :class="menuActive === 'Gallery'
                    ? 'text-gray-50 font-semibold' : ''">Gallery
                </router-link>
                <router-link class="text-gray-100 text-base font-thin" :to="{ name: 'About' }"
                    @click="changeMenu('About')" :class="menuActive === 'About'
                    ? 'text-gray-50 font-semibold' : ''">About
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
        <div class="sosmed flex items-center justify-center gap-3 m-5">
            <div class="w-[50px] aspect-square rounded-full flex items-center justify-center">
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" class="text-blue-500 text-2xl" />
            </div>
            <div class="w-[50px] aspect-square rounded-full flex items-center justify-center">
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" class="text-red-400 text-2xl" />
            </div>
            <div class="w-[50px] aspect-square rounded-full flex items-center justify-center">
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'youtube' }" class="text-red-500 text-2xl" />
            </div>
            <div class="w-[50px] aspect-square rounded-full flex items-center justify-center">
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" class="text-blue-600 text-2xl" />
            </div>

        </div>
        <footer class="text-center text-sm text-gray-200 round py-5 border-t-2 border-gray-600">Hak Cipta : &copy;
            Copyright.
            Samadi-Tech |
            ADI
            NUGROHO</footer>
    </section>
</template>

<script setup>

import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const menuActive = computed(() => {
    return store.state.HomeState.navbar.menuActive
})

const changeMenu = (e) => {
    store.dispatch('HomeState/getMenuActive', e)
}

</script>

