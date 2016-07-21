import styles from './main'

export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    handleClick() {
      this.count++
    }
  },
  render(h) {
    return (
      <div class={styles.counter} on-click={this.handleClick}>
        {this.count}
      </div>
    )
  }
}