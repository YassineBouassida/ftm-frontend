<template>
  <div>
    <label class="labe mb-2" v-if="label" :for="label">
      {{label}}
      <strong class="text_primary" v-if="required">*</strong>
    </label>
    <input
      v-if="dataField=='input'"
      class="text data_field"
      :type="iType"
      :id="label"
      :placeholder="placeholder"
    />
    <textarea
      :res="false"
      v-if="dataField=='textarea'"
      class="text data_field"
      :type="iType"
      :id="label"
      :placeholder="placeholder"
    ></textarea>
    <select class="text data_field" v-if="dataField=='select'" :name="label" :id="label">
      <option :value="option.text" v-for="(option, index) in options" :key="index">{{option.text}}</option>
    </select>
  </div>
</template>
<script>
export default {
  props: {
    iType: {
      type: String
    },
    dataField: {
      type: String
    },
    label: {
      type: [String, Boolean]
    },
    required: {
      type: [Boolean]
    },
    placeholder: {
      type: String
    },
    options: {
      type: Array
    }
  }
};
</script>
<style lang="scss" scoped>
label {
  font-size: 1.125rem;
  font-family: $bold;
  color: map-get($map: $colors, $key: text1);
  display: block;
}
.data_field {
  width: 100%;
  height: 2.875rem;
  border-radius: 3px;
  background: map-get($map: $colors, $key: white);
  border: 1px solid map-get($map: $colors, $key: text3);
  color: map-get($map: $colors, $key: text3);
  font-family: $regular;
  font-size: 1rem;
  padding: 0.5rem 1rem;

  &::placeholder {
    font-family: $light;
    font-size: 1rem;
  }
}
textarea {
  min-height: 9rem;
  resize: vertical;
}
</style>