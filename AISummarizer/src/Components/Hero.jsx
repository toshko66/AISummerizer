import { logo } from '../assets';

const Hero = () => {
  return (
   <header className='w-full flex justify-center 
   items-center flex-col'>
    <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="sumz-logo" className='w-28 object-contain' />

        <button type='button'
    onClick={()=>window.open('https://github.com/toshko66/AISummerizer.git')}
    className='black_btn'
    >
        Github
    </button>
    </nav>
   <h1 className='head_text'>
    Summerize Articles with <br className='max-md:hidden'/>
    <span className='orange_gradient'>
    OpenAI GPT-4
    </span>
   </h1>
   <h2 className='desc'>
    Simplify your reading with Summerize, an open-source article summerizer that transforms lenghty articles ninto clear and concise summeries
   </h2>
   
   </header>
  )
}

export default Hero