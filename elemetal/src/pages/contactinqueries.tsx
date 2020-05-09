/* tslint:disable */
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';
import PageSlidebar from '../components/PageSlidebar';
// import { loadReCaptcha, ReCaptcha } from 'react-recaptcha-google';
// import { SeeThrough } from 'react-see-through';
import '../carraway/glow/glow.scss';
import './archetype.scss';


export const ContactInqueries = (): JSX.Element => {

  return (
    <Layout>
      <div id="carraway">
      <PageSlidebar />
        <div id='page-wrap'>
          <div id='contactinqueries' className='contactinqueries'>
            <section>
            <p> Let's Talk Business... </p>

            <br/>
            <div id='glow' className='glow'> <p> <h1> Contact for Queries </h1> </p> </div>
            <form name='contact' method='post' data-netlify='true' data-netlify-recaptcha='true' action='mailto:yvevestal@gmail.com'>
            
              <div className='form-group'>
              <label>
                {"Name or Alias    "}
              <input type='text' className='firstName' id='firstName' />
              </label>
              </div>

              <div className='form-group'>
                <label> Select 
                  <select name='role[]' multiple>
                    <option value='leader'> Leader </option>
                    <option value='follower'> Follower </option>
                  </select> 
                </label>
              </div>

              <div className='form-group'>
              <label>
               {"Email     "}
              <input type='email' className='email' id='email' />
              </label>
              </div>

              <div className='form-group'>
              <label>
                {"Subject Line      "}
                <input type='text' className='subject' id='subject' />
              </label>
              </div>

              <div className='form-group'>
              <label>
               {"Content      "}
                <textarea className='content' name='message' id='content' rows={5} />
              </label>
              </div>
             <button type='submit'> <div className='glow' id='glow'> <p>  Send It </p> </div> </button>
            </form>
  
            </section>
          </div>
          <footer> Developer | Futurist | Designer </footer>
        </div>
      </div>
    </Layout>
  )
};

export default ContactInqueries;