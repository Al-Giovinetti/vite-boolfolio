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
        ]

            }
        }
    }

</script>

<template>
<header>
    <h1>Titolastrogrande</h1>
    <nav>
        <ul>
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

</style>