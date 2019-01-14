import React from 'react';
import {Helmet} from 'react-helmet';

import Inline from '../components/Inline';
import Container from '../components/Container';
import Section from '../components/Section';
import PythonLogo from '../components/PythonLogo';
import ApplyHere from '../components/ApplyHere';
import Teachers from '../components/Teachers';
import Footer from '../components/Footer';

import styles from './index.module.css';
import favicon from './favicon.ico';

import './index.css';

const IndexPage = () => (
  <React.Fragment>
    <Helmet>
      <link rel="icon" href={favicon} type="image/x-icon" />
      <title>Programming 101 with Python by HackBulgaria</title>
      <meta
        name="description"
        content="Course Programming 101 with Python by HackBulgaria. Starts on 25th of February, 2019, ends on 27th of May, 2019."
      />
    </Helmet>

    <Container>
      <h1 className={styles.Header}>
        <PythonLogo />
        Programming 101 with Python - Spring 2019
        <PythonLogo />
      </h1>
      <Section>
        <h2>Course Info</h2>
        <ul className={styles.List}>
          <li>
            <strong>Starts on 25th of February, ends on 27th of May.</strong>
          </li>
          <li>
            <strong>
              Monday, Wednesday and every 2nd week - Friday, from 17:00 to
              21:00.
            </strong>
          </li>
          <li>
            Happening in{' '}
            <a
              href="https://www.google.com/maps/place/Hack+Bulgaria/@42.6477396,23.3825581,17z/data=!3m1!4b1!4m5!3m4!1s0x40aa86ed287d5e33:0x315f162015dedaa3!8m2!3d42.6477396!4d23.3847468"
              target="_blank"
              rel="noopener noreferrer">
              HackBulgaria's lecture hall
            </a>
          </li>
          <li>
            Price - <strong>free for students</strong>, who are not currently working.
          </li>
          <li>
            <ApplyHere />
          </li>
        </ul>
      </Section>
      <Section>
        <h2>Course Program</h2>
        <p>
          The course will cover fundamental software development practices,
          using Python as primary language.
        </p>

        <p>
          <strong>
            The course is perfect for people who are looking for their first job
            opportunity afterwards.
          </strong>
        </p>

        <p>The high level agenda includes:</p>
        <ul className={styles.List}>
          <li>
            Learning <strong>Python</strong> as a programming language.
          </li>
          <li>
            Working with <strong>Linux-based operating system.</strong>
          </li>
          <li>Learning how to unit test our programs.</li>
          <li>Working with relational databases and SQL. Working with ORMs.</li>
          <li>
            Learning how to use <Inline>git</Inline> and GitHub.
          </li>
          <li>Working in teams.</li>
          <li>Implementing client-server applications.</li>
          <li>
            Learning how applications can communicate - protocols and formats.
            JSON, HTTP, messages queues.
          </li>
          <li>
            Learning how to secure our applications from common vulnerabilities.
          </li>
        </ul>

        <p>
          <strong>
            Everything related to the course is going to be uploaded to this{' '}
            <a
              href="https://github.com/HackBulgaria/Programming-101-Python-2019"
              target="_blank"
              rel="noopener noreferrer">
              GitHub repository.
            </a>
          </strong>
        </p>
      </Section>
      <Section>
        <h2>Course Prerequisites</h2>
        <p>
          <strong>
            The course doesn't assume or require any existing Python knowledge.
          </strong>
        </p>

        <p>
          <strong>This is not a beginners course.</strong> The course requires
          basic understanding of:
        </p>

        <ul className={styles.List}>
          <li>How to work with computers.</li>
          <li>General programming principles.</li>
          <li>Data structures and algorithms.</li>
          <li>Object oriented programming.</li>
        </ul>

        <p>
          The course is going to include a lot of coding practices,{' '}
          <strong>so a laptop is required.</strong>
        </p>
      </Section>
      <Section>
        <h2>Course Teachers</h2>
        <Teachers />
      </Section>
      <Section>
        <h2>Price and Apply</h2>
        <p>
          <strong>
            The course is free for students who are not currently working.
          </strong>
        </p>

        <p>
          <strong>
            The course costs 600 BGN with VAT for everyone who is currently
            working.
          </strong>
        </p>

        <p>
          <ApplyHere />
        </p>

        <p>
          In case you have any questions, drop an email at{' '}
          <strong>radorado@hacksoft.io</strong>
        </p>
      </Section>
      <Footer />
    </Container>
  </React.Fragment>
);

export default IndexPage;
