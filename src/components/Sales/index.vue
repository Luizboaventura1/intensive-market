<template>
  <div class="h-[80px]">
    <TransitionGroup name="list" tag="ul" class="relative">
      <ul
        v-for="sale in showSales"
        :key="sale"
        class="bg-primary-color w-full absolute max-w-sm p-3 rounded-lg grid grid-cols-[auto,1fr] gap-4 mb-2"
      >
        <div>
          <img
            class="w-[40px] h-[40px] rounded-lg"
            src="../../assets/channels4_profile.jpg"
            alt="Kiwify logo"
          />
        </div>
        <div class="text-start">
          <h1 class="font-bold text-white">{{ sale.title }}</h1>
          <p class="text-zinc-200">{{ sale.description }}</p>
        </div>
      </ul>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showSales = ref([]);

let sales = [
  { title: "Pix gerado!", description: "Sua comissão R$ 147,99" },
  { title: "Pix gerado!", description: "Sua comissão R$ 86,00" },
  { title: "Pix gerado!", description: "Sua comissão R$ 245,99" },
  { title: "Pix gerado!", description: "Sua comissão R$ 145,99" },
  { title: "Pix gerado!", description: "Sua comissão R$ 46,99" },
  { title: "Pix gerado!", description: "Sua comissão R$ 378,00" },
  { title: "Pix gerado!", description: "Sua comissão R$ 129,99" },
];
let saleID = ref(0);

const salesAnimation = () => {
  setInterval(() => {
    if (showSales.value.length < sales.length) {
      showSales.value.push(sales[saleID.value]);
      saleID.value += 1;
    } else {
      saleID.value = 0;
      showSales.value = [];
    }
  }, 1500);
};

salesAnimation();
</script>

<style lang="scss" scoped>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.8s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
