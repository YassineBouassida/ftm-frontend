<template>
  <div class="my-3 ans_check elevate_1 bg_white flex align_center space_between pa-4 w-100">
    <p class="my-0">{{content.textDisplay}}</p>
    <label class="custom_input_container">
      {{label}}
      <input
        type="checkbox"
        :value="value"
        :checked="value"
        @change="$emit('valueChange', {
            value: $event.target.checked,

            id: content.id
          })"
      />
      <span class="checkmark"></span>
    </label>
  </div>
</template>
<script>
export default {
  props: ["content", "value", "label"],
  data() {
    return {
      check: false
    };
  },
  watch: {
    check: {
      handler: function(newVal) {
        if (newVal) {
          this.$emit("valueChange", {
            value: true,

            id: this.content.id
          });
        } else {
          this.$emit("valueChange", {
            value: false,

            id: this.content.id
          });
        }
      },
      deep: true,
      immediate: false
    }
  }
};
</script>
<style lang="scss" scoped>
.custom_input_container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 22px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
}
/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  border-radius: 3px;
  border: 1px solid map-get($map: $colors, $key: text1);
}

/* On mouse-over, add a grey background color */
.custom_input_container:hover input ~ .checkmark {
  background-color: map-get($map: $colors, $key: lightGrey);
}

/* When the checkbox is checked, add a blue background */
.custom_input_container input:checked ~ .checkmark {
  background-color: map-get($map: $colors, $key: primary);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.custom_input_container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.custom_input_container .checkmark:after {
  left: 9px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>