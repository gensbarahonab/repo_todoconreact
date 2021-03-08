import imghome from '../../imgs/Atención.png';
function Home() {
  return (
    <section>
      <section class="home">
        <h1>Bienvenido!</h1>
      </section>
      <section class="conte">
          <p>Por el momento no se puede visualizar tanto contenido ya que el sitio aún continua en creación.</p>
          <section class="img">  
          <img src={imghome} alt="reparacion"/>
          </section>

      </section>

    </section>
  );
}

export default Home;