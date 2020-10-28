<template>
  <p class="control has-icons-left">
    <input
      :input="value"
      class="input is-primary"
      type="text"
      placeholder="Search"
      @input="updateValue"
    />
    <span class="icon is-left">
      <i class="material-icons">search</i>
    </span>
  </p>
</template>

<script lang="ts">
// Memo: Ref: Vue 3.0:v-model https://github.com/vuejs/rfcs/blob/master/active-rfcs/0011-v-model-api-change.md#detailed-design
import { defineComponent, SetupContext } from 'vue';

export default defineComponent({
  props: {
    value: { type: String, required: true },
  },
  emits: ['update:value'],
  setup(_, context: SetupContext) {
    const updateValue = (event: InputEvent) => {
      if (event.target instanceof HTMLInputElement) {
        context.emit('update:value', event.target.value);
      }
    };
    return { updateValue };
  },
});
</script>
