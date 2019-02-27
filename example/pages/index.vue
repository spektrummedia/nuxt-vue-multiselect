<template>
  <div>
    <multiselect
      v-model="value"
      :options="options"
      :close-on-select="false"
      :clear-on-select="false"
      :hide-selected="true"
      :preserve-search="true"
      placeholder="Pick some"
      label="name"
      track-by="name"
      :preselect-first="true"
      id="example"
      @select="onSelect"
    ></multiselect>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      options: [
        { name: "Vue.js", language: "JavaScript" },
        { name: "Rails", language: "Ruby" },
        { name: "Sinatra", language: "Ruby" },
        { name: "Laravel", language: "PHP", $isDisabled: true }
      ]
    };
  },
  methods: {
    onSelect(option, id) {
      console.log(option, id);
    }
  }
};
</script>
