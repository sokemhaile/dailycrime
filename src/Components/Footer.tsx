import Slider from "./Slider"

const Footer = () => {
  return (
    <div>
      <Slider />
      <div className="py-7 font-Canopee text-2xl  flex flex-row justify-between px-6 ">
        <a target="_blank" href="https://sokemhailee.vercel.app">
          sokem ©
        </a>

        <div className=" flex gap-2 ">
          <a target="_blank" href="https://x.com/sokem832">
            Twitter
          </a>
          <span>•</span>
          <a target="_blank" href="https://github.com/sokemhaile">
            Github
          </a>
          <span>•</span>
          <a target="_blank" href="https://www.linkedin.com/in/sokemhaile/">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
