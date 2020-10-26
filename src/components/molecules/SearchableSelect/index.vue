<template>
  <div>
    <button class="button">Button</button>
    <div class="panel is-primary">
      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input is-primary" type="text" placeholder="Search" />
          <span class="icon is-left">
            <i class="material-icons">search</i>
          </span>
        </p>
      </div>
      <div tabindex="-1" role="listbox">
        <div class="panel-block is-active" tabindex="0" aria-selected="true">
          bulma
        </div>
        <div class="panel-block" tabindex="0" aria-selected="false">
          marksheet
        </div>
        <div class="panel-block" tabindex="0" aria-selected="false">
          minireset.css
        </div>
        <div class="panel-block" tabindex="0" aria-selected="false">
          jgthms.github.io
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
