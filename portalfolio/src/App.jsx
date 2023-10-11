import Home from './components/Home'
import NavBars from './components/NavBars'
import About from './components/About'
import Contact from './components/Contact'
import Testimonials from './components/Testimonials'


function App() {


  

  return (
    <main className=' xl:bg-gradient-to-r from-indigo-500  h-screen overflow-visible   md:space-y-10   '>
      <div className='flex flex-row items-end justify-end  relative top-7  pb-11 '>
       <NavBars />
       </div>
      <section className='  flex items-center xl:mx-auto md:mx-auto sm:mx-2 relative top-2 pb-10'>
       
        <article className=' bg-slate-50 w-fit xl:mx-auto md:mx-auto mx-auto rounded-[1rem] min-h-2/3 xl:my-auto container overflow-y-scroll  xl:hover:shadow-xl shadow-xl pb-10 '>
            <Home />
        
        </article>
        
      </section> 
      <div className=' flex flex-col sm:pt-20 md:pt-20 xl:pt-96'>
      
      <div >  
      

<About  />
</div> 
<div>
<Testimonials />
</div>
<div className=' mx-3 rounded-sm  pb-10' >

<Contact />
</div>
</div>
    </main>
  )
}

export default App
