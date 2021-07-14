<script>
    import { Button, Icon } from 'svelte-mui';
    import {createEventDispatcher} from 'svelte'
    const dispatch = createEventDispatcher()
    
    export let src;
    export let mainText = 80;
    export let productId;

    const handleClick = () => {
        dispatch('showProduct', productId)
    }
    
</script>

    <div class="card">
        <img {src} alt="">
        <p class="main-text">{mainText}</p>
        <div class="action">
                <Button color="chartreuse" title="Simple button" unelevated on:click={handleClick} >place your order</Button>
        </div>
    </div>

    
   



<style>
.card img {
        width: 16rem;
        height: 14rem;
    }

    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 18rem;
        height: 20rem;
        padding-top: 0.7rem;
        padding-bottom: 0.5rem;
        border-radius: 0.5rem;
        justify-content: space-between;
        box-shadow: 1px 10px 20px 5px rgb(137, 206, 137);
        margin-bottom: 2rem;
    }
</style>