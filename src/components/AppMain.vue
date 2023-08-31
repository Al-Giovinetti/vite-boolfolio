<script>
import ProjectCard from './ProjectCard.vue'

import axios from 'axios'

export default{
    name:'AppHeader',

    components:{
        ProjectCard
    },

    data(){
        return{
            projectList:[],
            apiUrl:'http://127.0.0.1:8000/api/projects'
        }
    },

    methods:{
        getProjectList(){
            axios.get(this.apiUrl, {
                params: { }
            })
            .then((response)=> {
                console.log(response.data.results.data)
                this.projectList=response.data.results.data;
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    },

    created(){
        this.getProjectList();
    }
}

</script>

<template>
    <main>
        <div class="container">
            <ProjectCard v-for="project in projectList" :projectInfo="project"/>
        </div>
    </main>

</template>

<style lang="scss" scoped >
    div.container{
        width: 80%;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
    }

</style>