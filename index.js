import Vue from 'vue'
import Counter from './Counter'

const App = {
  render(h) {
    return (
      <div id="app">
        <Counter />
      </div>
    )
  }
}

new Vue({
  el: '#app',
  render: h => h(App)
})