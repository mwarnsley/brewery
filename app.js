new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    searchValue: ''
  },
  methods: {
    sayHello: function() {
      console.log('Hello World');
    }
  },
  watch: {
    searchValue: function(val, oldVal) {
      this.searchValue = val;
    }
  }
});
