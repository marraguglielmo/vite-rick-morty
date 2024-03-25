<script>
    export default {
        
    }
</script>

<template>
    <div class="col mb-2 ">
        <div class="gm_card">
            <div class="card-img"></div>
            <div class="card-body">
                <div class="card-title"></div>
                <div class="card-status"></div>
                <div class="card-species"></div>
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
    }
}



</style>