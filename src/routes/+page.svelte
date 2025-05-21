<script>
    import {goto,beforeNavigate,afterNavigate} from '$app/navigation'
    import {Button} from '$components';
    import  {navigating} from '$app/stores'

    $: console.log($navigating)
    beforeNavigate((navigation)=>{
        console.log('afterNavigate', navigation)
        // navigation.cancel()
    })
    afterNavigate((navigation)=>{
        console.log('beforeNavigate', navigation)
    })
</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<button on:click={()=>{
    goto('/about')
}}>Go to about</button>

<Button />

<a href="/about">About</a>