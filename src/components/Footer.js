import React from 'react'
import '../styles/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className="custom-footer p-3">
      <div className="d-flex justify-content-center mb-2">
    <a href='https://www.google.com' target='_blank' ><FacebookIcon className='custom-icon'/></a>
    <a href='https://www.google.com' target='_blank'><InstagramIcon className='custom-icon'/></a>
    <a href='https://www.google.com' target='_blank'><TwitterIcon className='custom-icon'/></a>
    <a href='https://www.google.com' target='_blank'><LinkedInIcon className='custom-icon'/></a></div>
    <div className="text-center">
      <small>Copyright &copy; 2023 IAT Alumni</small>
    </div>
    </div>
  )
}

export default Footer