<script>
import { mapMutations } from 'vuex'

export default {
  name: 'User',
  data: () => ({
    user: ''
  }),
  mounted () {
    this.$refs.user && this.$refs.user.focus()
  },
  methods: {
    ...mapMutations('users', ['setActiveUser']),
    saveUser (event) {
      event.preventDefault()
      event.stopPropagation()

      if (!this.user.trim()) return

      this.setActiveUser(this.user)

      return false
    }
  },
  render (h) {
    return (
      <section class="user">
        <form onSubmit={() => this.saveUser(event)} class="layout column">
          <label>Enter your username:</label>
          <input type="text" required placeholder="Username" ref="user" vModel={this.user}/>
          <button type="submit">Start</button>
        </form>
      </section>
    )
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/responsive.scss";

.user {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @include xs() {
    left: 29%;
    transform: translate(-19%, -50%);
  }

  input {
    width: calc(100% - 19px);
    height: 48px;
    margin: 5px 0 6px;
    padding: 0 8px;
    border-radius: 6px;
    border: 2px solid transparent;
    outline: none;
    line-height: 1.3em;
    font-size: 1.8rem;
  }

  button {
    width: 140px;
    height: 60px;
    font-size: 1.8em;
    align-self: flex-end;
    padding: 0;
    $margin: 1em 0;
    margin: $margin;

    @include xs() {
      margin: $margin;
      width: 100%;
    }

    @include sm() {
      margin: $margin;
    }
  }
}
</style>
