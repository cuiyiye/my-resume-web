import Home from '../components/Home';
import Contact from '../components/Contact';

export default function Main() {
  return (
    <div className="container mx-auto p-4">
      <nav className="text-center space-x-4">
        <a href="#home" className="mx-2">Home</a>
        </nav>
        <nav>
        <a href="#resume" className="mx-2">Resume</a>
        </nav>
        <nav>
        <a href="#contact" className="mx-2">Contact</a>
      </nav>

      <div id="home">
        <Home />
      </div>

      <main className="space-y-8">
        <section>
          <h2 className="text-3xl font-semibold"><u>Education</u></h2>
          <table className="table-auto w-full mt-4 border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-2">Year</th>
                <th className="border border-gray-200 px-4 py-2">School Name</th>
                <th className="border border-gray-200 px-4 py-2">Major</th>
                <th className="border border-gray-200 px-4 py-2">Degree</th>
                <th className="border border-gray-200 px-4 py-2">Website</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">2011-2015</td>
                <td className="border border-gray-200 px-4 py-2">University of California, Irvine</td>
                <td className="border border-gray-200 px-4 py-2">Business of Economics</td>
                <td className="border border-gray-200 px-4 py-2">Bachelor</td>
                <td className="border border-gray-200 px-4 py-2"><a href="https://uci.edu/" className="text-blue-500">UCI</a></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">2023-present</td>
                <td className="border border-gray-200 px-4 py-2">Southern Alberta Institute of Technology</td>
                <td className="border border-gray-200 px-4 py-2">Software Development</td>
                <td className="border border-gray-200 px-4 py-2">Diploma</td>
                <td className="border border-gray-200 px-4 py-2"><a href="https://www.sait.ca/" className="text-blue-500">SAIT</a></td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-3xl font-semibold"><u>Work Experience</u></h2>
          <ul className="list-disc ml-5 mt-2">
            <li>2015-2017: Qianhai Funds Company</li>
          </ul>
          <p className="mt-2">As a product designer and an executive assistant, here are the specific works that I did in this company.</p>
          <ol className="list-decimal ml-5 mt-2">
            <li>Come up with fund production according to the recent market environment.</li>
            <li>Do general researches and write a data report.</li>
            <li>Discuss with team members.</li>
            <li>Prepare and upload all the materials to Asset Management Association.</li>
            <li>Handle some daily events for my director.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-3xl font-semibold"><u>Skills</u></h2>
          <p className="mt-2">I am good at Microsoft Word and PowerPoint.<br />I am good at organizing activities.<br />I am good at interaction.</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold"><u>Career Goals</u></h2>
          <p className="mt-2">I would like to work for a web design company. After getting the diploma degree and learning enough knowledge about web design, I want to have my own web design company in the future and I also design online games for game players.</p>
        </section>

        <div id="contact">
          <Contact />
        </div>
      </main>

      <footer className="text-center mt-8">
        <a href="#T1" className="text-blue-500">Back to Top</a>
      </footer>
    </div>
  );
}
