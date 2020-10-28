<template>
  <div ref="refElement" class="searchable-select">
    <button
      class="button searchable-select--button"
      aria-haspopup="listbox"
      @click="open"
    >
      <span>{{ value }}</span>
      <span class="icon is-left">
        <i class="material-icons">keyboard_arrow_down</i>
      </span>
    </button>
    <div v-if="active" class="panel is-primary">
      <div class="panel-block">
        <FilterField v-model="filterText" />
      </div>
      <div class="menu">
        <ul class="menu-list" tabindex="-1" role="listbox">
          <li
            v-for="(option, index) in filteredOptions"
            :key="`option-${index}`"
            tabindex="0"
            role="option"
            aria-selected="true"
            @click="() => handleClick(option.value)"
            @keypress="() => handleClick(option.value)"
          >
            <a :class="{ 'is-active': option.value === value }">
              {{ option.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import useClickAway from '@/utils/useClickAway';
import useBool from '@/utils/useBool';
import useFilter from '@/utils/useFilter';
import FilterField from './FilterField/index.vue';

type Option = {
  value: string;
  label: string;
};

export default defineComponent({
  components: {
    FilterField,
  },
  props: {
    options: { type: Array as PropType<Option[]>, required: true },
    value: { type: String, required: true },
    onClick: {
      // eslint-disable-next-line no-unused-vars
      type: Function as PropType<(value: string) => void>,
      required: true,
    },
  },
  setup(props) {
    const { active, activate: open, inactivate: close } = useBool();
    const refElement = ref<HTMLElement>();
    useClickAway(refElement, close);

    const { filterText, filteredItems: filteredOptions } = useFilter<Option>(
      props.options,
      (item, word) => {
        return !!item.label.toLowerCase().match(word.toLowerCase());
      }
    );

    const handleClick = (value: string) => {
      const { onClick } = props;
      onClick(value);
      close();
    };

    return {
      refElement,
      active,
      open,
      handleClick,
      filterText,
      filteredOptions,
    };
  },
});
</script>

<style lang="scss" scoped>
.searchable-select {
  width: 320px;

  &--button {
    display: flex;
    justify-content: space-between;
    width: 100px;
  }
}
</style>
