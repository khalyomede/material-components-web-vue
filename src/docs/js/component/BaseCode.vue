<template lang="pug">
	table
		tbody
			tr
				td
					pre
						code.language-html {{ html }}
				td
					pre
						code.language-javascript {{ javascript }}
				td
					pre
						code.language-sass {{ sass }}
</template>
<script>
const nonEmpty = value => value.trim().length !== 0;

export default {
  props: {
    html: {
      type: String,
      required: true,
      validator: nonEmpty
    },
    javascript: {
      type: String,
      required: true,
      validator: nonEmpty
	},
	sass: {
		type: String,
		required: true,
		validator: nonEmpty
	}
  }
};
</script>
