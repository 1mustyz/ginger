<script>
    import { Dialog, Textfield, Button, Icon } from 'svelte-mui';
    
    import { onMount } from 'svelte';
    let formData = {firstName: '', lastName: '', email: '', deliveryAddress: '', qnty: ''}

    export let visible = false;
    export let product;
    product.stockPic = 'http://localhost:3000/'+product.stockPic.split('/').splice(1).join('/')
    
    	
</script>
<Dialog width="1300" bind:visible>
    <div class="main"> 
        <div class="content">

            <img src={product.stockPic} alt="" class="image">

            <div class="actions">

                <p class="name"> <span class="spn">Stock Name:</span> {product.stockName}</p>
                <p class="qnty"> <span class="spn">Quantity:</span> {product.qntyInBags}</p>
                <p class="price"> <span class="spn">Price:</span> {product.price}</p>
            </div>
        </div>

        <form action="" class="form">
            <Textfield autocomplete="off" bind:value={formData.firstName} label="First Name" required outlined message="message text" />
            <Textfield autocomplete="off" bind:value={formData.lastName} label="Second Name" required outlined message="message text" />
            <Textfield autocomplete="off"  bind:value={formData.email} label="Email" required outlined message="message text" />
            <Textfield autocomplete="off" type="number" bind:value={formData.qnty} label="Amount" required outlined message="message text" />
            <Textfield autocomplete="off" bind:value={formData.deliveryAddress} label="Address" required outlined message="message text" />
            <Button color="chartreuse" title="Simple button" unelevated>Place Order</Button>

        </form>
    </div>

    
      
</Dialog>

<style>
    .main {
        width: 80%;
        height: 100vh;
        display: flex;
        justify-content: space-between;
    }
    .image {
        width: 22rem;
        height: 22rem;
    }
    .content {
        display: flex;
        width: 60%;
        justify-content: space-between;
    }
    .actions {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 10rem;
    }
    .actions > p {
        /* width: 1rem; */
        padding: 0.5rem;
        border-radius: 0.2rem;
        width: 18rem;
    }

    .name {
        background-color: aqua;
    }
    .qnty {
        background-color: coral;
    }
    .price {
        background-color: olive;
    }
    .spn {
        margin-right: 2rem;
    }

    .form {

    }
</style>