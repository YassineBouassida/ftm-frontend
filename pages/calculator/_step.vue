<template>
  <div class="calc_step flex space_around" v-if="!this.$apollo.loading">
    <div
      v-for="(question, id) in quizz"
      :key="'q'+id"
      v-if="question.step==currentStep"
      class="pa-5 w-65 bg_lightGrey space_between flex column"
    >
      <div class="c_head">
        <h3 class="text_text2">Step {{question.step}} of 10</h3>
        <h1>{{question.title}}</h1>
      </div>

      <div class="c_body px-2">
        <div class="answers flex wrap align_center space_between">
          <radio-ans
            @click.native="question.results.selectedOption=option.id"
            v-for="(option, index) in question.options"
            :key="'o'+index"
            :content="option"
            :selected="question.results.selectedOption==option.id"
          ></radio-ans>
          <markAns
            v-for="(mark, index) in question.marks"
            :key="'m'+index"
            :content="mark"
            :value="markExist(question.id,mark.id)"
            @valueChange="markChanged(question.id,mark.id,$event)"
          ></markAns>
          <input-ans
            v-for="(input, index) in question.inputs"
            :key="'i'+index"
            @input="inputChanged(question.id,input.id,$event)"
            :iType="input.type"
            :value="inputExist(question.id,input.id)"
            data-field="input"
            class="my-2 w-100"
            :label="input.label"
            :required="input.required"
            :placeholder="input.placeholder"
            :error="errors[input.name]"
            @errorField="errors[input.name]=$event;"
            :ref="input.name"
          ></input-ans>
        </div>
        <p class="hint" v-if="question.hint">
          <strong>{{question.hint.title}}</strong>
          : {{question.hint.description}}
        </p>
      </div>
      <div class="c_footer">
        <div class="flex align_center center mt-2" v-if="checkForm">
          <h4 class="text_primary" v-tr>Please check required fields</h4>
        </div>
        <div
          class="flex align_center"
          :class="{space_between:question.previous,end:!question.previous}"
        >
          <fBtn
            v-if="question.previous"
            @click.native="previousQuestion(question)"
            class="pa-3 bg_lightGrey flex align_center center border f_link text_white mx-2"
          >
            <h3 v-tr class="text_text1">Back</h3>
          </fBtn>
          <div class="flex align_center">
            <fBtn
              @click.native="skipQuestion(question)"
              v-if="question.next"
              class="pa-3 bg_lightGrey flex align_center center border f_link text_white mx-2"
            >
              <h3 v-tr class="text_text1">skip</h3>
            </fBtn>
            <fBtn
              class="pa-3 bg_primary flex align_center center border f_link text_white mx-2"
              @click.native="nextQuestion(question)"
              v-if="question.next"
            >
              <h3 v-tr>Processed</h3>
            </fBtn>
            <fBtn
              v-else
              @click.native="sendDetails(question)"
              class="pa-3 bg_primary flex align_center center border f_link text_white mx-2"
            >
              <h3 v-tr>send</h3>
            </fBtn>
          </div>
        </div>
      </div>
    </div>
    <div class="w-35 bg_white pa-4 flex column space_between">
      <div class="c_head">
        <h3>Summary</h3>
      </div>
      <div class="c_body py-3 pt-5 flex2">
        <h4
          v-for="(item, index) in cart.items"
          :key="index"
          class="flex align_center space_between text_text3 my-3"
        >
          <span>{{item.text}}</span>
          <span>${{item.cost.toFixed(2)}}</span>
        </h4>
      </div>
      <div class="c_footer">
        <hr />
        <h3 class="flex align_center space_between text_text1">
          <span>Total</span>
          <span>${{cart.total().toFixed(2)}}</span>
        </h3>
        <p class="txt_right mb-0 mt-5">
          <u>Learn more about our calculater</u>
        </p>
      </div>
    </div>
  </div>
  <div v-else class="bg_lightGrey loading_page flex align_center center">
    <div class="load_spinner open_spinner"></div>
  </div>
</template>
<script>
import quizzQuery from "~/apollo/queries/quizz/quizz";

export default {
  computed: {
    cart() {
      let cart = {
        total: function() {
          const total = this.items.length
            ? this.items.reduce((prev, curr) => {
                return prev + curr.cost;
              }, 0)
            : 0;

          return total;
        },
        steps: 0,

        items: []
      };

      for (let index = 0; index < this.quizz.length; index++) {
        let results = [];
        const question = this.quizz[index];
        results = question.results;
        const option = results.selectedOption
          ? {
              ...question.options.find(opt => {
                return opt.id == results.selectedOption;
              }),
              id: `q-${question.id}-options-${results.selectedOption}`
            }
          : null;
        results.marks.map(m => {
          if (m) {
            cart.items.push({ ...m, id: `q-${question.id}-marks-${m.id}` });
          }
        });
        if (option) {
          cart.items.push(option);
        }
      }
      return cart;
    },
    results() {
      return this.$store.getters["calculator/results"];
    }
  },
  mounted() {
    if (this.results.length) {
      const results = JSON.parse(JSON.stringify(this.results));
      this.quizz = results;
    } else {
      if (this.quizzes) {
        const quizz = JSON.parse(JSON.stringify(this.quizzes[0].questions));
        this.quizz = quizz;
        this.$store.dispatch("calculator/updateQuizzResults", {
          results: quizz
        });
      }
    }
  },
  apollo: {
    quizzes: {
      prefetch: true,
      query: quizzQuery,
      variables() {
        return { locale: this.$i18n.locale };
      },
      watchLoading: function(isLoading) {
        this.$nextTick(() => {
          if (this.$nuxt && this.$nuxt.$loading) {
            isLoading
              ? this.$nuxt.$loading.start()
              : this.$nuxt.$loading.finish();
          }
        });
      }
    }
  },
  data() {
    return {
      quizz: [],
      checkForm: false,
      errors: {
        total: 6
      },
      carts: {
        total: function() {
          const total = this.items.length
            ? this.items.reduce((prev, curr) => {
                return prev + curr.cost;
              }, 0)
            : 0;

          return total;
        },
        steps: 0,

        items: []
      },
      currentStep: 1,
      selectedOptionAnswer: null
    };
  },
  methods: {
    inputChanged(questionId, inputId, newVal) {
      console.log("inputChanged ", newVal);
      const question = this.quizz.find(qest => qest.id == questionId);
      const input = question.inputs.find(input => input.id == inputId);

      if (newVal) {
        input["value"] = newVal;
        question.results.inputs.push(input);
      } else {
        const resultInputs = question.results.inputs.filter(
          input => input.id != inputId
        );

        question.results.inputs = resultInputs;
      }
    },
    markChanged(questionId, markId, newVal) {
      const question = this.quizz.find(qest => qest.id == questionId);
      const mark = question.marks.find(mark => mark.id == markId);

      if (newVal.value) {
        question.results.marks.push(mark);
      } else {
        const resultMarks = question.results.marks.filter(
          mark => mark.id != markId
        );

        question.results.marks = resultMarks;
      }
    },
    markExist(questionId, markId) {
      const question = this.quizz.find(qest => qest.id == questionId);

      const mark = question.results.marks.find(m => {
        return m ? m.id == markId : false;
      });

      return !!mark;
    },
    inputExist(questionId, inputId) {
      const question = this.quizz.find(qest => qest.id == questionId);

      const input = question.results.inputs.find(i => {
        return i ? i.id == inputId : false;
      });

      return input ? input.value : "";
    },
    previousQuestion(question) {
      this.selectedOptionAnswer = null;
      this.currentStep = question.previous;
      this.$store.dispatch("calculator/updateQuizzResults", {
        results: this.quizz,
        total: this.cart.total()
      });
    },
    nextQuestion(question) {
      this.selectedOptionAnswer = null;
      this.currentStep = question.next;
      this.$store.dispatch("calculator/updateQuizzResults", {
        results: this.quizz,
        total: this.cart.total()
      });
    },
    skipQuestion(question) {
      this.quizz.find(q => q.id == question.id).results = {
        total: 0,
        steps: 0,

        selectedOption: null,
        marks: [],
        inputs: []
      };
      this.nextQuestion(question);
    },
    async sendDetails(question) {
      if (this.verifyForm()) {
        this.errors = {};
        await this.$store.dispatch("calculator/updateQuizzResults", {
          results: this.quizz,
          total: this.cart.total(),
          status: "completed"
        });
        this.checkForm = false;
        this.$router.push({ path: this.localePath("/calculator/finished") });
      } else {
        this.checkForm = true;
      }
    },
    verifyForm() {
      let verifier = 1;
      Object.keys(this.$refs).map(refKey => {
        let ref = this.$refs[refKey][0];
        verifier = verifier * ref.verifyAndEmit(ref.value);
      });
      return verifier;
    }
  }
};
</script>
<style lang="scss" scoped>
.calc_step {
  padding: 0 !important;
  height: 100%;
  border-radius: 9px;
  .w-65 {
    border-radius: 9px 0 0 9px;
    border: 1px solid #dbdbdb;
    border-right: none;
    .c_body {
      max-height: 60vh;
      overflow: auto;
      margin-bottom: 1rem;
    }
  }
  .w-35 {
    border-radius: 0 9px 9px 0;
    border: 1px solid transparent;
    border-left: none;
    .c_body {
      max-height: 60vh;
      overflow: auto;
      margin-bottom: 1rem;
    }
  }
}
</style>