import React from 'react'
import logo from './logo.png';

const bg = () =>{
  return (
    <div className="bg">
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: 'cover',
        height: '100vh',
        width: '100vw',
      }}
    </div>
  )
}

export default function Contact(props) {
  return (
    <div className="contact" style={{bg}}>
      <div class="widget dark">
        <h2>Contact us</h2><br /><hr />
        {/* <p> <i class="fa fa-home text-theme-color-2 mr-5  "><p class="text-gray" href="/">AMGR Foundation, B-9 Sector-34 , Noida Uttar Pradesh,PinCode-201301</p></i></p> */}
        <ul class="list-inline mt-5">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28032.053932338007!2d77.3261352882633!3d28.56956027631441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce598efc01805%3A0x4826fbf93ab3d599!2sShiksha%20Ki%20Ore!5e0!3m2!1sen!2sin!4v1603186446861!5m2!1sen!2sin" title='Google Map'>MAP</iframe>
          <li class="m-0 pl-10 pr-10"> <i class="fa fa-home text-theme-color-2 mr-5  "></i> <p class="text-gray" href="/">AMGR Foundation, B-9 Sector-34 ,Noida Uttar Pradesh,PinCode-201301</p> </li>
          <li class="m-0 pl-10 pr-10"> <i class="fa fa-phone text-theme-color-2 mr-5"></i> <p class="text-gray" href="/">0120 423 2349, 0120 410 0573</p> </li>
          <li class="m-0 pl-10 pr-10"> <i class="fa fa-envelope-o text-theme-color-2 mr-5"></i> <p class="text-gray" href="/">info@shikshakiore.com</p> </li>
          <li class="m-0 pl-10 pr-10"> <i class="fa fa-globe text-theme-color-2 mr-5"></i> <p class="text-gray" href="/">shikshakiore.com</p> </li>
        </ul>
      </div>
      {/* <div class="map">
        <div class="widget dark">
          <h4 class="widget-title">  Google Map</h4>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28032.053932338007!2d77.3261352882633!3d28.56956027631441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce598efc01805%3A0x4826fbf93ab3d599!2sShiksha%20Ki%20Ore!5e0!3m2!1sen!2sin!4v1603186446861!5m2!1sen!2sin"></iframe>
        </div>
      </div> */}
    </div>
  )
}
