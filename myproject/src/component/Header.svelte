<script>
    // import { Row, Col, TextField, MaterialApp } from 'svelte-materialify';
    // import { Button,} from 'svelte-materialify';
	// import Button, { Label } from '@smui/button';
    import { Textfield } from 'svelte-mui';
    import { Button, Icon } from 'svelte-mui';
    // import { cartOutline, search } from '/components/icons';

    
</script>
    
	<header class="header">
        
        <div class="logo">
            GINGER
        </div>
        <div class="middle">
            <a href="">HOME</a>
            <a href="">SHOPS</a>
            <a href="">PAGES</a>
            <a href="">BLOG</a>
            <a href="">CONTACT</a>
        </div>

        <div class="right">
            <p class="login">
                LOGIN
                <i class="fas fa-sign-in-alt"></i>

            </p>
        </div>
    </header>
    <div class="sub-head">
        <nav class="nav">
            All our products
        </nav>
        <div class="search">
            <Textfield autocomplete="off" label="Label" required />
            <Button color="green" title="Simple button" unelevated>search</Button>
            
            
        </div>

        <div class="contact">
            <p class="phone">
                <i class="fas fa-phone-alt"></i>

            </p>
            <p class="number">+23481356969659</p>
        </div>
    </div>

    
<style>
    *{
        margin: 0;
        padding: 0;
    }

    
	.header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 4rem;
        width: 85%;
        margin: auto;
    }

    .logo {
        font-size: 30px;
        color: chartreuse;
        margin-right: 2rem;
    }

    .middle {
        width: 50%;
        display: flex;
        justify-content: space-between;
    }

    .right {
        border-left: 1px solid black;
        width: 20%;
        padding: 1.3rem;
        background-color: rgb(236, 236, 236);
        
    }

    .sub-head {
        width: 85%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
    }
    .nav {
        border: 1px solid black;
        width: 30%;
        height: 3rem;
        text-align: center;
    }

    .search {
        /* border: 1px solid rgb(189, 189, 189); */
        height: 3rem;
        display: flex;
        justify-content: space-between;
        width: 40%;
        align-items: center;

    }

    /* .search-input {
        width: 80%;
        padding-top: 0.6rem;
        padding-bottom: 0.8rem;
        border: none;
       
    } */

    /* .btn {
        padding: 0.8rem;
        padding-bottom: 1rem;
        border: none;
        width: 6rem;
        background-color: green;
        color: white;
        border: none;
    } */

    .contact {
        width: 14rem;
        display: flex;
        align-items: center;
    }

    .phone {
        padding: 0.7rem;
        border-radius: 1.5rem;
        margin-right: 1rem;
        background-color: rgb(236, 236, 236);

    }

    .number {
        font-weight: 900;
    }

    .fas {
        color: green;
    }
</style>