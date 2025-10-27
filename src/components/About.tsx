import about from "../assets/images/About.png";

const About = () => {
  return (
    <main>
      <section>
        <div className="container mx-auto flex flex-col items-center">
          <img src={about} alt="About" className="w-full h-full mt-8" />
          <div className="flex flex-col gap-y-4 mt-4 pl-2">
            <p>
              No coração da cidade, Il Giardino nasceu de um sonho compartilhado
              por dois amigos de infância, Marco e Sofia. Unidos pela paixão
              pela autêntica culinária italiana e pelo desejo de criar um espaço
              onde a tradição se encontra com a inovação, eles embarcaram nesta
              jornada em 2018.
            </p>
            <p>
              Inspirados pelas memórias de família, onde a cozinha era o centro
              de reuniões calorosas e refeições saborosas, Marco e Sofia
              imaginaram um restaurante que evocasse a mesma sensação de
              conforto e alegria. Il Giardino, que significa 'O Jardim' em
              italiano, reflete essa visão: um lugar acolhedor, repleto de
              aromas convidativos e sabores que contam histórias.
            </p>
            <p>
              A filosofia culinária do Il Giardino é simples: ingredientes
              frescos e sazonais, preparados com técnicas tradicionais e um
              toque de criatividade. Nossa equipe de chefs talentosos, liderada
              por Marco, seleciona cuidadosamente os melhores produtos locais e
              importados da Itália, garantindo a qualidade e o sabor autêntico
              de cada prato.
            </p>
            <p>
              No Il Giardino, acreditamos que uma refeição é mais do que apenas
              nutrir o corpo; é uma experiência que envolve todos os sentidos.
              Do ambiente elegante e acolhedor ao atendimento atencioso e aos
              pratos cuidadosamente elaborados, cada detalhe é pensado para
              proporcionar momentos inesquecíveis aos nossos clientes.
            </p>
            <p>
              Convidamos você a se juntar a nós no Il Giardino e a descobrir a
              magia da culinária italiana em sua forma mais pura e apaixonada.
              Seja para um jantar romântico, uma celebração especial ou um
              encontro casual com amigos, estamos prontos para recebê-lo de
              braços abertos e paladares curiosos.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
