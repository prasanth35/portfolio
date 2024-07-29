import { Typography } from "@mui/material";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

const Skills = ({
  skills
}:any) => {
  return (
    <>
      {
        skills?.map((skill: any) =>
          <section key={skill?.header} className="technical-skills section" id="skills">
            <h2 className="section-title">{skill?.header}</h2>
            {
              skill?.content?.map((skillContent:any) => 
                <div key={skill?.label} className="gap-2">
                <Typography variant="body1" fontWeight={700}>{skillContent?.label}</Typography>
                <Typography variant="body1"  className="text-left text-wrap">{skillContent?.value}</Typography>
              </div>
              )
            }
          </section>
        )
      }
    </>
  );
};

const Skill = ({ skill }:any) => (
  <li className="skills__name">
    <span className="skills__circle" /> {skill}
  </li>
);


export default Skills