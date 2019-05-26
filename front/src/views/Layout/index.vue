<script>
import Game from '@/views/Game'
import User from '@/views/Game/User'
import Toolbar from './Toolbar'
import { mapState } from 'vuex'

export default {
  name: 'Layout',
  components: {
    Game,
    Toolbar,
    User,
    Footer: () => import('./Footer'),
    Modal: () => import('@/components/Modal'),
    PlayerWon: () => import('@/components/PlayerWon')
  },
  data: () => ({
    openModal: false
  }),
  computed: mapState({
    playerWon: state => state.cards.playerWon,
    activeUser: state => state.users.activeUser,
    users: state => state.users.users
  }),
  methods: {
    close () {
      this.openModal = false
    }
  },
  render (h) {
    return (
      <div class="main-view layout wrap-row">
        <Modal open={this.openModal} close={this.close} users={this.users}/>
        <Toolbar vModel={this.openModal}/>
        <PlayerWon playerWon={this.playerWon}/>
        {this.activeUser
          ? <Game style={this.playerWon ? { filter: 'blur(2px)' } : {}}/>
          : <User/>}
        <Footer/>
      </div>
    )
  }
}
</script>

<style lang="scss" scoped>
.main-view {
  height: calc(100% - 64px);
  width: calc(100% - 32px);
  padding: 32px 16px;
}
</style>
