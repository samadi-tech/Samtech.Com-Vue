<template>
    <nav class="h-auto" :class="scrollNavbar">
        <div class="container h-[70px] flex items-center justify-between">
            <div class="logo">
                <h1 class=" text-dark font-semibold text-lg uppercase hover:opacity-90 cursor-pointer">Adi Nugroho</h1>
                <p class="text-dark font-light text-xs uppercase hover:opacity-90 cursor-pointer">Samadi Tech . COM</p>
            </div>
            <div class="hidden gap-5 md:flex">
                <router-link class=" text-gray-700 font-base  py-4 hover:text-sky-500  transition duration-300
                    ease-in-out" :to="{ name: 'Home' }" @click="changeMenu('Home')" :class="menuActive === 'Home'
                    ? 'text-sky-700' : ''">Home
                </router-link>
                <router-link class=" text-gray-700 font-base  py-4 hover:text-sky-500  transition duration-300
                        ease-in-out" :to="{ name: 'Profil' }" @click="changeMenu('Profil')" :class="menuActive === 'Profil'
                        ? 'text-sky-700' : ''">Profil
                </router-link>
                <router-link
                    class="text-gray-700 font-base  py-4 hover:text-sky-500  transition duration-300 ease-in-out"
                    :to="{ name: 'Gallery' }" @click="changeMenu('Gallery')" :class="menuActive === 'Gallery'
                    ? 'text-sky-700' : ''">
                    Gallery
                </router-link>
                <router-link class="text-gray-700 font-base py-4 hover:text-sky-500 transition duration-300 ease-in-out"
                    :to="{ name: 'About' }" @click="changeMenu('About')" :class="menuActive === 'About'
                    ? 'text-sky-700' : ''">About
                </router-link>
                <router-link :to="{ name: 'About' }">
                    <div class="p-2 flex items-center justify-center"><span
                            class="border-2 border-sky-500 px-8 rounded-full py-2 text-sky-500 shadow-sm transition duration-300 ease-in-out hover:border-gray-900 hover:text-gray-900">Join</span>
                    </div>
                </router-link>
            </div>
            <div class="flex items-center md:hidden">
                <button @click="menuCLick" id="humburger" name="humberger" class="ml-10 block right-5"
                    :class="menu ? 'active' : ''"><span class="humberger-line "></span><span
                        class="humberger-line relative before:contents[] before:absolute before:top-0 before:left-0 before:w-full before:h-full"></span><span
                        class="humberger-line"></span></button>
            </div>
        </div>
        <div class="menu-mobile transition duration-300 ease-in-out" :class="hiddenMenu ? 'hidden' : ''">
            <div class="container flex flex-col pb-3">
                <router-link class=" text-gray-700 font-base  py-4 hover:text-sky-500 transition duration-300
                    ease-in-out" :to="{ name: 'Home' }" @click="changeMenu('Home')" :class="menuActive === 'Home'
                    ? 'text-sky-700' : ''">Home
                </router-link>
                <router-link class=" text-gray-700 font-base  py-4 hover:text-sky-500 transition duration-300
                        ease-in-out" :to="{ name: 'Profil' }" @click="changeMenu('Profil')" :class="menuActive === 'Profil'
                        ? 'text-sky-700' : ''">Profil
                </router-link>
                <router-link
                    class="text-gray-700 font-base  py-4 hover:text-sky-500 transition duration-300 ease-in-out"
                    :to="{ name: 'Gallery' }" @click="changeMenu('Gallery')" :class="menuActive === 'Gallery'
                    ? 'text-sky-700' : ''">
                    Gallery
                </router-link>
                <router-link class="text-gray-700 font-base py-4 hover:text-sky-500 transition duration-300 ease-in-out"
                    :to="{ name: 'About' }" @click="changeMenu('About')" :class="menuActive === 'About'
                    ? 'text-sky-700' : ''">About
                </router-link>
                <router-link :to="{ name: 'About' }">
                    <div class="p-2 flex items-center justify-center"><span
                            class="border-2 border-sky-500 px-8 rounded-full py-2 text-sky-500 shadow-sm transition duration-300 ease-in-out hover:border-gray-700 hover:text-gray-500">Join</span>
                    </div>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { onMounted, onUpdated, onUnmounted, ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const hiddenMenu = ref(true);

const menu = ref(false);
const scrollNavbar = ref('');

onMounted(() => {
    window.onscroll = () => {
        const header = document.querySelector('nav');
        const fixedHeader = header.offsetTop - 70;

        if (window.pageYOffset > fixedHeader) {

            scrollNavbar.value = "fixed-nav";
        }
        else {
            scrollNavbar.value = ''
        }

    }
})

const menuActive = computed(() => {
    return store.state.HomeState.navbar.menuActive
})

const menuCLick = () => {
    hiddenMenu.value = !hiddenMenu.value;
    menu.value = !menu.value;
}
const changeMenu = (e) => {
    store.dispatch('HomeState/getMenuActive', e)
}

</script>

