<script>
export default ({ props }) => (
  <section
    class="modal layout align-center justify-center"
    style={props.open ? 'opacity:1;display:flex;' : 'opacity:0;display:none;'}
  >
    <div class="modal-overlay" onClick={() => props.close()}></div>
    <div class="modal-content">
      <span onClick={() => props.close()}>X</span>
      <h1>Rank</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Moves</th>
          </tr>
        </thead>
        <tbody>
          {props.users && props.users.length ? props.users.map((user, index) => (
            <tr key={index}>
              <td>{(index + 1)}</td>
              <td>{user.name}</td>
              <td>{user.moves}</td>
            </tr>
          ))
            : <tr><td class="text-center" colspan="3">No rank yet.</td></tr>}
        </tbody>
      </table>
    </div>
  </section>
)
</script>

<style lang="scss" scoped>
@mixin set-fixed() {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.modal {
  @include set-fixed();

  z-index: 5;
  padding: 1.5rem;
  transition: all 0.3s ease-out;

  &-overlay {
    z-index: 4;

    @include set-fixed();

    width: 100%;
    height: 100%;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.6);
  }

  &-content {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    z-index: 5;
    position: relative;
    border-radius: 2px;
    padding: 1.5em;
    max-width: 50em;
    background-color: white;
    overflow-y: auto;
    max-height: 40em;

    & span {
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 0;
      font-size: 2em;
      color: black;
      border-left: 3px solid black;
      border-bottom: 3px solid black;
      border-radius: 15px;
    }

    h1 {
      text-align: center;
      font-size: 2.5em;
    }

    table {
      thead {
        tr {
          th {
            font-size: 1.5em;

            &:nth-child(2) {
              min-width: 300px;
            }
          }
        }
      }

      tbody {
        tr {
          td {
            font-size: 2em;
            padding: 15px;
          }
        }
      }
    }
  }
}
</style>
