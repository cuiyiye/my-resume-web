import Image from 'next/image';

const Home = () => {
  return (
    <header className="text-center my-8">
      <p id="T1"></p>
      <a href="#T1"></a>
      <figure>
        <Image src="/profile.jpg" alt="Profile Photo" width={150} height={190} className="rounded-full mx-auto" />
      </figure>
      <h1 className="text-4xl mt-4 font-bold">Cuiyi Ye</h1>
      <p className="mt-2">
        I am a student at SAIT, set to graduate in August with a major in software development. During my time at SAIT, I have learned various programming languages and technologies, including HTML, C++, Java, and Python. Additionally, I have mastered professional skills in database management, software engineering, and project management. Through my studies at SAIT, I have not only improved my technical skills but also developed teamwork and problem-solving abilities. I am passionate about software development and hope to continuously challenge myself in my future career, achieving both personal and professional growth.
      </p>
      <ul className="list-disc ml-5 mt-2">
        <a href="https://github.com/cuiyiye">Here is My GitHub</a>
      </ul>
    </header>
  );
};

export default Home;
