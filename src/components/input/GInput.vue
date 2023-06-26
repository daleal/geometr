<script setup lang="ts">
import { ref } from 'vue';
import { GGlass } from '@/components/glass';

const content = defineModel<string>({ required: true });

const props = defineProps<{
  label?: string,
  placeholder?: string,
}>();

const inputRef = ref<HTMLInputElement | null>(null);

const focusInput = () => {
  inputRef.value?.focus();
};
</script>

<template>
  <GGlass
    class="g-input"
    @click="focusInput"
  >
    <label
      v-if="props.label"
      class="g-input__label"
    >
      {{ props.label }}
    </label>
    <input
      ref="inputRef"
      v-bind="$attrs"
      v-model="content"
      class="g-input__input"
      :label="props.label"
      :placeholder="props.placeholder"
      type="text"
    >
  </GGlass>
</template>

<style scoped lang="scss">
@use "./variables";

.g-input {
  color: variables.$input-text-color;
  font-size: variables.$input-font-size;
  font-weight: variables.$input-font-weight;
  letter-spacing: variables.$input-letter-spacing;
  line-height: variables.$input-line-height;
  padding: variables.$input-padding;
  cursor: text;
  display: block;
}

.g-input:focus-within {
  border-color: variables.$focused-border-color;
}

.g-input__label {
  color: variables.$input-label-text-color;
  font-size: variables.$input-label-font-size;
  font-weight: variables.$input-label-font-weight;
  letter-spacing: variables.$input-label-letter-spacing;
  line-height: variables.$input-label-line-height;
  margin-bottom: variables.$input-label-margin-bottom;
  cursor: inherit;
  display: block;
}

.g-input__input {
  margin-bottom: variables.$input-bottom-extra-margin;
  border-bottom: variables.$input-bottom-border;
  color: inherit;
  cursor: inherit;
  width: 100%;
}

.g-input__input::placeholder {
  color: variables.$input-placeholder-text-color;
}

.g-input__input:focus {
  border-bottom-color: variables.$focused-border-color;
}
</style>
