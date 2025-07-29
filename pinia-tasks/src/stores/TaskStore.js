import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore',{
    state: () =>({
        tasks:[
            {id: 1, title: "Grind LeetCode", isFav: false },
            {id: 2, title: "Practice Pinia", isFav: true},
        ],
        name:"Sumukh",
    })
})