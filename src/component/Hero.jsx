const Herosection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>Style Meets Comfort</h1>
        <p>YOUR FEET DESERVE THE BEST AND HERE AT FILA WE DELIEER THE BEST</p>

        <div className="hero-btn">
          <button>Shop Now </button>
          <button className="secondary-btn">Shop Now </button>
        </div>

        <div className="Shopping">
          <p>Also Avaiable On</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
      <img src="/images/fila.png" alt="flip-logo" />

      </div>
    </main>
  );
};
export default Herosection;
