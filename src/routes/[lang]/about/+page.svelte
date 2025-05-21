<script>
    import {goto} from '$app/navigation'
    let nombre ='gus'
</script>

<h1>About {nombre}</h1>

<button on:click={()=>{
    goto('/')
}}>Go to about</button>


<style></style>