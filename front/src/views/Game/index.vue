<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import Card from '@/components/Card'
import CARDS_ARRAY from '@/assets/json/cards-array.js'

export default {
  name: 'Game',
  components: { Card },
  data: () => ({
    cards: [ ...CARDS_ARRAY ],
    openedCardsId: [],
    timeout: null,
    verifying: false,
    restarting: false,
    finishing: false
  }),
  computed: mapState({
    counter: state => state.cards.counter,
    moves: state => state.cards.moves,
    playerWon: state => state.cards.playerWon,
    isRestarting: state => state.cards.isRestarting
  }),
  created () {
    this.getAll()
    this.startGame()
  },
  beforeDestroy () {
    clearTimeout(this.timeout)
  },
  sockets: {
    usersEmit (data) {
      this.setUsers(data)
    }
  },
  methods: {
    ...mapActions('users', [
      'getAll',
      'saveActiveUser'
    ]),
    ...mapMutations({
      showPlayerWon: 'cards/showPlayerWon',
      clearPlayerWon: 'cards/clearPlayerWon',
      setCounter: 'cards/setCounter',
      setMoves: 'cards/setMoves',
      setUsers: 'users/setUsers'
    }),
    async rollOutCardsAndShowPlayerWon () {
      const { cards } = this
      this.finishing = true
      const turningCards = cards.map(async (card, index) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            card.isOtherWay = true
            this.cards = [ ...cards.slice(0, index), card, ...cards.slice(index + 1) ]
            resolve()
          }, (190) * index)
        })
      })
      this.showPlayerWon()
      await Promise.all(turningCards)
      this.finishing = false
    },
    startGame () {
      const otherDuplicate = this.cards.map(card => ({ ...card }))
      const shuffledCards = this.shuffle([ ...this.cards, ...otherDuplicate ])
      this.cards = shuffledCards
    },
    handleTurn (indexParam) {
      const { verifying, moves, restarting, cards, openedCardsId, counter, playerWon } = this
      if (verifying || restarting) return

      const card = cards.find((card, indexArray) => indexArray === indexParam)

      if (card.isTurned) return

      card.isTurned = true
      const cardsTurned = cards
        .filter(card => !openedCardsId.includes(card.id))
        .filter(card => card.isTurned)
      const isTwoCardsTurned = cardsTurned.length === 2

      if (isTwoCardsTurned) {
        this.setMoves(moves + 1)
        const firstCardId = cardsTurned[0].id
        const secondCardId = cardsTurned[1].id
        const isCardsEqual = firstCardId === secondCardId

        if (isCardsEqual) {
          const nextCounter = counter + 1
          openedCardsId.push(firstCardId)
          this.setCounter(nextCounter)

          if ((nextCounter === 6) && !playerWon) {
            this.saveActiveUser(this.moves)
            this.rollOutCardsAndShowPlayerWon()
          }

          return
        }

        this.foldTurnedCardsAfterOneSecond(firstCardId, secondCardId)
      }
    },
    foldTurnedCardsAfterOneSecond (firstCardId, secondCardId) {
      this.verifying = true
      this.timeout = setTimeout(() => {
        this.cards = this.cards.map(card => {
          if ((firstCardId === card.id) || (secondCardId === card.id)) {
            card.isTurned = false
          }

          return card
        })
        this.verifying = false
      }, 1000)
    },
    shuffle (array) {
      let temporaryValue
      let randomIndex
      const returnedArray = [ ...array ]

      array.forEach((it, currentIndex) => {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
        temporaryValue = array[currentIndex]
        returnedArray[currentIndex] = returnedArray[randomIndex]
        returnedArray[randomIndex] = temporaryValue
      })

      return returnedArray
    },
    clear () {
      this.cards = [ ...CARDS_ARRAY ]
      this.openedCardsId = []
      this.setCounter(0)
      this.setMoves(0)
      this.clearPlayerWon()
    },
    restartGame () {
      if (this.restarting || this.finishing) return

      this.restarting = true
      this.foldAllCards()
      this.timeout = setTimeout(() => {
        this.clear()
        this.startGame()
        this.restarting = false
      }, 550)
    },
    foldAllCards () {
      this.cards.forEach(card => {
        card.isTurned = false
        card.isOtherWay = false
      })
    }
  },
  watch: {
    isRestarting () {
      this.restartGame()
    }
  },
  render (h) {
    return (
      <main class="main layout align-center justify-center wrap-row">
        {this.cards.map((card, index) => (
          <Card
            key={index}
            cardIndex={index}
            isTurned={card.isTurned}
            imageUrl={card.imageUrl}
            handleTurn={this.handleTurn}
            isOtherWay={card.isOtherWay}
          />
        ))}
      </main>
    )
  }
}
</script>
