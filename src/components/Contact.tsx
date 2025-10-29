const Contact = () => {
  return (
    <div className="container mx-auto py-10 px-4 font-serif max-w-3xl">
      <div className="text-center ">
        <h1 className="text-4xl md:text-5xl mb-8">Entre em contato</h1>
        <p className="text-lg text-gray-700  mx-auto mb-8">
          Para reservas, eventos especiais ou qualquer outra consulta, entre em
          contato conosco. Estamos ansiosos para ouvir de você e tornar sua
          experiência no II Giardino memorável.
        </p>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.996112629247!2d-48.51700262454683!3d-27.56277237626491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952738ed8a5384c1%3A0xa232cb7043277567!2sJardim%20Bot%C3%A2nico%20de%20Florian%C3%B3polis!5e0!3m2!1spt-BR!2sbr!4v1719434643036!5m2!1spt-BR!2sbr"
            width="768"
            height="350"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Restaurant Location"
            className="rounded-xl"
          ></iframe>
        </div>
      </div>
      <div>
        <h2 className="text-2xl mt-8 mb-8">Informações de Contato</h2>
        <div className="text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="border-b-2 border-rose-200 pb-2">
            <h2 className="text-xl text-gray-900 mb-2">Endereço</h2>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rod.+Admar+Gonzaga%2C+742-782+-+Itacorubi%2C+Florian%C3%B3polis+-+SC"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-600 transition-colors"
            >
              Rod. Admar Gonzaga, 742-782 - Itacorubi, Florianópolis - SC
            </a>
          </div>
          <div className="border-b-2 border-rose-200 pb-2">
            <h2 className="text-xl text-gray-900 mb-2">Telefone</h2>
            <a href="tel:+5599999999999" className="hover:text-lime-600 transition-colors">
              +55 (99) 99999-9999
            </a>
          </div>
          <div className="border-b-2 border-rose-200 pb-2">
            <h2 className="text-xl text-gray-900 mb-2">E-mail</h2>
            <a href="mailto:reservas@iigiardino.br" className="hover:text-lime-600 transition-colors">
              reservas@iigiardino.br
            </a>
          </div>
          <div className="border-b-2 border-rose-200 pb-2">
            <h2 className="text-xl text-gray-900 mb-2">Horário de Atendimento</h2>
            <p className="hover:text-lime-600 transition-colors">
              18:00 às 22:00
              <br />
              Terça a Domingo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
