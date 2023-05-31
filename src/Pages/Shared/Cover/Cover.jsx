import { Parallax } from 'react-parallax';

const Cover = ({img,title}) => {
    console.log(img);
    return (
        <Parallax
        blur={{ min: -100, max: 100 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
             <div className="hero h-[700px" >
        <img src={img} alt="" />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5 uppercase">would you like to try a dish?</p>
           
          </div>
        </div>
      </div>
      
    </Parallax>
   
    );
};

export default Cover;