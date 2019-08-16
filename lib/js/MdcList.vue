<template lang="pug">
	ul(:class="classes" :role="role")
		slot
</template>
<script>
import { MDCList } from "@material/list";
import { MDCRipple } from "@material/ripple";

export default {
  props: {
    twoLine: {
      type: Boolean,
      default: false
    },
    ripple: {
      type: Boolean,
      default: true
    },
    selectable: {
      type: Boolean,
      default: false
    },
    radio: {
      type: Boolean,
      default: false
    },
    checkbox: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        "mdc-list": true,
        "mdc-list--two-line": this.twoLine
      };
    },
    role() {
      if (this.selectable) {
        return "listbox";
      } else if (this.radio) {
        return "radiogroup";
      } else if (this.checkbox) {
        return "group";
      } else {
        return false;
      }
    }
  },
  mounted() {
    const list = new MDCList(this.$el);

    if (this.ripple) {
      list.listElements.map(listItem => new MDCRipple(listItem));
    }

    if (this.selectable) {
      list.singleSelection = true;
    }
  }
};
</script>
