<script>
    import {createEventDispatcher} from 'svelte'
    const dispatch = createEventDispatcher()

    export let items
    export let activeItem
</script>

<div class="side-nav">
    <ul>
        {#each items as item}
        <li class="link" class:active={item == activeItem}
         on:click={()=> dispatch('tabChange', item)}>{item}</li>
        {/each}
    </ul>
</div>

<style>
      .side-nav {
        height: 84vh;
        width: 14rem;
        display: flex;
        flex-direction: column;
        background-color: green;
        color: white;

    }
    .link {
        padding-top: 2rem;
        padding-bottom: 2rem;
        color: white;
        text-align: center;
        text-decoration: none;
    }

    .link:hover {
        background-color: rgb(56, 236, 56);
    }

    .active {
        background-color: rgb(56, 236, 56);
        border: none;
        
    }
    .side-nav {
        margin-right: 7rem;
    }
</style>