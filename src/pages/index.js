import React from 'react'
import { Helmet } from 'react-helmet'

import Inline from '../components/Inline'
import Container from '../components/Container'
import Section from '../components/Section'
import PythonLogo from '../components/PythonLogo'
import ApplyHere from '../components/ApplyHere'
import Teachers from '../components/Teachers'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import FacebookPixel from '../components/FacebookPixel'

import styles from './index.module.css'
import favicon from './favicon.ico'

import './index.css'

const IndexPage = () => (
  <React.Fragment>
    <Helmet>
      <link rel="icon" href={favicon} type="image/x-icon" />
      <title>Programming 101 with Python by HackBulgaria</title>
      <meta
        name="description"
        content="Programming 101 with Python by HackBulgaria. Starts on 25th of February, 2019, ends on 27th of May, 2019."
      />
      <meta property="og:url" content="https://www.hackbulgaria.com" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Programming 101 with Python 2019 by HackBulgaria."
      />
      <meta
        property="og:description"
        content="Programming 101 with Python by HackBulgaria. Starts on 25th of February, 2019, ends on 27th of May, 2019."
      />
      <meta
        property="og:image"
        content="https://hacksoft.s3.amazonaws.com/media/images/og_image.original.png"
      />
      <meta property="fb:app_id" content="1051225675085770" />
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
              rel="noopener noreferrer"
            >
              HackBulgaria's lecture hall
            </a>
          </li>
          <li>
            Price - <strong>free for students</strong>, who are not currently
            working.
          </li>
          <li>
            <ApplyHere />. Application ends on{' '}
            <string>15th of February.</string>
          </li>
        </ul>
      </Section>
      <Section>
        <h2>Course Program</h2>
        <p>
          The course will cover fundamental software development practices,
          using Python as a primary language.
        </p>

        <p>
          <strong>
            The course is perfect for people who are looking for their first job
            opportunity afterwards.
          </strong>
        </p>

        <p>The high-level agenda includes:</p>
        <ul className={styles.List}>
          <li>
            Learning <strong>Python</strong> as a programming language.
          </li>
          <li>
            Working with <strong>a Linux-based operating system.</strong>
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
              rel="noopener noreferrer"
            >
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
          <strong>This is not a beginners' course.</strong> The course requires
          basic understanding of:
        </p>

        <ul className={styles.List}>
          <li>How to work with computers.</li>
          <li>General programming principles.</li>
          <li>Data structures and algorithms.</li>
          <li>Object-oriented programming.</li>
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
        <h2>Partners</h2>
        <p>When our students succeed, so do we.</p>

        <p>
          We partner with companies which support the course and help our
          students to start their career.
        </p>

        <p>
          <strong>The partners for the 8th edition of the course are:</strong>
        </p>

        <Partners />
      </Section>

      <Section>
        <h2>Price and Apply</h2>
        <ul className={styles.List}>
          <li>
            The course is{' '}
            <strong>free for students who are not currently working.</strong>
          </li>
          <li>
            The course costs <strong>600 BGN with VAT</strong> for everyone
            else.
            <em>
              The course can be paid in two equal parts, at the start and the
              end of it.
            </em>
          </li>
        </ul>
      </Section>

      <Section>
        <h2>Application process</h2>
        <p>
          This course has an application process that will select{' '}
          <strong>25 students</strong> to participate.
        </p>

        <p>The application process is as follows:</p>
        <ul className={styles.List}>
          <li>
            You have to solve 2 programming problems,{' '}
            <a
              href="https://github.com/HackBulgaria/Programming-101-Python-2019/tree/master/Application"
              target="_blank"
              rel="noopener noreferrer"
            >
              located here
            </a>
          </li>
          <li>
            Next, we are going to conduct an online interview with you. We are
            going to ask technical and non-technical questions.
          </li>
          <li>
            Once the interviews are done, we are going to compile a short list
            of candidates and send them a special 3rd programming problem to
            solve.
          </li>
          <li>
            Next, we'll conduct a second online interview, to discuss the
            solution to the 3rd problem.
          </li>
          <li>
            In the end,{' '}
            <strong>
              we'll compile the final list of the 25 selected students
            </strong>{' '}
            for the course
          </li>
        </ul>
        <p>
          <ApplyHere />
        </p>

        <p>
          In case you have any questions, drop an email at{' '}
          <strong>radorado@hacksoft.io</strong>
        </p>
        <p>
          Or you can join us for a <strong>live Q&amp;A session</strong> on 4th
          of February, at 19:00.{' '}
          <a href="https://www.facebook.com/events/438207540051476/">
            More info here.
          </a>
        </p>
      </Section>
      <Footer />
    </Container>
    <FacebookPixel />
  </React.Fragment>
)

export default IndexPage
