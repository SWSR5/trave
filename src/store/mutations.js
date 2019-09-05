export default {
  changec (state, city) {
    this.state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
