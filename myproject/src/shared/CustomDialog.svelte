<script>
    import { Dialog, Textfield, Button } from 'svelte-mui';
    import { createEventDispatcher } from 'svelte'

    let dispatch = createEventDispatcher()

    export let visible = false;
    const formDa = {pic: ''}
    
    
const onFileSelected =(e)=>{
    const User = JSON.parse(localStorage.getItem('User'));
    const Stock = JSON.parse(localStorage.getItem('Stock'));
    const supplierId = User.id;
    const stockId = Stock.id;
    console.log(stockId)

  let profile_pic = e.target.files[0];
  console.log(profile_pic)
  const formData = new FormData();
        formData.append('pic', profile_pic);
        const upload = fetch(`http://localhost:3000/admin/add-stock-image/?supplierId=${supplierId}&stockId=${stockId}`, {
            method: 'PUT',
            body: formData
        }).then((response) => response.json()).then((result) => {
            console.log('Success:', result);
            dispatch('displayMsg','Stock added Successfully')
        })
                .catch((error) => {
                    console.error('Error:', error);
                });
}
</script>

<Dialog width="290" bind:visible>
    <div slot="title"> input an image</div>

    <input type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)} bind:value={formDa.pic} >
      
</Dialog>




<style>
   
</style>