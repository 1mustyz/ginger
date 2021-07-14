<script>
    import { Textfield } from 'svelte-mui';
    import { Button, Icon } from 'svelte-mui';
    import { createEventDispatcher } from 'svelte'

    let dispatch = createEventDispatcher()
    const User = JSON.parse(localStorage.getItem('User'));
    let formData = {stockName: '', qntyInBags: '', price: '', supplierId: User.id}

    async function formSubmit(){
        console.log(formData)
        const res = await fetch('http://localhost:3000/admin/create-stock', {
			method: 'POST',
                    credentials: 'same-origin', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
			body: JSON.stringify(formData)
			
		})
        localStorage.removeItem('Stock');
        const json = await res.json()
        localStorage.setItem('Stock', JSON.stringify(json.stock));
        console.log(json.stock)
    }

    function handleAddStock(){
        let show = true
        // console.log(show)
        dispatch('openAddStockImage', show)
    }
</script>
<div class="main">

    <h1>ADD A PRODUCT</h1>
    <form action="" class="form" on:submit|preventDefault={formSubmit}>
        <Textfield autocomplete="off" bind:value={formData.stockName} label="Name" required outlined message="message text" />
        <Textfield autocomplete="off" bind:value={formData.qntyInBags} label="Amount" required outlined message="message text" />
        <Textfield autocomplete="off" bind:value={formData.price} label="price" required outlined message="message text" />
        <Button color="chartreuse" title="Simple button" unelevated on:click={handleAddStock}>Add a stock</Button>
    
    </form>
</div>



<style>
    .main {
        display: flex;
        flex-direction: column;
        margin-left: 9rem;
    }
    h1 { 
        width: 130%;
        /* margin: auto; */
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding-left: 2rem;
        padding-right: 2rem;
        /* background-color: green; */
        text-align: center;
    }
    .form {
        box-shadow: 1px 10px 20px 5px rgb(137, 206, 137);
        width: 130%;
        height: 20rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>