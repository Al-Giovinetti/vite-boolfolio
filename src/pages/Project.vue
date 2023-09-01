<script>
import {store} from '../store'
export default{
    name:"Project",

    props:{
        projectInfo:Object
    },

    data(){
        return{
            store,
            showInfo: false,
        }
    },

    methods:{
        selectProject(info){
            this.store.projectSelected=info;
            this.showInfo = !this.showInfo;
        }
    }
}
</script>

<template>
    <div class="card" >
        <h3 @click="selectProject(projectInfo)">
            {{ projectInfo.title}}
        </h3>
         <p>Project for {{ projectInfo.type.name }}</p>
         <div v-if="showInfo">
            {{ this.store.projectSelected }}
         </div>
    </div>

</template>

<style lang="scss" scoped >
 div.card{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: calc(100% / 3 - 3rem);
            height: 120px;
            background-color: yellow;
            border:3px solid black;
            border-radius: 10px;
            padding: 1rem;
            margin: 1.5rem;
            box-shadow: 20px 20px 20px;
        }
            p{
                text-align: center;
            }
            h3{
                text-align: center;
                a{
                    text-decoration: none;
                    color: cornflowerblue;
                }
            }


</style>