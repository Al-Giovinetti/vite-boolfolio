<script>
    export default{
        name:'AppHeader',

        data(){
            return{

                navElements:[
            {
                routeName:'home',
                name:'Home'
            },
            {
                routeName:'projects',
                name:'Projects'
            },
        ],


            }
        }
    }

</script>

<template>
<header>
    <h1>Qui manca un titolo..</h1>
    <nav>
        <ul class="d-flex">
            <li v-for="element in navElements">
                <router-link :to=" { name: element.routeName}">
                    {{ element.name }}
                </router-link>
            </li>
        </ul>
    </nav>
</header>
</template>

<style lang="scss" scoped >
h1{
    text-align: center;
    color: yellow;
    padding: 1rem;
}

ul{
    justify-content: center;
    li{
        list-style-type: none;
        font-size: 1.5rem;
        padding: 0 2rem;
        a{
            text-decoration: none;
            color: black;
            font-weight: bolder;
        }
    }
}
</style>