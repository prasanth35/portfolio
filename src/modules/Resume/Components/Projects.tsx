import Description from "./Description";

const Projects = ({ projects }:any) => {
  return (
    <section className="projects-experience section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="experience__container bd-grid">
        {projects?.map((projects:any) => (
          <Project key={projects.company} {...projects} />
        ))}
      </div>
    </section>
  );
};

const Project = ({ name, company, period, description }:any) => {
  return (
    <div className="experience__content">
      <div className="experience__time">
        <span className="experience__rounder"></span>
        <span className="experience__line"></span>
      </div>
      <div className="experience__data bd-grid">
        <h3 className="experience__title">
          {name} - {company}
        </h3>
        <span className="experience__project">{period}</span>
        {description.map((desc: any, i: any) => <Description key={i} desc={desc} />)}
      </div>
    </div>
  );
};

export default Projects