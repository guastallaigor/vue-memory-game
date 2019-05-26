<script>
export default ({ props }) => (
  <section
    class="player-won layout wrap-column justify-center align-center"
    style={{ display: props.playerWon ? 'flex' : 'none' }}
  >
    <span>You Won!</span>
    <span>Click on top of the restart button to play again</span>
  </section>
)
</script>

<style lang="scss" scoped>
@import "../assets/scss/responsive.scss";

.player-won {
  @keyframes text-animation {
    0% {
      letter-spacing: 1em;
      transform: translateZ(400px);
      opacity: 0;
    }

    40% {
      opacity: 0.6;
    }

    100% {
      transform: translateZ(0);
      opacity: 1;
    }
  }

  span {
    &:first-child {
      font-size: 10em;

      @include sm-and-down() {
        text-align: center;
        font-size: 7em;
      }
    }

    &:last-child {
      font-size: 2em;

      @include sm-and-down() {
        text-align: center;
      }
    }
  }

  font-weight: bold;
  color: #e6eaeb;
  z-index: 3;
  animation: text-animation 1.6s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  transform: translate(-50%, -50%);
}
</style>
