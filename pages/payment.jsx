import React from "react";
export default function payment(){
    return(
        <div className="flex flex-col min-h-screen text-gray-900 " style={{backgroundColor: "#c9c9c9"}} >
            <div className="w-2/3 m-auto flex mt-3 justify-center" >
            <img alt="logo" src="/assets/logo.svg" className="h-10" /><span className="ml-1 text-3xl font-head text-gray-800">OMPUFEST</span> 
            </div>
        <div className="flex" style={{height: "90vh"}}>
            <div className="p-4 gap-5 lg:flex lg:justify-between m-auto">
            <div className=" w-full lg:w-2/3 m-auto lg:flex">
          <div className="h-48 h-auto w-48 m-auto flex-none bg-cover rounded-t rounded-t-none rounded-l text-center overflow-hidden"
        //    style={{backgroundImage: 'url("./assets/imgs/paymentUPI.jpg")'}} 
           title="Mountain">
               <img alt="logo" src="./assets/imgs/paymentUPI.jpg"/>
          </div>
          <div className="m-auto w-min font-bold pt-1">&nbsp;Pay&nbsp;via&nbsp;UPI&nbsp;</div>
          <div className="m-auto w-min font-bold pt-1"> OR&nbsp;&nbsp;</div>
          <div className="border border-gray-400 border-gray-700 bg-white rounded p-4 flex flex-col justify-between leading-normal" style={{backgroundColor:"#ebe6e6"}}>
            <div >
              <div className="text-gray-900 font-bold text-xl mb-2" >For International Payments</div>
              <p className="text-gray-700 text-base">Account&nbsp;holder&nbsp;name:&nbsp;YASHWANTRAO&nbsp;CHAVHAN&nbsp;COLLEGE OF ENGINEERING </p>
              <p className="text-gray-700 text-base">Account no: 1472002100003909 </p>
              <p className="text-gray-700 text-base">RTGS/NEFT IFS CODE : PUNB0147200</p>
              <p className="text-gray-700 text-base">Amount : As per Event</p>
            </div>
          </div>
        </div>



        {/*Card 1*/}
        {/* <div className=" w-full lg:w-full lg:flex ">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: 'url("/mountain.jpg")'}} title="Mountain">
          </div>
          <div className="border border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center">
                <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
              </p>
              <div className="text-gray-900 font-bold text-xl mb-2">Best Mountain Trails 2020</div>
              <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                <p className="text-gray-900 leading-none">John Smith</p>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
        </div> */}
        {/*Card 2*/}  
      </div>
        </div>
        
        </div>
    )
}
  