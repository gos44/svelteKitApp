<script>
    import {page} from '$app/stores'
  import { json } from '@sveltejs/kit';

</script>

{JSON.stringify($page.params)}
