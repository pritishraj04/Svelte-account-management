<script></script>

<div class="card">
  <div class="top">
    <img src="./assets/imgs/shoe.png" alt="Shoe" />
  </div>
  <div class="bottom">
    <div class="details">
      <h1>Nike Pro Elite</h1>
      <h3>Running Shoe Pro</h3>
      <h6>$200</h6>
    </div>
    <div class="action">
      <span class="buy"><a href=""><i class="icon-buy" /> Buy Now</a></span>
      <span class="cart"><a href=""><i class="icon-cart" />Add to cart</a></span
      >
    </div>
  </div>
</div>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Muli");
  .card {
    border-radius: 20px;
    .top {
      content: "";
      height: 10em;
      width: 14em;
      display: flex;
      align-items: center;
      background-color: #ff6d39;
      border-radius: 0% 0% 50% 50%;
      position: absolute;
      z-index: 5;
      img {
        width: 15em;
        margin-left: -3em;
        margin-top: 60px;
      }
    }
    .bottom {
      content: "";
      height: 20em;
      width: 14em;
      background-color: #2a2f40;
      z-index: 3;
      .details {
        padding: 10em 2em 2em 2em;
        h1 {
          color: #ff6d39;
          font-family: "muli";
          font-weight: bold;
          font-size: 1em;
        }
        h3 {
          color: #ffffff;
          font-family: "muli";
          font-size: 0.7em;
          font-weight: 500;
        }
        h6 {
          color: #ffffff;
          font-family: "muli";
          font-weight: bold;
          font-size: 1em;
          margin: 0;
        }
      }
      .action {
        margin: 0 auto;
        span {
          padding: 0 1em;
          a {
            color: #fff;
            text-decoration: none;
            i {
              width: 0.3em;
            }
          }
        }
      }
    }
  }
</style>
