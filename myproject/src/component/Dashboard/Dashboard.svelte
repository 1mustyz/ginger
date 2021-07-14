<script>
    import Profile from './Profile.svelte'
    import Tabs from '../../shared/Tabs.svelte'
    import Goods from '../Goods.svelte'
    import CustomDialog from '../../shared/CustomDialog.svelte'
    import Snackbar from '../../shared/Snackbar.svelte'
import LoginForm from '../LoginForm.svelte';

    
    let items = ['Profile','Add stock','Transaction']
    let activeItem = 'Profile'
    let visible;
    let snackbarVisible;
    let snackbarMsg;

    const tabChange = (e) => {
        activeItem = e.detail
    }

    const openAddStockImage = (e) => {
        // console.log(e.detail)
        visible = e.detail
    }

    const snackbarHandler = (e) => {
        snackbarVisible = true
        snackbarMsg = e.detail
    }
</script>

    <main class="main">

        <Tabs {items} {activeItem} on:tabChange={tabChange}/>
        {#if activeItem == 'Profile'}
            <Profile />
        {:else if activeItem == 'Add stock'}
            <Goods on:openAddStockImage={openAddStockImage}/>
        {:else if activeItem == 'Transaction'} 
            <p>Transaction</p>   
        {/if}
    <CustomDialog on:displayMsg={snackbarHandler} {visible}/>
    <Snackbar  visible={snackbarVisible} {snackbarMsg}/>
            
    </main>

<style>
   

    .main {
        display: flex;
        margin-top: 3rem;
    }
   
</style>