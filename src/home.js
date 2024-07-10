import React, { useEffect } from 'react';
import './home.css';
import homeIcon from './assets/home.svg';
import bookIcon from './assets/Book.svg';
import communityIcon from './assets/community.svg';
import backgroundImage from './assets/Background.svg';
import helpIcon from './assets/help.svg';
import searchIcon from './assets/search.svg';
import profileIcon from './assets/profile.svg';
import settingsIcon from './assets/settings.svg';
import bellIcon from './assets/bell.svg';

const Home = () => {
  useEffect(() => {
    const search = () => {
      const searchQuery = document.querySelector('.type-here').innerText;
      if (searchQuery.trim() !== '') {
        console.log(`Searching for: ${searchQuery}`);
      }
    };

    const searchIcon = document.querySelector('.rectangle-before-profile img');
    searchIcon.addEventListener('click', search);

    return () => {
      searchIcon.removeEventListener('click', search);
    };
  }, []);
  const navOptions = [{
    icon: homeIcon,
    name: 'Home',
    id : 1
    },{
      icon: bookIcon,
      name: 'Courses',
      id:2
    }, {
      icon : communityIcon,
      name:"Community",
      id :3
    } ]
  return (
    <div className="App">
      <div className="blurred-image"></div>
      <div className="rectangle">
        <div className="title">xKill</div>
        <div className="line"></div>
        <div id="nav-con">
        {
          navOptions.map((option) => {
            return (
              <div className="home-container" key={option.id}>
                <div className="icon-box">
                  <img src={option.icon} alt={option.name} />
                </div>
                <div className="home-text">{option.name}</div>
            </div>
            )
          })
        }
        </div>
        
        <div className="background-image">
          <img src={backgroundImage} alt="Background Image" />
          <div className="help-icon">
            <img src={helpIcon} alt="Help Icon" />
          </div>
          <div className="help-text">Need Help?</div>
          <div className="contact-text">Please contact us!</div>
          <button className="contact-button">CONTACT</button>
        </div>
      </div>
      <div className="homepage-text">Homepage</div>
      <div className="header-icons">
        <div className="rectangle-before-profile">
          <img src={searchIcon} alt="Search Icon" />
          <span className="type-here">Type here...</span>
        </div>
        <a href="https://signin.in" className="signin">
          <img src={profileIcon} alt="Lock Icon" />
          Sign In
        </a>
        <img src={settingsIcon} className="svg-icon" alt="Default Icon" onError={() => console.error('Failed to load d.png')} />
        <img src={bellIcon} className="svg-icon-set" alt="Set Icon" onError={() => console.error('Failed to load s.png')} />
      </div>

      <div className="card">
        <div className="card-body">
          <p className="welcome">Welcome back,</p>
          <h2 className="name">Beny Dishon</h2>
          <p className="greeting">
            <span>Glad to see you again! </span>
            <span>Start your learning journey! </span>
          </p>
          <a href="https://www.youtube.com/watch?v=bnC-kuL_CYw&t=178s" className="startLearning">
            Start learning
          </a>
          <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
            <path d="M7.05457 2.84622L10.7108 6.50247L7.05457 10.1587" stroke="white" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.203 6.50275H2.78894" stroke="white" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="container">
        <div className="header">
          <h1>Trending</h1>
          <div className="icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
              <rect opacity="0.08" x="-0.00012207" width="37" height="37" rx="12" fill="white" />
            </svg>
            <div className="small-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M3.74988 14.5312H1.40613V8.90625H3.74988V14.5312ZM10.3124 14.5312H7.96863V6.09375H10.3124V14.5312ZM13.5936 14.5312H11.2499V2.8125H13.5936V14.5312ZM7.03113 14.5312H4.68738V0.46875H7.03113V14.5312Z" fill="#0075FF" />
              </svg>
            </div>
          </div>
        </div>
        <p className="subtitle">Explore popular courses</p>
        <div className="course-list">
          <div className="course-item">
            <h2 className="course-title">Intro to AI Engineering</h2>
            <p>A crash course on building web apps powered by</p>
            <p>generative AI.</p>
          </div>
          <div className="course-item">
            <h2 className="course-title">React</h2>
            <p>The ultimate React 101 - the perfect starting point for</p>
            <p>any React beginner.</p>
          </div>
          <div className="course-item">
            <h2 className="course-title">Intro to UI Design Fundamentals</h2>
            <p>This tutorial course will teach you to design user</p>
            <p>interfaces that both look good and work well.</p>
          </div>
        </div>
      </div>

      <div className="third-card">
        <div className="community-projects-heading">Community Projects</div>
        <div className="card-1">
          <div className="top">Movie Watchlist</div>
          <div className="sub">An interactive app that is perfect for training your async JavaScript skills</div>
        </div>
        <div className="card-2">
          <div className="top">Invoice Generator</div>
          <div className="sub">Build an app that let's you create invoices based on line items.</div>
        </div>
        <div className="card-3">
          <div className="top">Movie Watchlist</div>
          <div className="sub">An interactive app that is perfect for training your async JavaScript skills</div>
        </div>
        <div className="custom-button"></div>
        <div className="svg-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clipPath="url(#clip0)">
              <path d="M5.99988 10C4.89988 10 3.99988 10.9 3.99988 12C3.99988 13.1 4.89988 14 5.99988 14C7.09988 14 7.99988 13.1 7.99988 12C7.99988 10.9 7.09988 10 5.99988 10ZM17.9999 10C16.8999 10 15.9999 10.9 15.9999 12C15.9999 13.1 16.8999 14 17.9999 14C19.0999 14 19.9999 13.1 19.9999 12C19.9999 10.9 19.0999 10 17.9999 10ZM11.9999 10C10.8999 10 9.99988 10.9 9.99988 12C9.99988 13.1 10.8999 14 11.9999 14C13.0999 14 13.9999 13.1 13.9999 12C13.9999 10.9 13.0999 10 11.9999 10Z" fill="#7551FF" />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="svg-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="50" viewBox="0 0 193 206" fill="none">
            <path d="M188.877 59.1477C192.111 57.4964 193.412 53.5237 191.557 50.4019C183.276 36.4583 171.801 24.6389 158.041 15.9396C142.425 6.06686 124.44 0.576164 105.973 0.0429122C87.5052 -0.490339 69.2342 3.95349 53.0744 12.9087C36.9146 21.8639 23.4609 35.0008 14.1233 50.9427C4.78574 66.8847 -0.0920266 85.0447 0.00118894 103.52C0.0944045 121.995 5.15517 140.105 14.6531 155.951C24.1511 171.798 37.7366 184.799 53.986 193.59C68.304 201.337 84.2258 205.565 100.438 205.968C104.068 206.058 106.897 202.981 106.755 199.353C106.614 195.724 103.555 192.923 99.9264 192.799C86.0735 192.325 72.4861 188.65 60.2429 182.026C46.0679 174.357 34.2167 163.016 25.9312 149.192C17.6457 135.368 13.231 119.57 13.1496 103.453C13.0683 87.3368 17.3234 71.495 25.469 57.5882C33.6146 43.6814 45.3508 32.2215 59.4477 24.4094C73.5446 16.5974 89.4832 12.7209 105.593 13.1861C121.703 13.6512 137.392 18.441 151.014 27.0534C162.78 34.4921 172.631 44.546 179.821 56.3968C181.704 59.5011 185.643 60.7989 188.877 59.1477Z" fill="url(#paint0_linear_1_199)" />
            <defs>
              <linearGradient id="paint0_linear_1_199" x1="103" y1="0" x2="103" y2="190" gradientUnits="userSpaceOnUse">
                <stop stopColor="#05CD99" />
                <stop offset="1" stopColor="#05CD99" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="text-box">100+</div>
        <div className="unique-text">Unique</div>
        <div className="community-projects-text">Community Projects</div>
      </div>
    </div>
  );
};

export default Home;
