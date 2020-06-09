<script>
	import { blur  } from 'svelte/transition';

	$: people = [{who: "X", howMuch: 0}];
	$: total = calculateTotal();
	$: dividedBy = 1;

	let formatter = new Intl.NumberFormat('es-AR', {
		style: 'currency',
		currency:  'ARS'
	});

	function addAnother() {
		people = [...people, {who: "X", howMuch: 0}];
	}

	function deleteSomeone(i) {
		if (people.length === 1) return;

		people.splice(i,1);
		people = people;

		calculateTotal();
	}

	function removeAll() {
		people = [];
		people = [{who: "X", howMuch: 0}];
		
		calculateTotal();

		dividedBy = people.length;
	}

	function calculateTotal() {
		setTimeout(() => {
			total = people.reduce(function(prev, cur) {
				if (Number.isNaN(Number(cur.howMuch))) return Number(prev) + 0;
				return Number(prev) + Number(cur.howMuch);
			}, 0);
		});
	}
	
</script>

<svelte:head>
	<title>La Cuenta</title>
    <meta name="description" content="Dividi la cuenta y todos a mano" />
</svelte:head>

<section>

	<h2>Quienes pusieron?</h2>

	{#each people as someone, i}
	<div class="input-group" transition:blur>
		<label for="who" class="visuallyhidden">¿Quien puso?</label>
		<input type="text" name="who" id="who" bind:value={someone.who} placeholder="¿Quien puso?" maxlength="12">
		
		<label for="how-much" class="visuallyhidden">Cuanto puso?</label>
		<input type="number" name="how-much" id="how-much" min="1" bind:value={someone.howMuch} placeholder="¿Cuanto?" on:keyup={calculateTotal}>
		
		<button class="btn-delete" aria-label="Borrar" on:click={() => deleteSomeone(i)}>
			<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-x" width="32" height="32" viewBox="0 0 22 22" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
			<path stroke="none" d="M0 0h24v24H0z"/>
			<circle cx="12" cy="12" r="9" />
			<path d="M10 10l4 4m0 -4l-4 4" />
			</svg>
		</button>
	</div>
	{/each}

	<button class="btn-add" on:click={addAnother}>Agregar otro</button>

</section>

<section id="total">

	<div class="total">
		<h3>Total</h3>
		<h3>{formatter.format(total)}</h3>
	</div>

	<div class="divided-by">
		<h3>Dividir por</h3>
		<label for="divided-by" class="visuallyhidden">Dividir por</label>
		<input type="number" name="divided-by" id="divided-by" bind:value={dividedBy} min="1">
	</div>	

</section>

<section id="division-list">	

		{#each people as someone, i}
		<div class="someone" transition:blur>
			<img src="https://avatars.dicebear.com/api/human/{someone.who}.svg?r=50&w=30" alt="{someone.who}">
			{#if Math.sign(total/dividedBy - someone.howMuch) === -1}
				<p class="who">A <strong>{someone.who}</strong> le deben</p>
				<hr>
				<p class="how-much receives">{formatter.format(Math.abs(Math.round(total/dividedBy - someone.howMuch)))}</p>
			{:else if Math.sign(total/dividedBy - someone.howMuch) === 1 }
				<p class="who"><strong>{someone.who}</strong> debe</p>
				<hr>
				<p class="how-much debit">{formatter.format(Math.round(total/dividedBy - someone.howMuch))}</p>
			{:else}
				<p class="who"><strong>{someone.who}</strong> ya puso</p>
				<hr>
				<p class="how-much without-debt">{formatter.format(Math.round(someone.howMuch))}</p>
			{/if}
		</div>
		{/each}

		{#if dividedBy > people.length}
		<div class="someone" transition:blur>
			<img src="https://avatars.dicebear.com/api/human/{people.length}.svg?r=50&w=30" alt="Someone">
			<p class="who">El <strong>resto</strong> debe</p>
			<hr>
			<p class="how-much">{formatter.format(Math.round((total / dividedBy) * (dividedBy - people.length)))}</p>
		</div>
		<div class="rest" transition:blur>
			<p><strong>{formatter.format(Math.round(total / dividedBy))}</strong> <span>c/u</span></p>
		</div>
		{/if}	
		
		<button class="btn-clean" aria-label="Borrar todo" on:click={removeAll}>
			Borrar lista
		</button>

</section>