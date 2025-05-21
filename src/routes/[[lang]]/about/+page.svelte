<script>
    import {goto} from '$app/navigation'
    import {page} from '$app/stores'

    let nombre ='gus'
</script>

<h1>About {nombre}</h1>
{JSON.stringify($page.params)}

<button on:click={()=>{
    goto('/')
}}>Go to about</button>


<style></style>