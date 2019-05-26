<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Toolbar',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState({
      counter: state => state.cards.counter,
      moves: state => state.cards.moves,
      activeUser: state => state.users.activeUser
    }),
    open: {
      get () {
        return this.value
      },
      set (newValue) {
        this.$emit('input', newValue)
      }
    }
  },
  methods: {
    ...mapMutations('cards', ['restart']),
    openModal () {
      this.open = true
    }
  },
  render (h) {
    return (
      <header class="toolbar layout wrap-row align-start">
        {this.activeUser && <div class="layout column text">
          <span class="matched">Matched cards: {this.counter} / 6</span>
          <span class="moves">Moves: {this.moves}</span>
          <span class="is-link" onClick={() => this.openModal()}>Rank</span>
        </div>}
        <div class="layout column img" style={this.activeUser ? '' : 'flex:1;margin-left:0;'}>
          <img src={require('@/assets/img/logo.jpg')} alt="Image logo"/>
          <span>Memory Game</span>
        </div>
        {this.activeUser && <button type="button" onClick={this.restart}>Restart</button>}
      </header>
    )
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/responsive.scss";

@mixin set-margin-width($mt: 0, $ml: -1em, $width: 100%) {
  margin-top: $mt;
  margin-left: $ml;
  width: $width;
}

.toolbar {
  max-height: 200px;

  > .text {
    max-width: 370px;
  }

  > .img {
    flex: 1 0 auto;
    align-self: flex-start;
    justify-content: center;
    text-align: center;
    margin-top: -16px;
    margin-left: -11.7em;

    @include xs() {
      @include set-margin-width();
    }

    @include sm() {
      @include set-margin-width();
    }

    img {
      width: 300px;
      align-self: center;

      @include xs() {
        width: 180px;
      }

      @include sm() {
        width: 220px;
      }
    }

    span {
      margin: -18px 0 0 58px;
      font-size: 2.1em;

      @include xs() {
        font-size: 1.5em;
        margin: -13px 0 0 58px;
      }

      @include sm() {
        font-size: 1.8em;
        margin: -13px 0 0 58px;
      }
    }
  }
}
</style>
