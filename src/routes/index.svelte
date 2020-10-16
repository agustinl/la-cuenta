<script>
    import { blur } from "svelte/transition";
    import {
        listaCompartir,
        totalCompartir,
        divisionCompartir,
        cantidadDePersonasCompartir,
    } from "./compartirCuenta.js";
    import { afterUpdate, beforeUpdate } from "svelte";

    $: lista = [{ quien: "", cuanto: 0 }];
    $: total = 0;
    $: totalDelResto = 0;
    $: cadaUno = 0;
    $: cantidadDePersonas = 1;

    beforeUpdate(() => {
        total = lista.reduce(function (prev, cur) {
            if (Number.isNaN(Number(cur.cuanto))) return Number(prev) + 0;
            return Number(prev) + Number(cur.cuanto);
        }, 0);

        if (cantidadDePersonas === undefined) return;

        totalDelResto = Math.round(total / cantidadDePersonas);
        cadaUno = Math.round(
            (total / cantidadDePersonas) * (cantidadDePersonas - lista.length)
        );

        for (var i = 0, l = lista.length; i < l; i++) {
            lista[i].resto = Math.abs(
                Math.round(total / cantidadDePersonas - lista[i].cuanto)
            );
        }
    });

    afterUpdate(() => {
        listaCompartir.update((n) => lista);
        totalCompartir.update((n) => total);
        divisionCompartir.update((n) => totalDelResto);
        cantidadDePersonasCompartir.update((n) => cantidadDePersonas);
    });

    let formatter = new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
    });

    function agregarOtro() {
        lista = [...lista, { quien: "", cuanto: 0 }];
    }

    function eliminarUno(i) {
        if (lista.length === 1) return;

        lista.splice(i, 1);
        lista = lista;
    }

    function eliminarTodos() {
        lista = [];
        lista = [{ quien: "", cuanto: 0 }];

        cantidadDePersonas = lista.length;
    }
</script>

<div class="row justify-content-center">
    <div class="col col-md-6 col-md-auto mt-5">
        {#each lista as alguien, i}
            <div class="input-group mt-2" transition:blur>
                <label for={i} class="visuallyhidden">¿Quien puso?</label>
                <input
                    type="text"
                    name="quien"
                    id={i}
                    bind:value={alguien.quien}
                    placeholder="¿Quien puso?"
                    maxlength="12"
                    class="form-control" />

                <label for={i + "b"} class="visuallyhidden">Cuanto puso?</label>
                <input
                    type="number"
                    name="cuanto"
                    id={i + 'b'}
                    min="1"
                    bind:value={alguien.cuanto}
                    placeholder="¿Cuanto?"
                    class="form-control" />

                <div class="input-group-append">
                    <button
                        class="btn btn-danger"
                        aria-label="Close"
                        type="button"
                        id="button-addon2"
                        on:click={() => eliminarUno(i)}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        {/each}
    </div>
</div>

<div class="row justify-content-center">
	<div class="col col-md-6 col-md-auto mt-3 mb-4">
		<button
			type="button"
			class="btn btn-primary btn-block"
			on:click={agregarOtro}
		>
			Agregar otro
		</button>
	</div>
</div>

<div class="row justify-content-center">
	<div class="col col-md-6 col-md-auto">
		<div class="input-group">
			<div class="input-group-prepend">
				<span class="input-group-text" id="basic-addon1">
					Dividir por
				</span>
			</div>
			<input
				type="number"
				class="form-control"
				placeholder="0"
				aria-label="0"
				aria-describedby="basic-addon1"
				bind:value={cantidadDePersonas}
				min="1"
			/>
		</div>
	</div>
</div>

<div class="row justify-content-center">
	<div class="col col-md-6 col-md-auto mt-5">
		<ul class="list-group">
			{#each lista as alguien, i}
					{#if alguien.resto === 0}
						<li class="list-group-item d-flex justify-content-between lh-condensed text-muted align-items-center">
							<img
								src="https://avatars.dicebear.com/api/human/{alguien.quien}.svg?r=50&w=30"
								alt={alguien.quien} />
							<div class="flex-grow-1 ml-3">
								<h6 class="my-0">{alguien.quien}</h6>
								<small class="text-muted">Ya puso</small>
							</div>
							<strong class="">{formatter.format(alguien.cuanto)}</strong>
						</li>
					{:else if totalDelResto > alguien.cuanto}
						<li class="list-group-item d-flex justify-content-between lh-condensed text-danger align-items-center">
							<img
								src="https://avatars.dicebear.com/api/human/{alguien.quien}.svg?r=50&w=30"
								alt={alguien.quien} />
							<div class="flex-grow-1 ml-3">
								<h6 class="my-0">{alguien.quien}</h6>
								<small class="text-danger">Tiene que poner</small>
							</div>
							<strong class="">{formatter.format(alguien.resto)}</strong>
						</li>
					{:else}
						<li class="list-group-item d-flex justify-content-between lh-condensed text-success align-items-center">
							<img
								src="https://avatars.dicebear.com/api/human/{alguien.quien}.svg?r=50&w=30"
								alt={alguien.quien} />
							<div class="flex-grow-1 ml-3">
								<h6 class="my-0">{alguien.quien}</h6>
								<small class="text-success">Le tienen que dar</small>
							</div>
							{#if alguien.cuanto === undefined}
								<strong class="">{formatter.format(0)}</strong>
							{:else}
								<strong class="">{formatter.format(alguien.resto)}</strong>
							{/if}
						</li>
					{/if}
			{/each}

			{#if cantidadDePersonas > lista.length}
				<li class="list-group-item d-flex justify-content-between">
					<!-- <img
						src="https://avatars.dicebear.com/api/human/{lista.length}.svg?r=50&w=30"
						alt="El Resto" /> -->
					<div class="text-danger">
						<h6 class="my-0">En total los demas ponen</h6>
					</div>
					<strong class="text-danger">{formatter.format(cadaUno)}</strong>
				</li>
			{/if}

			{#if total > 0}
				<li class="list-group-item d-flex justify-content-between bg-light">
					<strong>Total</strong>
					<strong>{formatter.format(total)}</strong>
				</li>
			{/if}

			{#if cantidadDePersonas > lista.length}
				<li class="list-group-item d-flex justify-content-between text-danger">
					<span>Cada uno</span>
					<strong>{formatter.format(totalDelResto)}</strong>
				</li>
			{/if}
		</ul>
	</div>
</div>

<div class="row justify-content-center">
	<div class="col col-md-6 col-md-auto mt-5">
		<button
			type="button"
			class="btn btn-danger btn-block"
			data-toggle="modal"
			data-target="#exampleModal"
			on:click={eliminarTodos}
		>
			Borrar todo
		</button>
	</div>
</div>