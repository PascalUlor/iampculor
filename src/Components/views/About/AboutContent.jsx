import React from "react";
import ContentLayout from "../../~reusables/components/ContentLayout";
import MySection from "./MySection";
import aboutpascal from "../../~reusables/assets/images/mypic.png";
import ContactForm from "./ContactForm";

const AboutContent = () => {
  return (
    <ContentLayout>
      <MySection
        image={aboutpascal}
        imh={"50"}
        title={"BIO"}
        line1={`I am Pascal Chukwuemeka Ulor, a music lover, an
              adventurer and yes I'm a total geek.
              All my life I've had a flair for puzzles and this urged me to major in Mathematcis
              at the University of Ibadan Nigeria. My passion for programming was ingnited during my final year
              project where I had to analyse data using "Matlab" and "R", this made me realise that to efficient solve problems in my 
              field as a mathematician I needed some coding skills.`}
        line2={`Since graduating college I've been up and about in the tech industry. I've  lectured people in programming,
              worked and freelanced as an SEO specialist and also as a data analyst.
              Most recently I worked with "Andela" as a Software Engineer and I'm currently 
              running a Full-Stack Web Development and Computer Science program with Lambda School.`}
        shortdeet={"Technologies I work with"}
        techlist={[
          { name: <i className="icon-javascript-alt" />, link: "any" },
          { name: <i className="icon-nodejs" />, link: "any" },
          { name: <i className="icon-reactjs" />, link: "any" },
          { name: <i className="icon-jquery" />, link: "any" },
          { name: <i className="icon-python" />, link: "any" },
          {
            name: (
              <img
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTg3Ljc5MTY3LDE2MS44MjY5MmwtNjIuNzA4MzMsLTM3LjA1NTI1di03My45Nmw2Mi43MDgzMywtMzcuMDU1MjVsNjIuNzA4MzMsMzcuMDU1MjV2NzMuOTZ6TTMyLjI1LDEyMC42ODY2N2w1NS41NDE2NywzMi44MTk3NWw1NS41NDE2NywtMzIuODE5NzV2LTY1Ljc5bC01NS41NDE2NywtMzIuODE5NzVsLTU1LjU0MTY3LDMyLjgxOTc1eiI+PC9wYXRoPjxjaXJjbGUgY3g9IjI0LjUiIGN5PSI1LjUiIHRyYW5zZm9ybT0ic2NhbGUoMy41ODMzMywzLjU4MzMzKSIgcj0iMy41Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSIyNC41IiBjeT0iNDMuNSIgdHJhbnNmb3JtPSJzY2FsZSgzLjU4MzMzLDMuNTgzMzMpIiByPSIzLjUiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjguNSIgY3k9IjMzLjUiIHRyYW5zZm9ybT0ic2NhbGUoMy41ODMzMywzLjU4MzMzKSIgcj0iMy41Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSI0MC41IiBjeT0iMzMuNSIgdHJhbnNmb3JtPSJzY2FsZSgzLjU4MzMzLDMuNTgzMzMpIiByPSIzLjUiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjguNSIgY3k9IjE1LjUiIHRyYW5zZm9ybT0ic2NhbGUoMy41ODMzMywzLjU4MzMzKSIgcj0iMy41Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSI0MC41IiBjeT0iMTUuNSIgdHJhbnNmb3JtPSJzY2FsZSgzLjU4MzMzLDMuNTgzMzMpIiByPSIzLjUiPjwvY2lyY2xlPjxwYXRoIGQ9Ik0xNTMuMDgsMTI1LjQxNjY3aC0xMzAuNTc2NjdsNjUuMjg4MzMsLTExNC43NDU1ek0zNC44MywxMTguMjVoMTA1LjkyMzMzbC01Mi45NjE2NywtOTMuMDg3ODN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
                height="30"
              />
              // <img src="https://img.icons8.com/color/48/000000/graphql.png" height='30' />
            ),
            link: "any"
          },

          { name: <i className="icon-postgres" />, link: "any" },
          { name: <i className="icon-mongodb" />, link: "any" },
          { name: <i className="icon-mysql-alt" />, link: "any" },
          { name: <i className="icon-d3" />, link: "any" },

          { name: <i className="icon-git" />, link: "any" },
          { name: <i className="icon-azure" />, link: "any" },
          { name: <i className="icon-heroku" />, link: "any" },
          { name: <i className="icon-bootstrap" />, link: "any" },
          { name: <i className="icon-wordpress" />, link: "any" },
          { name: <i className="icon-svg" />, link: "any" }
        ]}
        path={"/"}
      />
      <ContactForm />
    </ContentLayout>
  );
};

export default AboutContent;
