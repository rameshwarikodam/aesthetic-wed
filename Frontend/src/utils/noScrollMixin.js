export default {
  mounted() {
    document.body.classList.add('no-scroll');
  },

  destroyed() {
    document.body.classList.remove('no-scroll');
  },
};
