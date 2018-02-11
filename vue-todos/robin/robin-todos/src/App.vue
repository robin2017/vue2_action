<template>
    <div id="app">
        <h1>{{title}}</h1>
        <ul class="todos">
            <li>
                <input v-model="newTodo"
                       @keyup.13="addItem"
                       placeholder="快写下您要我记住的事吧"
                       autofocus="true"/>
            </li>
            <li v-for="(todo,index) in todos">
                <input type="checkbox"
                       @change="saveToStore"
                       v-model="todo.done"/><label>{{ index+1 }}.{{ todo.value }}</label>

            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data(){
            return {title: 'hello ,robin'}
        }
    }
</script>
<style>
</style>
