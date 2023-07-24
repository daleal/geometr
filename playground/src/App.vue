<script setup lang="ts">
import { GApplication } from '@/components/main';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: This will always fail on a clean repository
import GPlayground from './GPlayground.vue'; // eslint-disable-line import/no-unresolved
</script>

<template>
  <GApplication>
    <GPlayground />
  </GApplication>
</template>
