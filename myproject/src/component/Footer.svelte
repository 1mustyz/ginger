<script>
    import { Textfield } from 'svelte-mui';

</script>

<div class="footer">
    <div class="left">
        <div class="logo">
            GINGER
        </div>

        <address class="address">
            <p>
                Address: 60-49 Road 11378 New York
            </p>
            <p>Phone: +65 11.188.888</p>

            <p>Email: hello@colorlib.com</p>


        </address>
    </div>

    <div class="right">
        <p>
            Try us today and enjoy our quality products
        </p>

        <div>
            <Textfield autocomplete="off" label="Enter Your Email" required message="message text" outlined/>
            <button>SUBSCRIBE</button>
        </div>
    </div>
</div>

<style>

    .footer {
        display: flex;
        margin-top: 4rem;
        padding-top: 4rem;
        padding-left: 5rem;
        background-color: #f3f6fa;
    }

    .left {
        display: flex;
        flex-direction: column;
        height: 9rem;
        justify-content: space-between;
        margin-right: 8rem;
    }

    .logo {
        font-size: 30px;
        color: chartreuse;
    }
    .address {
        height: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .right p{
        font-size: 25px;
    }

    .right button {
        padding-left: 2rem;
        padding-right: 2rem;
        background-color: chartreuse;
        color: white;
    }
</style>