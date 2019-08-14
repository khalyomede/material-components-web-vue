<template lang="pug">
	div(:class="classes")
		slot
</template>
<script>
export default {
  props: {
    phone: {
      type: Number,
      default: 12,
      validator: value => 1 <= value && value <= 12
    },
    tablet: {
      type: Number,
      default: 12,
      validator: value => 1 <= value && value <= 8
    },
    desktop: {
      type: Number,
      default: 12,
      validator: value => 1 <= value && value <= 4
    }
  },
  computed: {
    classes() {
      return `mdc-layout-grid__cell ${this.phoneClass} ${this.tabletClass} ${this.desktopClass}`;
    },
    phoneClass() {
      return `mdc-layout-grid__cell--span-${this.phone}-phone`;
    },
    tabletClass() {
      return `mdc-layout-grid__cell--span-${this.tablet}-tablet`;
    },
    desktopClass() {
      return `mdc-layout-grid__cell--span-${this.desktop}-desktop`;
    }
  }
};
</script>
