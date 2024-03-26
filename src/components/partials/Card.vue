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
                <img :src="img" :alt="name" class="rounded-circle">
            </div>
            <div class="card-body">
                <div class="card-title">
                    <h2 class="fs-3s fw-bold my-3">{{ name }}</h2>
                </div>
                <div class="line my-3"></div>
                <div class="card-status">
                    <h3 class="fs-5 mb-2">{{ status }}</h3>
                </div>
                <div class="card-species">
                    <h3 class="fs-5">{{ species }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

.col{
    width: calc(100% / 4);
    padding: 10px;
    .gm_card{
    widows: 100px;
    min-height: 400px;
    &:hover .card-img{
        scale: 1.1;
        transition: scale .2s;
    }
    .line{
        margin: 0 auto;
        width: 20%;
        border-top: 2px solid black;
        border-radius: 50px;
        }
    }
}



</style>