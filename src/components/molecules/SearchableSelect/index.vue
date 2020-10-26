<template>
  <div ref="refElement">
    <button class="button" aria-haspopup="listbox" @click="open">Button</button>
    <div v-if="active" class="panel is-primary">
      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input is-primary" type="text" placeholder="Search" />
          <span class="icon is-left">
            <i class="material-icons">search</i>
          </span>
        </p>
      </div>
      <ul class="menu-list" tabindex="-1" role="listbox">
        <a
          v-for="(option, index) in options"
          :key="`option-${index}`"
          class="panel-block"
          :class="[{ 'is-active': option.value === value }, 'panel-block']"
          tabindex="0"
          role="option"
          aria-selected="true"
          @click="() => handleClick(option.value)"
          @keypress="() => handleClick(option.value)"
        >
          {{ option.label }}
        </a>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import useClickAway from '@/utils/useClickAway';
import useBool from '@/utils/useBool';

type Option = {
  value: string;
  label: string;
};

export default defineComponent({
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

    const handleClick = (value: string) => {
      const { onClick } = props;
      onClick(value);
      close();
    };

    return { refElement, active, open, handleClick };
  },
});
</script>
