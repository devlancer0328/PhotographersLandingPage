import {
  ContactContainer,
  ContactTextWrapper,
  PersonName,
} from "./ContactStyle";

const Contact = () => {
  return (
    <div id="contact" data-aos="fade-left">
      <ContactContainer>
        <h1>Kontakt</h1>
        <ContactTextWrapper>
          <PersonName>Marcin Godlewski</PersonName>
          <p>Web Developer</p>
          <p>
            GitHub:{" "}
            <a href="https://github.com/goldipl">https://github.com/goldipl</a>
          </p>
          <p>
            Website:{" "}
            <a href="https://goldipl.github.io/vuejs-tailwindcss-portfolio/#/">
              https://goldipl.github.io/vuejs-tailwindcss-portfolio/#/
            </a>
          </p>
        </ContactTextWrapper>
      </ContactContainer>
    </div>
  );
};

export default Contact;
