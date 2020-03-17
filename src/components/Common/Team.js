import React, { Component } from 'react';

import TeamMember from '../Common/TeamItem';

import img1 from '../assets/img/team/1.jpg';
import img2 from '../assets/img/team/2.jpg';
import img3 from '../assets/img/team/3.jpg';
// src\components\assets\img\team\1.jpg

const teamMembers =[
  {image: img1,
  name: 'Kay Garland',
  jobTitle:'Lead Designer'
  },
  {image: img2,
    name: 'Larry Parker',
  jobTitle:'Lead Maketer'
  },
  {image: img3,
    name: 'Diana Peterson',
  jobTitle:'Lead Developer'
  },
];



class Team extends Component {
    render(){
        return (
            <section class="bg-light page-section" id="team">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 text-center">
                  <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                  <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
              </div>
              <div class="row">
                {teamMembers.map((member, index) => {
                  return <TeamMember {...member} key={index} />
                })}
            
              </div>
              <div class="row">
                <div class="col-lg-8 mx-auto text-center">
                  <p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                </div>
              </div>
            </div>
          </section> 
        )
    }
}

export default Team;