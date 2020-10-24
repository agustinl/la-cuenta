<script>
	import { _ } from 'svelte-i18n';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let lista;
    let cantidadDePersonas;    

    function eliminarTodos() {
        lista = [{ quien: "", cuanto: 0 }];
        cantidadDePersonas = 1;

        dispatch('deleteAll', {
            lista: lista,
            cantidadDePersonas: cantidadDePersonas
		});
    }
</script>

<!-- Modal -->
<div
    class="modal fade"
    id="deleteAllModal"
    tabindex="-1"
    aria-labelledby="deleteModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="deleteModalLabel">{$_('delete_confirm')}</h5>
                <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-footer">
                <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal">{$_('cancel')}</button>
                <button
                    type="button"
                    class="btn btn-danger"                    
                    on:click={eliminarTodos}
                    data-dismiss="modal"
                >{$_('delete_all')}</button>
            </div>
        </div>
    </div>
</div>
