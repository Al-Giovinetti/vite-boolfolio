<script>
export default{
    name:"Project",

    props:{
        projectInfo:Object
    }
}
</script>

<template>
    <div class="card" >
        <h2>{{ projectInfo.title}}</h2>
        <p>Project for {{ projectInfo.type.name }}</p>
    </div>

</template>

<style lang="scss" scoped >
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

</style>