<template>
    <section class="bg-gray-50 min-h-screen w-full pt-[70px] relative">
        <div style="clip-path: circle(79.1% at 0 100%);
" class="absolute top-0 left-0 w-full h-full bg-gray-200 "></div>
        <div class="container flex flex-wrap h-screen w-full md:pt-100 z-10 relative">
            <div class="profile h-1/2 lg:h-full w-full lg:w-1/2">
                <img src="../assets/img/profile.png" class="w-full h-full object-cover">
            </div>
            <div class="w-full h-1/2 lg:h-full flex flex-col justify-center text-center lg:w-1/2 lg:text-right">
                <h1 class="text-base text-sky-500 font-base lg:text-xl">Perkenalkan! Nama Saya <span
                        class="text-gray-700 font-black block text-4xl lg:text-6xl">{{ nama }}</span></h1>
                <h3 class="text-slate-500 font-extralight">Web Developer | Android Developer</h3>
                <p class="mt-5 text-gray-700 font-poppins font-light text-center lg:text-right lg:text-xl">Sekilas
                    tentang, Saya
                    merupakan
                    mahasiswa
                    Insan
                    Pembangunan
                    Bitung, Tangerang. Saya mengambil jurusan Sistem Informasi. Saya tertarik dalam WEB Developer dan
                    juga
                    Android Developer.</p>
                <button
                    class="px-6 py-3 rounded-full text-gray-50 bg-sky-500 my-5 w-[180px] text-center self-center lg:self-end">Hubungi
                    Saya</button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';

const store = useStore()

const nama = computed(() => store.state.ProfilState.nama)

</script>