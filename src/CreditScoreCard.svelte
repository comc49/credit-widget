<svelte:options
  customElement={{
    tag: 'credit-score-card',
    props: {
      // HTML attributes are always strings, so tell Svelte to convert this one to a number
      score: { type: 'Number' },
      partnerName: { attribute: 'partner-name', type: 'String' },
    },
  }}
/>

<script lang="ts">
  let { score = 0, partnerName = 'Your bank' }: { score?: number; partnerName?: string } = $props();

  let rating = $derived(
    score >= 740 ? 'Excellent' : score >= 670 ? 'Good' : score >= 580 ? 'Fair' : 'Poor',
  );

  // $host() gives you the custom element itself, so you can fire events from it
  const hostElement = $host();

  function handleViewDetails() {
    hostElement.dispatchEvent(
      new CustomEvent('view-details', {
        detail: { score },
        bubbles: true,
        composed: true, // REQUIRED, or the event can't leave the Shadow DOM
      }),
    );
  }
</script>

<section class="card" aria-labelledby="score-heading">
  <h2 id="score-heading">{partnerName} credit score</h2>
  <p class="score" aria-live="polite">{score}</p>
  <p class="rating">{rating}</p>
  <button type="button" onclick={handleViewDetails}>View details</button>
</section>

<style>
  /* :host styles the custom element tag itself */
  :host {
    display: block;
    font-family: var(--widget-font, system-ui, sans-serif);
  }

  /* The partner themes it through CSS custom properties, which DO pass into the Shadow DOM */
  .card {
    background: var(--widget-bg, #ffffff);
    color: var(--widget-text, #111111);
    border-radius: var(--widget-radius, 12px);
    padding: 16px;
  }

  .score {
    font-size: 2.5rem;
    color: var(--widget-accent, #2563eb);
  }

  button {
    background: var(--widget-accent, #2563eb);
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
  }

  button:focus-visible {
    outline: 3px solid var(--widget-focus, #f59e0b);
    outline-offset: 2px;
  }
</style>