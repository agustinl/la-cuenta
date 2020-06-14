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

		totalDelResto = Math.round(total/cantidadDePersonas);
		cadaUno = Math.round((total / cantidadDePersonas) * (cantidadDePersonas - lista.length));

		for (var i = 0, l = lista.length; i < l; i++) {
			/*console.log(Math.sign(total/cantidadDePersonas - lista[i].cuanto))*/
			
			lista[i].resto = Math.abs(Math.round(total/cantidadDePersonas - lista[i].cuanto));

			/*console.log(lista[i].resto);*/
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

<section>
	<h2>Quienes pusieron?</h2>

	{#each lista as alguien, i}
	<div class="input-group" transition:blur>
		<label for={i} class="visuallyhidden">¿Quien puso?</label>
		<input type="text" name="quien" id={i} bind:value={alguien.quien} placeholder="¿Quien puso?" maxlength="12">
		
		<label for={i + "b"} class="visuallyhidden">Cuanto puso?</label>
		<input type="number" name="cuanto" id={i + "b"} min="1" bind:value={alguien.cuanto} placeholder="¿Cuanto?">
		
		<img src="close.png" alt="Eliminar Uno" on:click={() => eliminarUno(i)}>
	</div>
	{/each}

	<button class="btn-add" on:click={agregarOtro}>Agregar otro</button>

</section>

<section id="total">

	<div class="total">
		<h3>Total</h3>
		<h3><strong>{formatter.format(total)}</strong></h3>
	</div>

	<div class="dividir-por">
		<h3>Dividir por</h3>
		<label for="divididoPor" class="visuallyhidden">Dividir por</label>
		<input type="number" name="divididoPor" id="divididoPor" bind:value={cantidadDePersonas} min="1">
	</div>	

</section>

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
				<p class="cuanto recibe">{formatter.format(alguien.resto)}</p>
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
		<div class="resto" transition:blur>
			<p><strong>{formatter.format(totalDelResto)}</strong> <span>c/u</span></p>
		</div>
		{/if}	
		
		<button class="btn-clean" aria-label="Borrar todo" on:click={eliminarTodos}>
			Borrar lista
		</button>

</section>