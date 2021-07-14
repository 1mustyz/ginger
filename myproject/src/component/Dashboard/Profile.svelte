<script>
    import { Textfield } from 'svelte-mui';
    let  avatar, fileinput;

    const User = JSON.parse(localStorage.getItem('User'));

	
	const onFileSelected =(e)=>{
  let image = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                 avatar = e.target.result
            };
}

</script>

<main class="main" >
    <div id="app">
        <h1>Upload Image</h1>
      
            {#if avatar}
            <img class="avatar" src="{avatar}" alt="d" />
            {:else}
            <img class="avatar" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="" /> 
            {/if}
                    <img class="upload" src="https://static.thenounproject.com/png/625182-200.png" alt="" on:click={()=>{fileinput.click();}} />
            <div class="chan" on:click={()=>{fileinput.click();}}>Choose Image</div>
            <input type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >
    
    </div>

    <div class="detail">
    <Textfield autocomplete="off" label="First Name" required outlined message="message text" bind:value={User.firstName}/>
    <Textfield autocomplete="off" label="Last Name" required outlined message="message text" bind:value={User.lastName}/>
    <Textfield autocomplete="off" label="email" required outlined message="message text" bind:value={User.email}/>
    <Textfield autocomplete="off" label="address" required outlined message="message text" bind:value={User.address}/>
    <Textfield autocomplete="off" label="phone" required outlined message="message text" bind:value={User.phone}/>
        
    </div>

</main>

<style>

.main {
    display: flex;
    margin-left: 3rem;

}

	#app{
	display:flex;
		/* align-items:center; */
		justify-content:center;
		flex-flow:column;
}
 
	.upload{
		display:flex;
        margin-left: 4rem;
	height:50px;
		width:50px;
		cursor:pointer;
	}
	.avatar{
		display:flex;
		height:200px;
		width:200px;
	}

    .detail {
        margin-left: 5rem;
        margin-top: 6rem;
    }
</style>