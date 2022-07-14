function Card() {
  return (
    <div className="card">
      <div className="favourite">
        <img src="/img/heart-unlike.svg" alt="" />
      </div>

      <img src="/img/sneakers/1.jpg" width={133} height={112} alt="" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>12 199 руб</b>
        </div>
        <button>
          <img width={11} height={11} src="/img/plus.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
export default Card;
