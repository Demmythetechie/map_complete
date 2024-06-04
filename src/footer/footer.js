import './footer.css';
import { Link } from 'react-router-dom';

function Footer () {
    return (
        <section className='footer'>
            <div className='footerInfo'>
                <div className='motto'>
                    <div className='logoContainer'>
                        <svg viewBox="0 0 140 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M140 11.2221C140 11.6288 139.969 12.0433 139.906 12.4656H129.996C130.184 13.4823 130.631 14.2878 131.337 14.8822C132.059 15.4765 133.016 15.7737 134.209 15.7737C134.931 15.7737 135.684 15.6486 136.469 15.3983C137.269 15.1481 137.952 14.8196 138.517 14.4129L139.6 16.3134C138.015 17.4865 136.187 18.073 134.115 18.073C131.887 18.073 130.192 17.4239 129.03 16.1257C127.885 14.8274 127.312 13.2633 127.312 11.4333C127.312 9.52504 127.908 7.95309 129.101 6.71743C130.309 5.46613 131.871 4.84048 133.785 4.84048C135.622 4.84048 137.112 5.41139 138.258 6.5532C139.419 7.71065 140 9.26696 140 11.2221ZM133.785 7.06936C132.812 7.06936 131.981 7.37437 131.29 7.98438C130.615 8.57874 130.184 9.36863 129.996 10.354H137.387C137.277 9.36863 136.885 8.57874 136.21 7.98438C135.551 7.37437 134.743 7.06936 133.785 7.06936Z" fill="#fff"/>
                            <path d="M124.228 0.00521603V17.7893H121.639V0.00521603H124.228Z" fill="#fff"/>
                            <path d="M112.426 18.094C110.731 18.094 109.381 17.6013 108.377 16.6159C107.373 15.6305 106.87 14.2932 106.87 12.6039V5.14301H109.46V12.5804C109.46 13.5346 109.719 14.2932 110.237 14.8562C110.77 15.4193 111.5 15.7009 112.426 15.7009C113.368 15.7009 114.097 15.4271 114.615 14.8797C115.133 14.3323 115.392 13.5658 115.392 12.5804V5.14301H118.005V12.6039C118.005 14.3244 117.511 15.6696 116.522 16.6393C115.533 17.6091 114.168 18.094 112.426 18.094Z" fill="#fff"/>
                            <path d="M99.314 18.0938C98.3096 18.0938 97.3759 17.867 96.5128 17.4134C95.6496 16.9598 94.9591 16.3029 94.4413 15.4426L96.1126 13.941C96.4892 14.5511 96.9679 15.0281 97.5485 15.3722C98.1449 15.7007 98.7491 15.8649 99.3611 15.8649C99.9731 15.8649 100.475 15.7163 100.868 15.4191C101.26 15.1063 101.456 14.7309 101.456 14.293C101.456 13.6673 101.095 13.1824 100.373 12.8383C100.185 12.7288 99.6749 12.5177 98.8432 12.2049C97.9958 11.8451 97.4622 11.6027 97.2425 11.4775C95.8929 10.7737 95.2181 9.73354 95.2181 8.35711C95.2181 7.30914 95.6104 6.44105 96.3951 5.75284C97.2111 5.06462 98.2626 4.72051 99.5494 4.72051C101.354 4.72051 102.743 5.36962 103.716 6.66785L102.209 8.26326C101.456 7.34042 100.53 6.87901 99.4317 6.87901C98.9138 6.87901 98.498 7.01196 98.1841 7.27786C97.8859 7.54376 97.7368 7.87223 97.7368 8.26326C97.7368 8.88891 98.0899 9.35033 98.7961 9.64751L100.091 10.1871C100.923 10.5312 101.519 10.7971 101.88 10.9848C103.324 11.7356 104.046 12.7992 104.046 14.1757C104.046 15.2862 103.606 16.2168 102.727 16.9676C101.848 17.7184 100.711 18.0938 99.314 18.0938Z" fill="#fff"/>
                            <path d="M86.2297 4.84048C88.0344 4.84048 89.5331 5.48177 90.7258 6.76436C91.9342 8.06258 92.5384 9.63453 92.5384 11.4802C92.5384 13.3102 91.9342 14.8744 90.7258 16.1726C89.5331 17.4552 88.0266 18.0965 86.2062 18.0965C84.4171 18.0965 82.9734 17.4082 81.8748 16.0318V23H79.2854V5.14549H81.8748V6.97551C83.0204 5.55216 84.4721 4.84048 86.2297 4.84048ZM89.9254 11.4567C89.9254 10.268 89.5488 9.26696 88.7955 8.45362C88.0423 7.62463 87.0614 7.21013 85.8531 7.21013C84.6447 7.21013 83.6638 7.62463 82.9106 8.45362C82.173 9.2826 81.8042 10.2836 81.8042 11.4567C81.8042 12.6611 82.173 13.6778 82.9106 14.5068C83.6638 15.3201 84.6447 15.7268 85.8531 15.7268C87.0614 15.7268 88.0423 15.3201 88.7955 14.5068C89.5488 13.6934 89.9254 12.6768 89.9254 11.4567Z" fill="#fff"/>
                            <path d="M72.9772 6.90513V5.14549H75.4724V17.7915H72.9772V16.0553C71.8316 17.4161 70.3878 18.0965 68.6459 18.0965C66.8098 18.0965 65.2954 17.4552 64.1027 16.1726C62.91 14.89 62.3137 13.2946 62.3137 11.3864C62.3137 9.49376 62.91 7.92963 64.1027 6.69397C65.2954 5.45831 66.8098 4.84048 68.6459 4.84048C70.3878 4.84048 71.8316 5.5287 72.9772 6.90513ZM68.999 15.7268C70.176 15.7268 71.1568 15.3123 71.9414 14.4833C72.7104 13.67 73.0949 12.6611 73.0949 11.4567C73.0949 10.268 72.7104 9.26696 71.9414 8.45362C71.1568 7.62463 70.176 7.21013 68.999 7.21013C67.7906 7.21013 66.8098 7.62463 66.0565 8.45362C65.3032 9.26696 64.9266 10.2758 64.9266 11.4802C64.9266 12.6846 65.3032 13.6934 66.0565 14.5068C66.8098 15.3201 67.7906 15.7268 68.999 15.7268Z" fill="#fff"/>
                            <path d="M62.0171 17.7895H58.6744L52.9778 10.4225L50.6708 13.1675V17.7895H47.9638V0.451187H50.6708V9.48402L58.2036 0.451187H61.4521L54.7432 8.52208L62.0171 17.7895Z" fill="#fff"/>
                            <path d="M28.346 2.38492H9.57137C5.60678 2.38492 2.39284 5.58822 2.39284 9.53968C2.39284 13.4911 5.60678 16.6944 9.57137 16.6944C9.57137 16.6944 28.1312 16.6944 28.346 16.6944V19.0794H9.57137C4.28525 19.0794 0 14.8083 0 9.53968C0 4.27106 4.28525 0 9.57137 0H28.346C33.6321 0 37.9173 4.27106 37.9173 9.53968C37.9173 9.84154 37.9033 10.1401 37.8758 10.4348C37.8245 10.9839 37.3412 11.3742 36.7879 11.3742C36.0293 11.3742 35.4783 10.6531 35.5157 9.89793C35.5215 9.77925 35.5245 9.65981 35.5245 9.53968C35.5245 5.58822 32.3106 2.38492 28.346 2.38492Z" fill="#fff"/>
                            <path d="M0 9.42354C0 4.21906 4.23308 0 9.45484 0H13.0913C18.3131 0 22.5462 4.21906 22.5462 9.42354C22.5462 14.628 18.3131 18.8471 13.0913 18.8471H9.45485C4.23308 18.8471 0 14.628 0 9.42354Z" fill="#fff"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M35.3404 19.0788H25.7691V16.6939H35.3404V19.0788Z" fill="#fff"/>
                            <path d="M36.5446 19.328L31.4686 14.2688L32.9003 12.8419L37.9763 17.9011L36.5446 19.328Z" fill="#fff"/>
                            <path d="M37.9733 17.9406L32.8973 22.9997L31.4656 21.5728L36.5416 16.5136L37.9733 17.9406Z" fill="#fff"/>
                        </svg>
                    </div>
                    <p>Unlocking the power of healthcare data</p>
                </div>
                <div className='footerService'>
                    <p>Services</p>
                    <div>
                        <Link className='footerServiceLinks' to='/pharmacy'>Health News</Link>
                        <Link className='footerServiceLinks' to='/pharmacy'>Support</Link>
                    </div>
                </div>
                <div className='footerService'>
                    <p>Company</p>
                    <div>
                        <Link className='footerServiceLinks' to='/pharmacy'>Terms and Conditions</Link>
                        <Link className='footerServiceLinks' to='/pharmacy'>Give Feedback</Link>
                    </div>
                </div>
                <div className='footerContact'>
                    <p>Contact</p>
                    <p className='email'>info@kapsuletech.com</p>
                    <div className='office'>
                        <p>London</p>
                        <p className='officeAddress'>152 - 160 Kemp House City Road, London, England, EC1V 2NX</p>
                    </div>
                    <div className='office'>
                        <p>Kigali</p>
                        <p className='officeAddress'>Norrsken Kigali House, KN 78 St, Kigali, Rwanda</p>
                    </div>
                </div>
            </div>
            <div className='seperatorContainer'>
                <div className='seperator'>
                    <svg viewBox="0 0 612 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="-0.00170898" y1="0.496582" x2="612.002" y2="0.496582" stroke="#FAFAFA"/>
                    </svg>
                </div>
            </div>
            <div className='socials'>
                <div>
                    <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.3333 11.6667C25.6539 11.6667 27.8795 12.5886 29.5204 14.2296C31.1614 15.8705 32.0833 18.0961 32.0833 20.4167V30.6251H26.2499V20.4167C26.2499 19.6432 25.9426 18.9013 25.3956 18.3544C24.8487 17.8074 24.1068 17.5001 23.3333 17.5001C22.5597 17.5001 21.8178 17.8074 21.2709 18.3544C20.7239 18.9013 20.4166 19.6432 20.4166 20.4167V30.6251H14.5833V20.4167C14.5833 18.0961 15.5051 15.8705 17.1461 14.2296C18.787 12.5886 21.0126 11.6667 23.3333 11.6667Z" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.75008 13.125H2.91675V30.625H8.75008V13.125Z" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.83341 8.75008C7.44424 8.75008 8.75008 7.44424 8.75008 5.83341C8.75008 4.22258 7.44424 2.91675 5.83341 2.91675C4.22258 2.91675 2.91675 4.22258 2.91675 5.83341C2.91675 7.44424 4.22258 8.75008 5.83341 8.75008Z" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div>
                    <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.7917 2.91675H10.2084C6.18134 2.91675 2.91675 6.18134 2.91675 10.2084V24.7917C2.91675 28.8188 6.18134 32.0834 10.2084 32.0834H24.7917C28.8188 32.0834 32.0834 28.8188 32.0834 24.7917V10.2084C32.0834 6.18134 28.8188 2.91675 24.7917 2.91675Z" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M23.3333 16.5812C23.5133 17.7949 23.306 19.0344 22.7409 20.1235C22.1758 21.2126 21.2817 22.0958 20.1857 22.6474C19.0897 23.199 17.8477 23.391 16.6363 23.1961C15.425 23.0012 14.3059 22.4292 13.4383 21.5616C12.5707 20.694 11.9988 19.575 11.8038 18.3636C11.6089 17.1522 11.8009 15.9102 12.3525 14.8142C12.9042 13.7183 13.7873 12.8242 14.8764 12.2591C15.9655 11.694 17.205 11.4866 18.4187 11.6666C19.6567 11.8502 20.8029 12.4271 21.6879 13.3121C22.5728 14.197 23.1497 15.3432 23.3333 16.5812Z" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M25.5208 9.47925H25.5353" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div>
                    <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32.0834 5.83345C32.0834 5.83345 31.0626 8.89595 29.1667 10.7918C31.5001 25.3751 15.4584 36.0209 2.91675 27.7084C6.12508 27.8543 9.33341 26.8334 11.6667 24.7918C4.37508 22.6043 0.729248 14.0001 4.37508 7.29178C7.58341 11.0834 12.5417 13.2709 17.5001 13.1251C16.1876 7.00012 23.3334 3.50011 27.7084 7.58345C29.3126 7.58345 32.0834 5.83345 32.0834 5.83345Z" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div>
                    <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.2499 2.91675H21.8749C19.941 2.91675 18.0864 3.68497 16.7189 5.05243C15.3515 6.41988 14.5833 8.27454 14.5833 10.2084V14.5834H10.2083V20.4167H14.5833V32.0834H20.4166V20.4167H24.7916L26.2499 14.5834H20.4166V10.2084C20.4166 9.82164 20.5702 9.45071 20.8437 9.17722C21.1172 8.90373 21.4881 8.75008 21.8749 8.75008H26.2499V2.91675Z" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div className='copyright'>
                <p>@ 2024 kapsule. All rights Reserved.</p>
            </div>
        </section>
    )
}

export default Footer;