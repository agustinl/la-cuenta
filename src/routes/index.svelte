<script>
	import { blur } from 'svelte/transition';
	import { listaCompartir, totalCompartir, divisionCompartir, cantidadDePersonasCompartir } from './compartirCuenta.js';
	import { afterUpdate, beforeUpdate } from 'svelte';

	$: lista = [{quien: "", cuanto: 0}];
	$: total = 0;
	$: totalDelResto = 0;
	$: cadaUno = 0;
	$: cantidadDePersonas = 1;

	beforeUpdate(() => {
		total = lista.reduce(function(prev, cur) {
			if (Number.isNaN(Number(cur.cuanto))) return Number(prev) + 0;
			return Number(prev) + Number(cur.cuanto);
		}, 0);

		if (cantidadDePersonas === undefined) return;

		totalDelResto = Math.round(total/cantidadDePersonas);
		cadaUno = Math.round((total / cantidadDePersonas) * (cantidadDePersonas - lista.length));

		for (var i = 0, l = lista.length; i < l; i++) {
			lista[i].resto = Math.abs(Math.round(total/cantidadDePersonas - lista[i].cuanto));
		}
	});
	
	afterUpdate(() => {
		listaCompartir.update(n => lista);
		totalCompartir.update(n => total);
		divisionCompartir.update(n => totalDelResto);
		cantidadDePersonasCompartir.update(n => cantidadDePersonas);
	});

	let formatter = new Intl.NumberFormat('es-AR', {
		style: 'currency',
		currency:  'ARS'
	});

	function agregarOtro() {
		lista = [...lista, {quien: "", cuanto: 0}];
	}

	function eliminarUno(i) {
		if (lista.length === 1) return;

		lista.splice(i,1);
		lista = lista;
	}

	function eliminarTodos() {
		lista = [];
		lista = [{quien: "", cuanto: 0}];

		cantidadDePersonas = lista.length;
	}
	
</script>

<svelte:head>
	<title>La Cuenta</title>
    <meta name="description" content="Dividi la cuenta y todos a mano" />
</svelte:head>

<section class="quienes-pusieron">
	<h2>Quienes pusieron?</h2>

	{#each lista as alguien, i}
	<div class="input-group" transition:blur>
		<label for={i} class="visuallyhidden">¿Quien puso?</label>
		<input type="text" name="quien" id={i} bind:value={alguien.quien} placeholder="¿Quien puso?" maxlength="12">
		
		<label for={i + "b"} class="visuallyhidden">Cuanto puso?</label>
		<input type="number" name="cuanto" id={i + "b"} min="1" bind:value={alguien.cuanto} placeholder="¿Cuanto?">
		
		<svg on:click={() => eliminarUno(i)} class="svg-icon delete" viewBox="0 0 20 20"><path fill="none" d="M12.71,7.291c-0.15-0.15-0.393-0.15-0.542,0L10,9.458L7.833,7.291c-0.15-0.15-0.392-0.15-0.542,0c-0.149,0.149-0.149,0.392,0,0.541L9.458,10l-2.168,2.167c-0.149,0.15-0.149,0.393,0,0.542c0.15,0.149,0.392,0.149,0.542,0L10,10.542l2.168,2.167c0.149,0.149,0.392,0.149,0.542,0c0.148-0.149,0.148-0.392,0-0.542L10.542,10l2.168-2.168C12.858,7.683,12.858,7.44,12.71,7.291z M10,1.188c-4.867,0-8.812,3.946-8.812,8.812c0,4.867,3.945,8.812,8.812,8.812s8.812-3.945,8.812-8.812C18.812,5.133,14.867,1.188,10,1.188z M10,18.046c-4.444,0-8.046-3.603-8.046-8.046c0-4.444,3.603-8.046,8.046-8.046c4.443,0,8.046,3.602,8.046,8.046C18.046,14.443,14.443,18.046,10,18.046z"></path></svg>
	</div>
	{/each}

	<button class="btn-add" on:click={agregarOtro}>Agregar otro</button>

	<div class="dividir-por">
		<h4>Dividir por</h4>
		<label for="divididoPor" class="visuallyhidden">Dividir por</label>
		<input type="number" name="divididoPor" id="divididoPor" bind:value={cantidadDePersonas} min="1">
	</div>

</section>

{#if total > 0}
<section id="total" transition:blur>

	<div class="total">
		<h4>Total</h4>
		<h3><strong>{formatter.format(total)}</strong></h3>
	</div>

	{#if cantidadDePersonas > lista.length}
	<div class="resto" transition:blur>
		<h4>Cada uno:</h4>
		<h3>{formatter.format(totalDelResto)}</h3>
	</div>
	{/if}

</section>
{/if}

<section id="quienes-pusieron">	

		{#each lista as alguien, i}
		<div class="lista-item" transition:blur>
			<img src="https://avatars.dicebear.com/api/human/{alguien.quien}.svg?r=50&w=30" alt="{alguien.quien}">
			{#if alguien.resto === 0}
				<p class="quien"><strong>{alguien.quien}</strong> ya puso</p>
				<hr>
				<p class="cuanto saldado">{formatter.format(alguien.cuanto)}</p>
			{:else if totalDelResto > alguien.cuanto }
				<p class="quien"><strong>{alguien.quien}</strong> debe</p>
				<hr>
				<p class="cuanto debe">{formatter.format(alguien.resto)}</p>
			{:else}
				<p class="quien">A <strong>{alguien.quien}</strong> le deben</p>
				<hr>
				{#if alguien.cuanto === undefined}
				<p class="cuanto recibe">{formatter.format(0)}</p>
				{:else}
				<p class="cuanto recibe">{formatter.format(alguien.resto)}</p>
				{/if}
			{/if}
		</div>
		{/each}

		{#if cantidadDePersonas > lista.length}
		<div class="lista-item" transition:blur>
			<img src="https://avatars.dicebear.com/api/human/{lista.length}.svg?r=50&w=30" alt="El Resto">
			<p class="quien">El <strong>resto</strong> debe</p>
			<hr>
			<p class="cuanto debe">{formatter.format(cadaUno)}</p>
		</div>
		{/if}
		
		<button class="btn-clean" aria-label="Borrar todo" on:click={eliminarTodos}>
			Borrar lista
		</button>

</section>