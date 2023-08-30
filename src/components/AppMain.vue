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
                <p>Project for {{ project.type.name }}</p>
            </div>
        </div>
    </main>

</template>

<style lang="scss" scoped >
    div.container{
        width: 80%;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        div.card{
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            width: calc(100% / 3 - 3rem);
            height: 120px;
            background-color: yellowgreen;
            border:3px solid black;
            border-radius: 10px;
            padding: 1rem;
            margin: 1.5rem;
            box-shadow: 20px 20px 20px;
        }
            p{
                text-align: center;
                ;}
    }

</style>