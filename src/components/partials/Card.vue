<script>
    export default {
        props:{
            name: String,
            status: String,
            species: String,
            img: String
        }
    }
</script>

<template>
    <div class="col mb-2 ">
        <div class="gm_card text-center">
            <div class="card-img">
                <img :src="img" :alt="name">
            </div>
            <div class="card-body">
                <div class="card-title">
                    <h2>{{ name }}</h2>
                </div>
                <div class="line my-3"></div>
                <div class="card-status">
                    <h3 class="fs-4 mb-2">{{ status }}</h3>
                </div>
                <div class="card-species">
                    <h3 class="fs-4">{{ species }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

.col{
    width: calc(100% / 4);
    background-color: rgba(0, 128, 0, 0.471);
    padding: 10px;
    .gm_card{
    border: 1px solid red;
    widows: 100px;
    min-height: 400px;
    .line{
        margin: 0 auto;
        width: 20%;
        border-top: 1px solid black;
    }
    }
}



</style>