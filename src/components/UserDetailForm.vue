<template>
    <div class="user-detail-form">
        <h3>User details</h3>
        <form>
            <label for="userName">Name: </label>
            <input id="userName" type="text">

            <label for="userActive">Active: </label>
            <input id="userActive" type="checkbox">

            <label for="userFavoriteColor">Favorite color: </label>
            <select id="userFavoriteColor">
                <option>red</option>
                <option>black</option>
                <option>blue</option>
                <option>green</option>
                <option>white</option>
            </select>
            <input type="submit" value="Update user">
        </form>
    </div>
</template>

<script>
export default {
  name: 'UserDetailForm'
}
</script>

<style scoped>
input[type=text], input[type=checkbox], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #45a049;
}

div {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
}
</style>
