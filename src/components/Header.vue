<script>
export default{
}
</script>

<template>

<h1 class="text-center my-5">-Rick&Morty-</h1>

<div class="container p-2 w-50 mb-5 text-center">

    <label for="exampleDataList" class="form-label fs-4">Ricerca per nome</label>
    <input class="form-control form-control-lg" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
    <datalist id="datalistOptions">
        <option value="San Francisco"></option>
        <option value="New York"></option>
        <option value="Seattle"></option>
        <option value="Los Angeles"></option>
        <option value="Chicago"></option>
    </datalist>
</div>

</template>

<style lang="scss" scoped>

h1{
    font-size: 4rem;
}

</style>
