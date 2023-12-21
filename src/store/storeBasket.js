import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useStoreSpool } from './storeSpool'


export const useStoreBasket = defineStore('basket', () => {
    const storeSpool = useStoreSpool()

    const basketData = ref([])

    function addInBasket(id) {
        storeSpool.jsonplasholder.forEach((e) => {
            if (e.id == id) {
                let productId = Date.now()
                basketData.value.push({ ...e, productId });
            }
        })
    }

    function removeInBasket(id) {
        basketData.value = basketData.value.filter(e => e.productId !== id)
    }

    const fullPrice = computed(() => {
        let res = ref(0)
        basketData.value.forEach(e => res.value += e.price)
        return res

    })


    return { addInBasket, basketData, removeInBasket, fullPrice }
})