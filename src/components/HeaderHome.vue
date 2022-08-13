<template>
    <section class="bg-gray-50 min-h-screen w-full pt-[70px]">
        <div class="container flex flex-wrap items-center justify-center min-h-[500px] flex-col gap-4">
            <h1 class=" text-xl lg:text-4xl font-semibold text-sky-500">Selamat Datang di {{ website }}</h1>
            <p class="text-base text-center font-poppins text-gray-700">Dimana kalian bisa belajar bersama membangun
                aplikasi <span class="font-medium text-sky-500 uppercase">WEBSITE</span> dan juga <span
                    class="font-medium text-sky-500 uppercase">android</span>
            </p>
            <div class="w-full lg:w-2/4 mt-10 flex flex-wrap justify-center mx-1">
                <input
                    class="shadow appearance-none border rounded-l flex-1 py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username" type="text" placeholder="Kirim pesan singkat anda ..." autocomplete="off"
                    :value="pesan">
                <button
                    class="py-5 px-10 text-gray-50 flex items-center justify-center transition duration-500 ease-in-out bg-sky-500 hover:bg-sky-400 rounded-r">KIRIM</button>
            </div>
        </div>
    </section>
</template>
<script setup>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';

const store = useStore()

const pesan = ref('')

const website = computed(() => store.state.HomeState.website)



</script>