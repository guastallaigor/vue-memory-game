<script>
export default () => (
  <section class="not-found">
    <div class="content">
      <h2>OOPS...</h2>
      <h1>404</h1>
      <p>Error</p>
      <p>Sorry, the page you are looking for could not be found</p>
      <router-link to="/">Go back</router-link>
    </div>
  </section>
)
</script>

<style lang="scss" scoped>
@mixin set-font-style($margin: 0, $color: #fff, $fontSize: 2.5em) {
  margin: $margin;
  font-size: $fontSize;
  color: $color;
}

.not-found {
  width: 100%;
  height: 100%;
  background: black;

  > .content {
    display: flex;
    align-items: center;
    flex-flow: column wrap;
    justify-content: center;
    position: fixed;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);

    > h2 {
      @include set-font-style();
    }

    > h1 {
      @include set-font-style(0, #d4312b, 8.5em);

      font-weight: bold;
    }

    > p {
      @include set-font-style(0 0 0.5em 0, #fff, 2.5em);
    }

    > p + p {
      @include set-font-style(0, #fff, 1.5em);

      border-top: 1px solid #fff;
      padding: 1em 1.5em 0 1.5em;
    }

    a {
      @include set-font-style(0.5em 0 0.5em 0, #d4312b, 2.5em);

      &:hover {
        color: #fd9145;
      }
    }
  }
}
</style>
