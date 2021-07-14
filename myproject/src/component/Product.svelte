<script>
    import { Button, Icon } from 'svelte-mui';
    import Card from '../shared/Card.svelte';
    import { onMount } from 'svelte';
import ProductDetails from './ProductDetails.svelte';

    let products;
    let showProduct = false;
    let productId;
    let data;

    onMount(async () => {
		const res = await fetch(`http://localhost:3000/admin/get-all-stocks`);
		const data = await res.json();
        const rawProducts = data.result

        products = rawProducts.map(product => {
         return   {
                    stockName: product.stockName,
                    price: product.price,
                    qntyInBag: product.qntyInBags,
                    image: 'http://localhost:3000/'+product.stockPic.split('/').splice(1).join('/'),
                    id: product.id
            }
        })
        console.log(products)
	});
    
    const handleShowProduct = async (e) => {
        console.log(e.detail)
        productId = e.detail
        
        const res = await fetch(`http://localhost:3000/admin/get-single-stock/?id=${productId}`);
	    data = await res.json();
        data = data.result
        console.log(data)
        showProduct = !showProduct
    }

</script>

<div class="main">
    <div class="heading">
        <h1>Our Varieties</h1>
        <hr>
    </div>

    <div class="products">

        {#if products === undefined}
        Loading Character Name...
        {:else}
            {#each products as product}
            <Card src={product.image} mainText={product.stockName} productId={product.id} on:showProduct={handleShowProduct}/>
            {/each}
        {/if}

        <!-- {#await products}
            <p>...waiting</p>
        {:then products} -->
        
            <!-- {#each products as product}
            <Card src={product.image} mainText={product.stockName} productId={product.id} on:showProduct={handleShowProduct}/>
            {/each} -->
        <!-- {/await} -->
    </div>

</div>
{#if data === undefined}
        Loading Product...
        {:else}
        <ProductDetails visible={showProduct} product={data} />
            
{/if}
<style>
    .main {
        width: 85%;
        margin: auto;
        margin-top: 5rem;
    }

    .heading {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    hr {
        height: 0.2rem;
        width: 6rem;
        background-color: greenyellow;
    }

    .products {
        display: flex;
        flex-wrap: wrap;
        margin-top: 2rem;
        justify-content: space-around;
    }

    

</style>