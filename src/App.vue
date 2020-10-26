<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Hello World: {{ selected }}</h1>
      <SearchableSelect
        :options="options"
        :value="selected"
        :on-click="onChangeSelected"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import SearchableSelect from '@/components/molecules/SearchableSelect/index.vue';

export default defineComponent({
  components: {
    SearchableSelect,
  },
  setup() {
    const options = [
      { label: 'Foo', value: 'foo' },
      { label: 'Bar', value: 'bar' },
      { label: 'Fizz', value: 'fizz' },
      { label: 'Buzz', value: 'buzz' },
    ];
    const selected = ref('foo');
    const onChangeSelected = (value: string) => {
      console.log(value);

      selected.value = value;
    };
    return { options, selected, onChangeSelected };
  },
});
</script>

<style lang="scss">
@import '../node_modules/bulma/bulma.sass';
</style>
