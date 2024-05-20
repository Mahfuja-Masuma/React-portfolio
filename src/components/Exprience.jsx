
import html from '../assets/portfolio/html.png'
import css from '../assets/portfolio/social.png'
import javascript from '../assets/portfolio/js.png'
import react from '../assets/portfolio/react.png'
import tailwind from '../assets/portfolio/tailwind.png'
import github from '../assets/portfolio/github.png'
import sass from '../assets/portfolio/sass.png'
import ExpressJs from '../assets/portfolio/express-js.png'
import firebase from '../assets/portfolio/firebase.png'
import mongoDb from '../assets/portfolio/mongoDb.png'
import nextJs from '../assets/portfolio/nextJs.png'
import bootstrap from '../assets/portfolio/bootstrap.png'

const Exprience = () => {
  const exprience = [
    {
      id:1,
      src: html,
      title:'HTML',
      style: 'shadow-orange-500'
    },
    {
      id:2,
      src: css,
      title:'CSS',
      style: 'shadow-blue-500'
    },
    {
      id:3,
      src: javascript,
      title:'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id:4,
      src: tailwind,
      title:'Tailwind',
      style: 'shadow-sky-400'
    },
    {
      id:5,
      src: react,
      title:'React',
      style: 'shadow-blue-600'
    },
    {
      id:6,
      src: github,
      title:'GitHub',
      style: 'shadow-gray-400'
    },
    {
      id:7,
      src: sass,
      title:'Sass',
      style: 'shadow-pink-500'
    },
    {
      id:8,
      src: ExpressJs,
      title:'Express Js',
      style: 'shadow-orange-800'
    },
    {
      id:9,
      src: firebase,
      title:'Firebase',
      style: 'shadow-orange-600'
    },
    {
      id:10,
      src: mongoDb,
      title:'Mongo Db',
      style: 'shadow-green-600'
    },
    {
      id:11,
      src: nextJs,
      title:'Next JS',
      style: 'shadow-white'
    },
    {
      id:12,
      src: bootstrap,
      title:'Bootstrap',
      style: 'shadow-blue-600'
    },
  ]
  return (
    <div  name="exprience"
      className="bg-gradient-to-b from-gray-800 to-black  w-full  md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2 ">Exprience</p>
            <p className="py-6">These are the technologies I've worked with</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

            {
              exprience.map(({id,src,title,style})=> (

            <div key={id} className={`shadow-md hover:scale-105 delay-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt="exprience" className="w-20 mx-auto" />
           
              <p className="mt-4">{title}</p>
            </div>
              ))}
          </div>
        </div>
    </div>
  )
}

export default Exprience