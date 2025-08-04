import React from "react";
import translations from "../utils/translations";
import { whatsappLink } from "../utils/constants";

interface Props {
  language: "en" | "es" | "it";
}

const ServicesOffered: React.FC<Props> = ({ language }) => {
  const t = translations[language] || translations["en"];

  return (
    <section className="services">
      <h2 className="section-header">
        {language === "en" ? "Our Services" : language === "es" ? "Nuestros Servicios" : "I""Nostri Servizi"}
      </h2>

<div className="services-container">
        {t.services.map((service, index) => (
          <div key={index} className="service-card">
            <div
              className="service-img"
              style={{ backgroundImage: url(${service.img}) }}
              aria-label={service.title}
            ></div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a className="boton_info" href={whatsappLink} target="_blank">
                {service.moreInfo}
              </a>

</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOffered;