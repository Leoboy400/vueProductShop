import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useStoreSpool = defineStore('babena', () => {
    const jsonplasholder = ref([])
    const jsonplasholderCopy = ref([])
    let price = ref(999);
    const URL = 'https://jsonplaceholder.typicode.com/comments?_limit=20'

    async function add() {
        let res = await fetch(URL)
        if (res.ok) {
            let json = await res.json()
            json.forEach(e => {
                e.price = price.value
            });
            jsonplasholder.value = [...json]
            jsonplasholderCopy.value = [...json]
        }
    }

    function search(str) {
        const regex = new RegExp(str, 'i')
        jsonplasholder.value = jsonplasholderCopy.value.filter((e) => regex.test(e.name))
    }
    add()
    return { jsonplasholder, search, add }
})