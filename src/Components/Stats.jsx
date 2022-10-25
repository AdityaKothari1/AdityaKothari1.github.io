import React from "react";

const Stats = () => {
  return (
    <>
                        <div className='sm:text-center pb-8 pl-4 '>
                              <p className='text-4xl font-bold inline  text-center text-gray-100'>My Stats  </p>
                          </div>
    <div >
      <div class="max-w-7xl px-4 sm:px-6 lg:px-8"   style={{margin:"auto",width:"fit-content" }}>
        <a href="https://github.com/AdityaKothari1">

          <img
             align="center"
            src="https://github-readme-streak-stats.herokuapp.com/?user=AdityaKothari1&theme=horizon"
          />
        </a>
      </div>
 
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        style={{
          width: "fit-content",
          height: "300px",
          display: "flex",
          paddingTop:"10px",
          margin: "auto",
          gap:"20px",
          
        }}
      >
        <a href="https://github.com/AdityaKothari1">  
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=AdityaKothari1&custom_title=Most_language_Used&theme=cobalt"  //launguages
          />
        </a>
        <a href="https://github.com/AdityaKothari1">
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=AdityaKothari1&count_private=true&show_icons=true&theme=cobalt" //stats
          />
        </a>
      </div>
    </div>
    </>
  );
};

export default Stats;