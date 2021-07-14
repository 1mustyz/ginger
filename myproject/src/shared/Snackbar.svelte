<script>
    import { Button, Snackbar } from 'svelte-mui';
    export let visible = false;
    export let snackbarMsg; 

</script>
<Snackbar bind:visible bg="#f44336">
    {snackbarMsg}
    <span slot="action">
        <Button color="#ff0" on:click={() => (visible = false)}>Close</Button>
    </span>
</Snackbar>
<style>

</style>