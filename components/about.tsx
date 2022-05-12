import Job from "./job"

const About: React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
          <strong>I&apos;m DabAZ, a digital craftsman based in China</strong>. <br />I want to solve real-life problems with code. <br />Currently, I&apos;m working on <strong>ethical hacking</strong> and <strong>UI designing</strong>. <br />If you would like to know more or hire me, feel free to <a href="mailto:dieboldhan123@gmail.com" className="font-bold hover:underline duration-300">contact me</a>.
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>My Jobs</h2>
        <div className="mt-2 font-bold">&ldquo;Digital Craftsman&rdquo;</div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
          <Job id="ethical-hacker" name="Ethical Hacker" socialId="@DabAZ" link="https://hackerone.com/dabaz" />
          <Job id="musician" name="Musician" socialId="@DabAZ" link="https://open.spotify.com/artist/1KmtWPNNBJw4spLrQkPrXQ" />
          <Job id="designer" name="Designer" socialId="@DabAZ" link="http://dabazofficial.com" />
          <Job id="developer" name="Developer" socialId="@dabaz-official" link="https://github.com/dabaz-official" />
        </div>
      </div>
    </section>
  )
}

export default About
