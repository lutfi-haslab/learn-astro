<template>
  <aside v-if="$isCartOpen">Open</aside>
  <div>
    <p>Clicked {{ $counter }} {{ $counter === 1 ? 'time' : 'times' }}</p>
    <button @click="incrementCount">Increment</button>
  </div>
</template>

<script setup>
import { isCartOpen } from '../store/cartStore';
import { counter } from '../store/counter';
import { useStore } from '@nanostores/vue';

const $isCartOpen = useStore(isCartOpen);
const $counter = useStore(counter);

const incrementCount = () => {
  $counter += 1;
};
</script>