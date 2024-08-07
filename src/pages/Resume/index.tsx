import Academic from '../../components/modules/Resume/Academic';
import Profile from '../../components/modules/Resume/Profile';
import Projects from '../../components/modules/Resume/Projects';
import Skills from '../../components/modules/Resume/Skills';
import Works from '../../components/modules/Resume/Works';
import { Data as dataSchema } from '../../db/Portfolio/Data';

export const Resume = () => {
  const query = '(min-width: 968px)';

  const { profile, aboutMe, skills, socialMedia, experience } = dataSchema;
  return (
    <>
      <main className='bd-container  bg-white'>
        <div className='resume p-4' >
          <div className='resume__left'>
            <Profile {...profile} {...socialMedia} />
            {/* <AboutMe {...aboutMe} /> */}
            <Skills skills={skills} />
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
