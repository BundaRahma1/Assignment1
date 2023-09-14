import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello there! I'm a multifaceted individual with a passion for technology, fitness, and the performing arts. You can call me a bit of a renaissance man in the making.

I'm currently immersed in the world of Information Technology as an enthusiastic student. My fascination with all things tech started at a young age, and I've been exploring the digital realm ever since. Whether it's coding, networking, or troubleshooting, I thrive on the challenges that IT presents. I'm the go-to person among my friends and family for any tech-related questions, and I love staying up-to-date with the latest trends and innovations in the field.

Outside of the digital domain, you'll often find me in the gym, lifting weights and pushing my physical limits. Fitness is not just a hobby; it's a lifestyle. I believe in the power of discipline and hard work to sculpt both body and mind. The gym is my sanctuary, where I strive for constant improvement and personal growth. It's also a great way to balance out the sedentary nature of IT studies.

But I'm not all bytes and barbells; I have a creative side too. I'm actively pursuing a career in acting. The stage, whether it's in a theater or in front of a camera, is where I feel truly alive. It's a space where I can express myself, inhabit different characters, and tell compelling stories. Acting is a challenge that complements my IT studies and fitness journey perfectly—it's all about understanding human behavior, emotions, and the intricacies of communication.

So, if you're looking for someone who's tech-savvy, physically fit, and has a knack for captivating performances, you've found your guy. I'm always excited to connect with people who share my interests or those who want to explore the diverse worlds I'm a part of. Feel free to reach out, whether it's for tech advice, workout tips, or to chat about the latest movie or play. Let's embark on this journey together!</p>
        <p>
          
        </p>
      </section>  
    </Layout>
  );
}