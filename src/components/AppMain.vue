<script>
import axios from 'axios'

export default{
    name:'AppHeader',

    components:{

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
                console.log(response)
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
            <div v-for="project in projectList" class="card" >
                <h2>{{ project.title}}</h2>
            </div>
        </div>
    </main>

</template>

<style lang="scss" scoped >

</style>