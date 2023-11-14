
import styled from "styled-components";

const StyledFooter = styled.footer`
  background: #eeeeee;

  color: white;
  text-align: center;
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  .span {
    color: #000000;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <span className="span"> MKS Sistemas © Todos os direitos reservados</span>
    </StyledFooter>
  );
};

export default Footer;
