<!--<script context="module">
    export async function preload() {
        const response = await this.fetch('language.json');
        const responseJson = await response.json();
        return {
            words : responseJson
        };
    }
</script>-->

<script>
	$: people = [{who: "X", howMuch: 0}];
	$: total = calculateTotal();
	$: dividedBy = dividedBy || people.length;

	let formatter = new Intl.NumberFormat('es-AR', {
		style: 'currency',
		currency:  'ARS'
	});

	function addAnother() {
		people = [...people, {who: "X", howMuch: 0}];

		dividedBy = dividedBy + 1;
	}

	function deleteSomeone(i) {
		if (people.length === 1) return;

		people.splice(i,1);
		people = people;

		calculateTotal();

		dividedBy = dividedBy - 1;
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
	<title>Cuentas claras</title>
    <meta name="description" content="Dividi la cuenta entre amigos familias compañeros varios" />
</svelte:head>

<section>

	{#each people as someone, i}
	<div class="input-group">
		<input type="text" bind:value={someone.who} placeholder="¿Quien puso?">
			
		<input type="number" min="1" bind:value={someone.howMuch} placeholder="¿Cuanto?" on:keyup={calculateTotal}>
		
		<button class="btn-delete" on:click={() => deleteSomeone(i)}>x</button>
	</div>
	{/each}

	<button class="btn-add" on:click={addAnother}>
		Agregar otro
	</button>

</section>

<!-- <section id="who-put-list">

	{#each people as someone, i}
	<div class="someone">
		<p class="who">{someone.who}</p>
		<hr>
		<p class="how-much">{someone.howMuch}</p>
	</div>
	{/each}

</section> -->

<section id="total">

	<div class="total">
		<h3>Total</h3>
		<h3>{formatter.format(total)}</h3>
	</div>

	<div class="divided-by">
		<h3>Dividir por</h3>
		<input type="number" bind:value={dividedBy} min="1">
	</div>	

</section>

<section id="division-list">	

		{#each people as someone, i}
		<div class="someone">
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
		<div class="someone">
			<img src="https://avatars.dicebear.com/api/human/{people.length}.svg?r=50&w=30" alt="Someone">
			<p class="who">El <strong>resto</strong> debe</p>
			<hr>
			<p class="how-much">{formatter.format(Math.round((total / dividedBy) * (dividedBy - people.length)))}</p>
		</div>
		<div class="the-rest">
			<p><strong>{formatter.format(Math.round(total / dividedBy))}</strong> <span>c/u</span></p>
		</div>
		{/if}

</section>