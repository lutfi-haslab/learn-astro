<script>
 	import { isCartOpen } from '../store/cartStore';
 	import {counter} from '../store/counter';


	function incrementCount() {
        $counter += 1
	}
</script>

<div>
	<button on:click={incrementCount}>
		Clicked {$counter} {$counter === 1 ? 'time' : 'times'}
	</button>
	{#if $isCartOpen}
<aside>
	<p>Cart is Open</p>
</aside>
{/if}
</div>
