// import React, { Component } from 'react';
import React from 'react';
import Bio from './Bio';
import './profile.css'
import Skills from './Skills';
import Social from './Social';

const Profile = () => {
    let me = {
        name: "shahjalal rafi",
        title: "i am full stack javascript developer",
        skillA: 'javascript',          
        skillB: 'C++',          
        skillC: 'paython',
    }
    let tasib = {
        name: "Ohidul alom tasib",
        title: "i am Backend developer",
        skillA: 'java',          
        skillB: 'C++',          
        skillC: 'php',
    }
    return (
        <div>
            <div className='contain'>
                  <Bio name={me.name} title={me.title}></Bio>
                  <Skills skillA={me.skillA} skillB={me.skillB} skillC = {me.skillC}></Skills>
                  <Social></Social>
            </div>
            <Bio name={tasib.name} title={tasib.title}></Bio>
        </div>
    );
};

export default Profile;