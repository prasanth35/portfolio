import BoxIcon from './BoxIcon';

const Profile = ({
  name,
  role,
  location,
  email,
  telephone,
  image,
  social,
}:any) => {
  return (
    <section className="home section" id="home">
      {/* <Options /> */}
      <div className="home__container bd-grid">
        <div className="home__data bd-grid">
          {/* <img src={image} alt="profile_image" className="home__img no-print" /> */}
          <h1 className="home__title">{name}</h1>
          <h3 className="home__profession">{role}</h3>
          <span className="home__information no-print">
            <i className="bx bx-map home__icon" /> {location}
          </span>
        </div>
        <div className='home__contact bd-grid'>
          <span className="social__link print">
            <i className="bx bx-map social__icon" /> {location}
          </span>
            { social.map((social:any) => <BoxIcon key={social?.name} {...social} />) }
        </div>
      </div>
    </section>
  );
};

export default Profile
