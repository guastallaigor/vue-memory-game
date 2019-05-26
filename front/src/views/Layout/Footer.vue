<script>
export default () => (
  <footer class="footer layout align-center justify-center">
    Made by&nbsp;
    <a href="https://github.com/guastallaigor" target="_blank">@guastallaigor</a>
  </footer>
)
</script>

<style lang="scss" scoped>
.footer {
  color: #e6eaeb;
  font-size: 0.9em;
  font-weight: bold;
  position: fixed;
  bottom: 8px;
  left: 0;
  right: 0;

  @media screen and (max-height: 935px) {
    display: none;
  }
}
</style>
