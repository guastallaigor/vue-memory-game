<script>
export default ({ props }) => (
  <div class="card">
    <div class="card-flip-inner"
      onClick={() => props.handleTurn(props.cardIndex)}
      style={
        props.isTurned && !props.isOtherWay
          ? { transform: 'rotateY(180deg)' }
          : props.isOtherWay
            ? { transform: 'rotateY(360deg)' }
            : {}
      }
    >
      <div class="card-flip-front">
        <VLazyImage src={require('@/assets/img/back-card.jpg')} alt="Back of the card"/>
      </div>
      <div class="card-flip-back">
        <VLazyImage src={props.imageUrl} alt="Front of the card"/>
      </div>
    </div>
  </div>
)
</script>

<style lang="scss" scoped>
@mixin set-card-flip-both() {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: transparent;
}

.card {
  user-select: none;
  background-color: transparent;
  width: 265px;
  height: 370px;
  margin: 5px 5px 2px 5px;
  cursor: pointer;
  perspective: 1000px;

  .card-flip-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    img {
      width: 268px;
      height: 371px;
    }

    .card-flip-front {
      @include set-card-flip-both();
    }

    .card-flip-back {
      @include set-card-flip-both();

      transform: rotateY(180deg);
    }
  }
}
</style>
