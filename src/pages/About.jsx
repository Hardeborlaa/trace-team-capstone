import styled from "styled-components";
import GithubIcon from "../icons/logo-github.svg";

const About = () => {
  return (
    <div>
      <Heading>
        <h1>About <b>TRACE</b></h1>
        <br/>
        <p>This project was built to learn the use of Context API and React.</p>
        <br />
        <a className="btn" href="#">
          <img src={GithubIcon} alt="" />
          View on Github
        </a>
      </Heading>
    </div>
  );
};

const Heading = styled.div`
  margin-top: 8rem;
  text-align: center;
  display: block;
  a:nth-of-type(1) {
    border-bottom: violet solid 2px;
  }
`;

export default About;
