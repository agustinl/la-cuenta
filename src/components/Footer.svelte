<script>    
	import { _ } from 'svelte-i18n';
</script>

<footer class="container-fluid text-center mt-5 no-gutters footer">
    <span class="text-muted">{new Date().getFullYear()} — {$_('made_for')} <strong><a href="https://www.agustinl.dev/">agustinl</a></strong></span>
</footer>