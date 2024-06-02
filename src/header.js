import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className='navigation'>
            <div className='logoContainer'>
                <svg viewBox="0 0 140 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M140 11.2221C140 11.6288 139.969 12.0433 139.906 12.4656H129.996C130.184 13.4823 130.631 14.2878 131.337 14.8822C132.059 15.4765 133.016 15.7737 134.209 15.7737C134.931 15.7737 135.684 15.6486 136.469 15.3983C137.269 15.1481 137.952 14.8196 138.517 14.4129L139.6 16.3134C138.015 17.4865 136.187 18.073 134.115 18.073C131.887 18.073 130.192 17.4239 129.03 16.1257C127.885 14.8274 127.312 13.2633 127.312 11.4333C127.312 9.52504 127.908 7.95309 129.101 6.71743C130.309 5.46613 131.871 4.84048 133.785 4.84048C135.622 4.84048 137.112 5.41139 138.258 6.5532C139.419 7.71065 140 9.26696 140 11.2221ZM133.785 7.06936C132.812 7.06936 131.981 7.37437 131.29 7.98438C130.615 8.57874 130.184 9.36863 129.996 10.354H137.387C137.277 9.36863 136.885 8.57874 136.21 7.98438C135.551 7.37437 134.743 7.06936 133.785 7.06936Z" fill="#162C22"/>
                    <path d="M124.228 0.00521603V17.7893H121.639V0.00521603H124.228Z" fill="#162C22"/>
                    <path d="M112.426 18.094C110.731 18.094 109.381 17.6013 108.377 16.6159C107.373 15.6305 106.87 14.2932 106.87 12.6039V5.14301H109.46V12.5804C109.46 13.5346 109.719 14.2932 110.237 14.8562C110.77 15.4193 111.5 15.7009 112.426 15.7009C113.368 15.7009 114.097 15.4271 114.615 14.8797C115.133 14.3323 115.392 13.5658 115.392 12.5804V5.14301H118.005V12.6039C118.005 14.3244 117.511 15.6696 116.522 16.6393C115.533 17.6091 114.168 18.094 112.426 18.094Z" fill="#162C22"/>
                    <path d="M99.314 18.0938C98.3096 18.0938 97.3759 17.867 96.5128 17.4134C95.6496 16.9598 94.9591 16.3029 94.4413 15.4426L96.1126 13.941C96.4892 14.5511 96.9679 15.0281 97.5485 15.3722C98.1449 15.7007 98.7491 15.8649 99.3611 15.8649C99.9731 15.8649 100.475 15.7163 100.868 15.4191C101.26 15.1063 101.456 14.7309 101.456 14.293C101.456 13.6673 101.095 13.1824 100.373 12.8383C100.185 12.7288 99.6749 12.5177 98.8432 12.2049C97.9958 11.8451 97.4622 11.6027 97.2425 11.4775C95.8929 10.7737 95.2181 9.73354 95.2181 8.35711C95.2181 7.30914 95.6104 6.44105 96.3951 5.75284C97.2111 5.06462 98.2626 4.72051 99.5494 4.72051C101.354 4.72051 102.743 5.36962 103.716 6.66785L102.209 8.26326C101.456 7.34042 100.53 6.87901 99.4317 6.87901C98.9138 6.87901 98.498 7.01196 98.1841 7.27786C97.8859 7.54376 97.7368 7.87223 97.7368 8.26326C97.7368 8.88891 98.0899 9.35033 98.7961 9.64751L100.091 10.1871C100.923 10.5312 101.519 10.7971 101.88 10.9848C103.324 11.7356 104.046 12.7992 104.046 14.1757C104.046 15.2862 103.606 16.2168 102.727 16.9676C101.848 17.7184 100.711 18.0938 99.314 18.0938Z" fill="#162C22"/>
                    <path d="M86.2297 4.84048C88.0344 4.84048 89.5331 5.48177 90.7258 6.76436C91.9342 8.06258 92.5384 9.63453 92.5384 11.4802C92.5384 13.3102 91.9342 14.8744 90.7258 16.1726C89.5331 17.4552 88.0266 18.0965 86.2062 18.0965C84.4171 18.0965 82.9734 17.4082 81.8748 16.0318V23H79.2854V5.14549H81.8748V6.97551C83.0204 5.55216 84.4721 4.84048 86.2297 4.84048ZM89.9254 11.4567C89.9254 10.268 89.5488 9.26696 88.7955 8.45362C88.0423 7.62463 87.0614 7.21013 85.8531 7.21013C84.6447 7.21013 83.6638 7.62463 82.9106 8.45362C82.173 9.2826 81.8042 10.2836 81.8042 11.4567C81.8042 12.6611 82.173 13.6778 82.9106 14.5068C83.6638 15.3201 84.6447 15.7268 85.8531 15.7268C87.0614 15.7268 88.0423 15.3201 88.7955 14.5068C89.5488 13.6934 89.9254 12.6768 89.9254 11.4567Z" fill="#162C22"/>
                    <path d="M72.9772 6.90513V5.14549H75.4724V17.7915H72.9772V16.0553C71.8316 17.4161 70.3878 18.0965 68.6459 18.0965C66.8098 18.0965 65.2954 17.4552 64.1027 16.1726C62.91 14.89 62.3137 13.2946 62.3137 11.3864C62.3137 9.49376 62.91 7.92963 64.1027 6.69397C65.2954 5.45831 66.8098 4.84048 68.6459 4.84048C70.3878 4.84048 71.8316 5.5287 72.9772 6.90513ZM68.999 15.7268C70.176 15.7268 71.1568 15.3123 71.9414 14.4833C72.7104 13.67 73.0949 12.6611 73.0949 11.4567C73.0949 10.268 72.7104 9.26696 71.9414 8.45362C71.1568 7.62463 70.176 7.21013 68.999 7.21013C67.7906 7.21013 66.8098 7.62463 66.0565 8.45362C65.3032 9.26696 64.9266 10.2758 64.9266 11.4802C64.9266 12.6846 65.3032 13.6934 66.0565 14.5068C66.8098 15.3201 67.7906 15.7268 68.999 15.7268Z" fill="#162C22"/>
                    <path d="M62.0171 17.7895H58.6744L52.9778 10.4225L50.6708 13.1675V17.7895H47.9638V0.451187H50.6708V9.48402L58.2036 0.451187H61.4521L54.7432 8.52208L62.0171 17.7895Z" fill="#162C22"/>
                    <path d="M28.346 2.38492H9.57137C5.60678 2.38492 2.39284 5.58822 2.39284 9.53968C2.39284 13.4911 5.60678 16.6944 9.57137 16.6944C9.57137 16.6944 28.1312 16.6944 28.346 16.6944V19.0794H9.57137C4.28525 19.0794 0 14.8083 0 9.53968C0 4.27106 4.28525 0 9.57137 0H28.346C33.6321 0 37.9173 4.27106 37.9173 9.53968C37.9173 9.84154 37.9033 10.1401 37.8758 10.4348C37.8245 10.9839 37.3412 11.3742 36.7879 11.3742C36.0293 11.3742 35.4783 10.6531 35.5157 9.89793C35.5215 9.77925 35.5245 9.65981 35.5245 9.53968C35.5245 5.58822 32.3106 2.38492 28.346 2.38492Z" fill="#162C22"/>
                    <path d="M0 9.42354C0 4.21906 4.23308 0 9.45484 0H13.0913C18.3131 0 22.5462 4.21906 22.5462 9.42354C22.5462 14.628 18.3131 18.8471 13.0913 18.8471H9.45485C4.23308 18.8471 0 14.628 0 9.42354Z" fill="#162C22"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M35.3404 19.0788H25.7691V16.6939H35.3404V19.0788Z" fill="#162C22"/>
                    <path d="M36.5446 19.328L31.4686 14.2688L32.9003 12.8419L37.9763 17.9011L36.5446 19.328Z" fill="#162C22"/>
                    <path d="M37.9733 17.9406L32.8973 22.9997L31.4656 21.5728L36.5416 16.5136L37.9733 17.9406Z" fill="#162C22"/>
                </svg>
            </div>
            <div className='nav2'>
                <div className='pages'>
                    <div className='main'>
                        <Link className='links' to='/'>Home</Link>
                        <Link className='links' to='/pharmacy'>Pharmacies</Link>
                        <Link className='links' to='/healthcare'>Health Care</Link>
                        <Link className='links' to='/contact'>Contact</Link>
                    </div>
                    <div className='divider'>
                        <svg width="4px" height="21px">
                            <line x1="2" y1="0" x2="2" y2="21" stroke='#b3b5b4' strokeWidth="1px"/>
                        </svg>
                    </div>
                    <Link className='notification' to='/'>
                        <div className='messages'>
                            <div>
                                <p>2</p>
                            </div>
                            <svg className='' viewBox='0 0 18 18' fill='none'>
                                <path d="M4.5 6C4.5 4.80653 4.97411 3.66193 5.81802 2.81802C6.66193 1.97411 7.80653 1.5 9 1.5C10.1935 1.5 11.3381 1.97411 12.182 2.81802C13.0259 3.66193 13.5 4.80653 13.5 6C13.5 11.25 15.75 12.75 15.75 12.75H2.25C2.25 12.75 4.5 11.25 4.5 6Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.7251 15.75C7.85063 15.9783 8.03518 16.1688 8.25947 16.3014C8.48375 16.434 8.73953 16.504 9.0001 16.504C9.26066 16.504 9.51645 16.434 9.74073 16.3014C9.96501 16.1688 10.1496 15.9783 10.2751 15.75" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </Link>
                    <Link className='login' to="/login">
                        <div>
                            <svg viewBox="0 0 18 18" fill="none">
                                <path d="M14.25 15.75V14.25C14.25 13.4544 13.9339 12.6913 13.3713 12.1287C12.8087 11.5661 12.0456 11.25 11.25 11.25H6.75C5.95435 11.25 5.19129 11.5661 4.62868 12.1287C4.06607 12.6913 3.75 13.4544 3.75 14.25V15.75" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9 8.25C10.6569 8.25 12 6.90685 12 5.25C12 3.59315 10.6569 2.25 9 2.25C7.34315 2.25 6 3.59315 6 5.25C6 6.90685 7.34315 8.25 9 8.25Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <p>Log in</p>
                    </Link>
                    <Link className='signup' to="/signup">Sign up</Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;