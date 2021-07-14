<script>
    // import { Row, Col, TextField, MaterialApp } from 'svelte-materialify';
    
</script>

<div class="main">
        <ul class="all-product">
            <li>Yellow Ginger</li>
            <li>Baby Ginger</li>
            <li>Blue Hawaiian Ginger</li>
            <li>Indian Head Ginger.</li>
            <li>Torch Ginger</li>
            <li>White Ginger Lily</li>
            <li>Alpinia Ginger</li>
        </ul>

    <div class="main-image">
        <div class="display">
            <p class="try">Try us</p>

            <h1>
                Ginger 
            </h1>

            <h1 class="main-text">
                100% Organic
            </h1>

            <p class="deliver">
                We deliver to your door step
            </p>
        </div>
    </div>

</div>

<style>
    *{
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
   
    .main {
        width: 85%;
        margin: auto;
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
    }

    .all-product {
        width: 30%;
        height: 46.5vh;
        display: flex;
        flex-direction: column;
    }

    .all-product li {
        padding: 1.3rem;
        padding-left: 3rem;
        background-color: rgb(199, 250, 199);
    }

    .all-product li:hover {
        background-color: rgb(165, 219, 155);
    }

    .main-image {
        width: 58%;
        height: 50vh;
        padding-top: 10rem;
        padding-left: 5rem;
        background-image: url('../images/main-image.jpg');
        background-size: cover;
        background-repeat: no-repeat;
    }

    /* .display {
        height: 40%;
        width: 40%;
        color: white;
        background-color: rgba(0, 0, 0, 0.3);
    }

    .try, .main-text {
        margin-bottom: 0.5rem;
    } */

   
    
</style>