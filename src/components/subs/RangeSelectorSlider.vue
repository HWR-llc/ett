<template>
  <div>
    <input
      type="range"
      :min="minRange"
      :max="maxRange"
      v-model="minValue"
      @input="updateChart"
      />
    <input
      type="range"
      :min="minRange"
      :max="maxRange"
      v-model="maxValue"
      @input="updateChart"
      />
      <div>
        <span>From: {{ minDate }}</span>
        <span>To: {{ maxDate }}</span>
      </div>
  </div>
  
</template>

<script>
import { timestampToMonthYear } from './utils';

export default {
  props: {
    initialMin: {
      type: Number,
      default: 0
    },
    initialMax: {
      type: Number,
      default: 100
    },
    maxRange: {
      type: Number,
      required: true
    },
    minRange: {
      type: Number,
      required: true
    },
    chart: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      currentMin: this.initialMin,
      currentMax: this.initialMax
    };
  },
  
  computed: {
    minDate() {
      return timestampToMonthYear(this.currentMin);
    },
    maxDate() {
      return timestampToMonthYear(this.currentMax);
    }
  },
  methods: {
    updateChart() {
      this.chart.xAxis[0].setExtremes(this.currentMin, this.currentMax);
    }
  }
};
</script>