import {
  ContactContainer,
  ContactTextWrapper,
  PersonName,
} from "./ContactStyle";

const Contact = () => {
  return (
    <div id="contact">
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
            <a href="https://goldipl.github.io/Marcin-Programuje/">
              https://goldipl.github.io/Marcin-Programuje/
            </a>
          </p>
        </ContactTextWrapper>
      </ContactContainer>
    </div>
  );
};

export default Contact;
