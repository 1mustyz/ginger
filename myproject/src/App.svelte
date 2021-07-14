<script>
	import { Router, Route, Link } from "svelte-navigator";
	import Main from './component/Main.svelte'
	import Product from './component/Product.svelte'
	import RegisterForm from './component/RegisterForm.svelte'
	import Footer from './component/Footer.svelte'
	import LoginForm from './component/LoginForm.svelte'
    import Dashboard from './component/Dashboard/Dashboard.svelte'
    import ProductDetails from './component/ProductDetails.svelte'
    import Snackbar from './shared/Snackbar.svelte'

	import { Textfield } from 'svelte-mui';
    import { Button, Icon } from 'svelte-mui';

    let visible = false
	const togleLogin = () => {
        visible = !visible
        console.log(visible)
    }

    let offSubHead = true
    let snackbarVisible;
    let snackbarMsg;
    
    const snackbarHandler = (e) => {
        snackbarVisible = true
        snackbarMsg = e.detail
    }
  

	// let mainImage = 'images/main-image.jpg'
</script>

<Router>
	<header class="header">
        
		<div class="logo">
			GINGER
		</div>
		<div class="middle">
			<Link to="/" on:click={()=> offSubHead = true}>HOME</Link>
			<Link to="/routePath">SHOPS</Link>
			<Link to="pages">PAGES</Link>
			<Link to="contact">CONTACT</Link>
			<Link to="dashboard" on:click={()=> offSubHead = false}>DASHBOARD</Link>
			
		</div>
	
		<div class="right">
			<Link to="/registerr">
				<p class="login">
					REGISTER
					<i class="fas fa-sign-in-alt"></i>
		
				</p>
			</Link>
			<Button color="green" title="Simple button" unelevated
            on:click={togleLogin}
            >LOGIN</Button>
			
		</div>
	</header>

    {#if offSubHead == true}

	<div class="sub-head">
		<h2> GINGER SALES MANAGEMENT SYSTEM</h2>
	</div>
{/if}    
	<main>
		<Route path="/">
			<LoginForm {visible}/>
			<Main />
			<Product />

			<Footer />
		</Route>

		<Route path="/registerr">

			<RegisterForm on:displayMsg={snackbarHandler}/>
		</Route>
        <Route path="/dashboard">

            <Dashboard />
		</Route>

        <Route path="/routePath">

            <ProductDetails />
		</Route>
	</main>
	
</Router>
<Snackbar  visible={snackbarVisible} {snackbarMsg}/>



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
		display: flex;
		justify-content: space-between;
		align-items: center;
        width: 20%;
        padding: 1.3rem;
        background-color: rgb(236, 236, 236);
        
    }

    .sub-head {
        width: 85%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
        background-color: green;
        color: white;
        padding-top: 1rem;
        padding-bottom: 1rem;
        border-radius: 0.3rem;
    }
    
</style>