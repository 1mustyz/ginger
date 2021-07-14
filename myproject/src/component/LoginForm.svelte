<script>
    import { Dialog, Textfield, Button } from 'svelte-mui';

    export let visible = false;
    export let email = '';
    export let password = '';

    async function formSubmit(){
        console.log({
            email,
            password
        })
        const res = await fetch('http://localhost:3000/admin/login', {
			method: 'POST',
                    credentials: 'same-origin', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
			body: JSON.stringify({
                email,
                password
            })
			
		})

        const json = await res.json()
        localStorage.removeItem('User');
        localStorage.setItem('User', JSON.stringify(json.msg));
        console.log(json.msg)
    }

</script>

<Dialog width="290" bind:visible>
    <div slot="title"> Welcome!</div>

    <Textfield
        name="username"
        autocomplete="off"
        required
        bind:value={email}
        label="email"
        message="Your account name"
    />
    <Textfield
        type="password"
        name="password"
        autocomplete="off"
        required
        bind:value={password}
        label="password"
        message="Your password"
    />

    <div slot="actions" class="actions center">
            <Button color="primary" on:click={formSubmit}>Submit</Button>
    </div>

    <div slot="footer" class="footer">
        Don't have account?
        <a href="/singup" class="disabled">Sing Up</a>
    </div>
</Dialog>


<style>
    .footer {
        text-align: center;
        margin-bottom: 1rem;
        font-size: 13px;
    }
    .footer a {
        color: #f50057;
        padding-left: 1rem;
    }
</style>