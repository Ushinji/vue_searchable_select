<template>
  <p class="control has-icons-left">
    <input
      :value="value"
      class="input is-primary"
      type="text"
      placeholder="Search"
      @onInput="onInput"
    />
    <span class="icon is-left">
      <i class="material-icons">search</i>
    </span>
  </p>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue';

export default defineComponent({
  props: {
    value: { type: String, required: true },
  },
  emits: ['input'],
  setup(_, context: SetupContext) {
    const onInput = (event: InputEvent) => {
      if (event.target instanceof HTMLInputElement) {
        context.emit('input', event.target.value);
      }
    };
    return { onInput };
  },
});
</script>
