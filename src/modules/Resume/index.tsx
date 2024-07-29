import Profile  from "./Components/Profile";
import Academic  from "./Components/Academic";
import Skills from "./Components/Skills";
import Works  from "./Components/Works";
import AboutMe  from "./Components/AboutMe";

import { Data as dataSchema } from '../../Lib/Schemas/Data.js';
import Projects  from "./Components/Projects";

export const Resume = () => {
  const query = '(min-width: 968px)';

  const { profile, aboutMe, skills, socialMedia, experience } = dataSchema;
  return (
    <>
      <main className='bd-container bg-white p-2  rounded-md sm:p-0 '>
        <div className='resume' >
          <div className='resume__left'>
            <Profile {...profile} {...socialMedia}/>
            {/* <AboutMe {...aboutMe} /> */}
            <Skills skills={skills}  />
          </div>
          <div className='resume__right'>
            <Works {...experience} />
            <Projects {...experience} />
            <Academic {...experience} />
          </div>
        </div>
      </main>
    </>
  );
};
