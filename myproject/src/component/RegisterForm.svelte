<script>
    import { Textfield } from 'svelte-mui';
    import { Button, Icon } from 'svelte-mui';
    import { createEventDispatcher } from 'svelte'

    let dispatch = createEventDispatcher()

    let formData = {firstName: '', lastName: '', email: '', phone: '', address: '', password: '', age: '', confirmPassword: ''}

    async function formSubmit(){
        console.log(formData)
        const res = await fetch('http://localhost:3000/admin/create-supplier', {
			method: 'POST',
                    credentials: 'same-origin', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
			body: JSON.stringify(formData)
			
		})

        const json = await res.json()
        dispatch('displayMsg','Registration Successfully')
        console.log(json)
		const result = JSON.stringify(json)

    }
</script>

<h1>ADMIN REGISTRATION</h1>
<form action="" class="form" on:submit|preventDefault={formSubmit}>
    <Textfield autocomplete="off" bind:value={formData.firstName} label="First Name" required outlined message="message text" />
    <Textfield autocomplete="off" bind:value={formData.lastName} label="Last Name" required outlined message="message text" />
    <Textfield autocomplete="off" bind:value={formData.email} label="Email" required outlined message="message text" />
    <Textfield autocomplete="off" bind:value={formData.phone} label="Phone" required outlined message="message text" />
    <Textfield autocomplete="off" bind:value={formData.age} label="Age" required outlined message="message text" />
    <Textfield autocomplete="off" bind:value={formData.address} label="Address" required outlined message="message text" />
    <Textfield autocomplete="off" bind:value={formData.password} label="Password" required outlined message="message text" />
    <Textfield autocomplete="off" bind:value={formData.confirmPassword} label="Confirm Password" required outlined message="message text" />
    <Button color="chartreuse" title="Simple button" unelevated>Submit</Button>

</form>

{formData.firstName}

<style>

    h1 { 
        width: 30%;
        margin: auto;
        margin-top: 3rem;
        margin-bottom: 1rem;
        color: white;
        padding-left: 2rem;
        padding-right: 2rem;
        background-color: green;
        text-align: center;
    }
    .form {
        box-shadow: 1px 10px 20px 5px rgb(137, 206, 137);
        width: 30%;
        margin: auto;
        height: 40rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>