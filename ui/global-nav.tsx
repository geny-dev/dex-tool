'use client';

import { demos, type Item } from '#/lib/demos';
import { NextLogo } from '#/ui/next-logo';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import clsx from 'clsx';
import { useState } from 'react';
import Byline from './byline';
import "../styles/sidebar.css";
import Image from 'next/image';
import dextoolsLogo from "./dextools_logo.jpeg"; // Import the image with the correct path
import HomeIcon from '@mui/icons-material/Home';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import DatasetLinkedIcon from '@mui/icons-material/DatasetLinked';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonIcon from '@mui/icons-material/Person';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const segment = useSelectedLayoutSegment();

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">


      <main className="cd__main">

        <nav className="main-menu">
          <div className="logo-wrapper">
            <Image src={dextoolsLogo} width={40} height={40} />
          </div>
          <li className="space-line"></li>
          <div className="scrollbar" id="style-1">
            <ul className="nav-menu">
              <li className="dextboard">
                <a href="http://startific.com">
                  <HomeIcon className="icon" />
                  <i className="fa fa-envelope-o fa-lg"></i>
                  <span className="nav-text">DEXTboard</span>
                </a>
              </li>
              <li className="space-line"></li>

              <li>
                <a href="http://startific.com">
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 21 21"
                    width="20"
                    transform=""
                    style={{
                      width: '23px',
                      height: '23px',
                      marginLeft: '10px',
                    }}
                  >
                    <circle
                      r="2.8875"
                      transform="matrix(-1 0 0 1 18.1125 2.8875)"
                      fill="currentColor"
                    ></circle>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.85 7.35003C15.5304 7.35003 13.65 5.46963 13.65 3.15003C13.65 2.51952 13.7889 1.92146 14.0379 1.3848H13.3483H4.76724C2.13437 1.3848 0 3.51916 0 6.15204V15.6865C0 18.3194 2.13437 20.4538 4.76724 20.4538H14.3017C16.9346 20.4538 19.069 18.3194 19.069 15.6865V8.05893V7.17041C18.6832 7.28722 18.2739 7.35003 17.85 7.35003ZM5.25 16.5598C4.69772 16.5598 4.25 16.1121 4.25 15.5598V12.4098C4.25 11.8575 4.69771 11.4098 5.25 11.4098C5.80228 11.4098 6.25 11.8575 6.25 12.4098V15.5598C6.25 16.1121 5.80228 16.5598 5.25 16.5598ZM8.45 15.5598C8.45 16.1121 8.89771 16.5598 9.45 16.5598C10.0023 16.5598 10.45 16.1121 10.45 15.5598V5.0598C10.45 4.50751 10.0023 4.0598 9.45 4.0598C8.89771 4.0598 8.45 4.50751 8.45 5.0598V15.5598ZM13.65 16.5598C13.0977 16.5598 12.65 16.1121 12.65 15.5598V8.2098C12.65 7.65751 13.0977 7.2098 13.65 7.2098C14.2023 7.2098 14.65 7.65751 14.65 8.2098V15.5598C14.65 16.1121 14.2023 16.5598 13.65 16.5598Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <i className="fa fa-envelope-o fa-lg"></i>
                  <span className="nav-text">Pair Explorer</span>
                </a>
              </li>

              <li>
                <a href="http://startific.com">
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 21 21"
                    width="20"
                    transform=""
                    style={{
                      width: '23px',
                      height: '23px',
                      marginLeft: '10px',
                    }}
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.4786 0.0213583C19.0387 -0.182682 20.325 1.10364 20.1209 2.66374C19.8271 4.91086 19.0195 8.73685 16.7303 11.2051C16.0074 11.9845 15.1356 12.7047 14.2386 13.3452L14.4989 15.1675C14.5747 15.6979 14.3963 16.2331 14.0175 16.6119L10.9875 19.6418C9.99569 20.6337 8.29717 20.0675 8.0988 18.6789L7.69737 15.8689C7.44283 15.7432 7.20675 15.5751 7.0005 15.3689L4.77342 13.1418C4.56718 12.9356 4.39907 12.6995 4.27338 12.445L1.46337 12.0435C0.0747726 11.8452 -0.491402 10.1466 0.500456 9.15478L3.53037 6.12486C3.90923 5.746 4.44435 5.56763 4.97475 5.6434L6.79709 5.90374C7.43756 5.00673 8.15782 4.13489 8.9372 3.41205C11.4055 1.12283 15.2314 0.315253 17.4786 0.0213583ZM2.90777 13.1946C3.20066 13.4875 3.20066 13.9624 2.90777 14.2553L1.56114 15.6019C1.26824 15.8948 0.793371 15.8948 0.500477 15.6019C0.207584 15.309 0.207583 14.8342 0.500477 14.5413L1.84711 13.1946C2.14 12.9018 2.61487 12.9018 2.90777 13.1946ZM4.92771 15.2146C5.2206 15.5075 5.2206 15.9824 4.92771 16.2752L2.23445 18.9685C1.94156 19.2614 1.46668 19.2614 1.17379 18.9685C0.880898 18.6756 0.880899 18.2007 1.17379 17.9078L3.86705 15.2146C4.15994 14.9217 4.63482 14.9217 4.92771 15.2146ZM6.94765 17.2345C7.24055 17.5274 7.24055 18.0023 6.94765 18.2952L5.60103 19.6418C5.30813 19.9347 4.83326 19.9347 4.54037 19.6418C4.24747 19.3489 4.24747 18.8741 4.54037 18.5812L5.88699 17.2345C6.17989 16.9416 6.65476 16.9416 6.94765 17.2345ZM11.8035 8.33841C11.0598 7.59468 11.0598 6.38887 11.8035 5.64515C12.5472 4.90143 13.753 4.90143 14.4968 5.64515C15.2405 6.38887 15.2405 7.59468 14.4968 8.33841C13.753 9.08213 12.5472 9.08213 11.8035 8.33841Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <i className="fa fa-envelope-o fa-lg"></i>
                  <span className="nav-text">Live New Pairs</span>
                </a>
              </li>

              <li>
                <a href="http://startific.com">
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 25 27"
                    width="20"
                    transform="scale(1.2)"
                    style={{
                      width: '23px',
                      height: '23px',
                      marginLeft: '10px',
                    }}
                  >
                    <path
                      d="M23.5025 14.1527C23.229 14.1527 23.0052 14.3765 23.0052 14.65C23.0052 20.4186 18.3058 25.143 12.5123 25.143C6.71874 25.143 2.01928 20.4435 2.01928 14.6749C2.01928 9.13 6.32086 4.60459 11.7663 4.23161L9.5 6.58386C9.27626 6.758 9.22648 7.08112 9.40062 7.30485C9.5 7.42921 9.64934 7.5038 9.79849 7.5038C9.89788 7.5038 10.0222 7.47899 10.0968 7.40441L13.6064 4.10725C13.7307 4.00786 13.8053 3.85853 13.8053 3.68457C13.8053 3.51043 13.7059 3.36127 13.5816 3.28669C13.5816 3.28669 9.44319 1.23302 9.21945 1.08386C8.9957 0.9347 8.67242 0.984478 8.52323 1.23302C8.37407 1.45677 8.42385 1.78005 8.67239 1.92924L11.6919 3.23694C5.72433 3.63481 1 8.60775 1 14.6748C1 21.0153 6.14703 26.1623 12.4876 26.1623C18.8281 26.1625 24 21.0153 24 14.6748C24 14.4013 23.776 14.1527 23.5025 14.1527Z"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="0.8"
                    ></path>
                    <path
                      d="M23.7263 12.0144C23.7263 12.3576 23.4481 12.636 23.1047 12.636C22.7614 12.636 22.483 12.3576 22.483 12.0144C22.483 11.671 22.7614 11.3928 23.1047 11.3928C23.4481 11.3928 23.7263 11.671 23.7263 12.0144Z"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="0.6"
                    ></path>
                    <path
                      d="M22.9306 9.70194C22.9306 10.0454 22.6522 10.3236 22.309 10.3236C21.9658 10.3236 21.6874 10.0454 21.6874 9.70194C21.6874 9.3587 21.9658 9.08032 22.309 9.08032C22.6522 9.08032 22.9306 9.3587 22.9306 9.70194Z"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="0.6"
                    ></path>
                    <path
                      d="M21.4388 7.53867C21.4388 7.88192 21.1606 8.1603 20.8172 8.1603C20.4739 8.1603 20.1956 7.88192 20.1956 7.53867C20.1956 7.19526 20.4739 6.91705 20.8172 6.91705C21.1606 6.91705 21.4388 7.19526 21.4388 7.53867Z"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="0.6"
                    ></path>
                    <path
                      d="M19.375 5.67375C19.375 6.01699 19.0968 6.29537 18.7533 6.29537C18.4101 6.29537 18.1317 6.01699 18.1317 5.67375C18.1317 5.33033 18.4101 5.05212 18.7533 5.05212C19.0968 5.05212 19.375 5.33033 19.375 5.67375Z"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="0.6"
                    ></path>
                    <path
                      d="M16.9134 4.38078C16.9134 4.7242 16.635 5.0024 16.2918 5.0024C15.9484 5.0024 15.6702 4.7242 15.6702 4.38078C15.6702 4.03753 15.9484 3.75916 16.2918 3.75916C16.635 3.75916 16.9134 4.03753 16.9134 4.38078"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M16.9134 4.38078C16.9134 4.7242 16.635 5.0024 16.2918 5.0024C15.9484 5.0024 15.6702 4.7242 15.6702 4.38078C15.6702 4.03753 15.9484 3.75916 16.2918 3.75916C16.635 3.75916 16.9134 4.03753 16.9134 4.38078"
                      stroke="currentColor"
                      stroke-width="0.6"
                    ></path>
                    <path
                      d="M12.8872 14.5174V11.284C13.5029 11.3845 14.0807 11.6482 14.5598 12.0477C14.749 12.2235 15.0449 12.2127 15.2207 12.0235C15.3964 11.8344 15.3855 11.5386 15.1964 11.3628C14.549 10.7904 13.7427 10.4288 12.8845 10.3265V9.47099C12.8845 9.21098 12.6736 9 12.4135 9C12.1533 9 11.9425 9.21099 11.9425 9.47099V10.3189C10.3384 10.4844 9.20787 11.5461 9.20787 12.9362C9.20787 14.4919 10.9901 14.9885 11.9425 15.2277V18.8076C11.2118 18.6421 10.1984 18.2169 9.79612 17.8401V17.8402C9.6139 17.658 9.31872 17.658 9.13667 17.8402C8.95444 18.0223 8.95444 18.3176 9.13667 18.4997C9.702 19.065 11.0234 19.6072 11.9375 19.7498V20.529H11.9373C11.9373 20.789 12.1483 21 12.4083 21C12.6685 21 12.8795 20.789 12.8795 20.529V19.7651C14.0814 19.6225 15.6141 18.9172 15.6141 17.3131C15.6548 16.0732 14.6566 15.0598 12.8872 14.5174L12.8872 14.5174ZM11.9451 14.2627C11.1812 14.0514 10.1629 13.6974 10.1629 12.9414C10.1629 11.9509 11.0361 11.4136 11.9451 11.2685L11.9449 14.2578L11.9451 14.2627ZM12.8872 18.8458V15.5079C13.735 15.8134 14.6694 16.3812 14.6694 17.3463C14.7024 18.3851 13.5491 18.7135 12.8872 18.8307V18.8458Z"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="0.5"
                    ></path>
                  </svg>
                  <i className="fa fa-envelope-o fa-lg"></i>
                  <span className="nav-text">Big Swap Explorer</span>
                </a>
              </li>

              <li>
                <a href="http://startific.com">
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    width="20"
                    transform=""
                    style={{
                      width: '23px',
                      height: '23px',
                      marginLeft: '10px',
                    }}
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 0C1.11929 0 0 1.11929 0 2.5V6.38889C0 7.7696 1.11929 8.88889 2.5 8.88889H6.38889C7.7696 8.88889 8.88889 7.7696 8.88889 6.38889V2.5C8.88889 1.11929 7.7696 0 6.38889 0H2.5ZM2.5 11.1111C1.11929 11.1111 0 12.2304 0 13.6111V17.5C0 18.8807 1.11929 20 2.5 20H6.38889C7.7696 20 8.88889 18.8807 8.88889 17.5V13.6111C8.88889 12.2304 7.7696 11.1111 6.38889 11.1111H2.5ZM11.1111 2.5C11.1111 1.11929 12.2304 0 13.6111 0H17.5C18.8807 0 20 1.11929 20 2.5V6.38889C20 7.7696 18.8807 8.88889 17.5 8.88889H13.6111C12.2304 8.88889 11.1111 7.7696 11.1111 6.38889V2.5ZM14.8611 11.4722C15.2753 11.4722 15.6111 11.808 15.6111 12.2222V14.1111H17.5C17.9142 14.1111 18.25 14.4469 18.25 14.8611C18.25 15.2753 17.9142 15.6111 17.5 15.6111H15.6111V17.5C15.6111 17.9142 15.2753 18.25 14.8611 18.25C14.4469 18.25 14.1111 17.9142 14.1111 17.5V15.6111H12.2222C11.808 15.6111 11.4722 15.2753 11.4722 14.8611C11.4722 14.4469 11.808 14.1111 12.2222 14.1111H14.1111V12.2222C14.1111 11.808 14.4469 11.4722 14.8611 11.4722Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <i className="fa fa-envelope-o fa-lg"></i>
                  <span className="nav-text">Multichart</span>
                </a>
              </li>

              <li>
                <a href="http://startific.com">
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 20 25"
                    width="20"
                    transform=""
                    style={{
                      width: '23px',
                      height: '23px',
                      marginLeft: '10px',
                    }}
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.22263 13.3335C2.22263 12.7199 1.72518 12.2224 1.11154 12.2224C0.497907 12.2224 0.000457764 12.7199 0.000457764 13.3335C0.000457764 17.6289 3.4826 21.1111 7.77805 21.1111H16.2058L14.7696 22.5475L14.6772 22.6522C14.3383 23.0881 14.369 23.7183 14.7695 24.1189C15.2034 24.5528 15.9069 24.5528 16.3408 24.119L19.6745 20.7857L19.6747 20.7855C19.7072 20.753 19.7378 20.7184 19.7661 20.682L19.767 20.681C19.8341 20.5946 19.8868 20.5006 19.9249 20.4023C19.9659 20.2967 19.9913 20.1833 19.9981 20.0649C20.0006 20.0221 20.0006 19.9792 19.9982 19.9364C19.9915 19.8177 19.9662 19.704 19.9251 19.5981C19.8709 19.4583 19.7874 19.3272 19.6745 19.2143L16.3408 15.881L16.2362 15.7886C15.8003 15.4497 15.17 15.4806 14.7695 15.8811L14.6771 15.9858C14.3382 16.4217 14.3691 17.0519 14.7696 17.4525L16.2058 18.8889H7.77805L7.53706 18.8838C4.58069 18.7576 2.22263 16.3209 2.22263 13.3335Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.22999 0.325429C4.79609 -0.108476 4.09259 -0.108476 3.65868 0.325429L0.325429 3.65868L0.321582 3.66304C0.291874 3.69306 0.263866 3.72477 0.237714 3.75801L0.232999 3.76335C-0.105909 4.19922 -0.075099 4.82946 0.325429 5.22999L3.65868 8.56324L3.76335 8.65567C4.19922 8.99458 4.82946 8.96377 5.22999 8.56324L5.32242 8.45857C5.66133 8.0227 5.63052 7.39246 5.22999 6.99193L3.79372 5.55556H12.2223L12.4633 5.56069C15.4196 5.68687 17.7777 8.12354 17.7777 11.111C17.7777 11.7246 18.2751 12.2221 18.8888 12.2221C19.5024 12.2221 19.9999 11.7246 19.9999 11.111C19.9999 6.81553 16.5177 3.33339 12.2223 3.33339H3.79344L5.22999 1.89674L5.32242 1.79207C5.66133 1.3562 5.63052 0.725957 5.22999 0.325429Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.1206 9.60339C11.1206 9.18918 10.7848 8.85339 10.3706 8.85339C9.95637 8.85339 9.62059 9.18918 9.62059 9.60339V11.3666H7.85742C7.44321 11.3666 7.10742 11.7023 7.10742 12.1166C7.10742 12.5308 7.44321 12.8666 7.85742 12.8666H9.62059V14.6297C9.62059 15.0439 9.95637 15.3797 10.3706 15.3797C10.7848 15.3797 11.1206 15.0439 11.1206 14.6297V12.8666H12.8838C13.298 12.8666 13.6338 12.5308 13.6338 12.1166C13.6338 11.7023 13.298 11.3666 12.8838 11.3666H11.1206V9.60339Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <i className="fa fa-envelope-o fa-lg"></i>
                  <span className="nav-text">Multiswap</span>
                </a>
              </li>

              <li>
                <a href="http://startific.com">
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 22 22"
                    width="20"
                    transform=""
                    style={{
                      width: '23px',
                      height: '23px',
                      marginLeft: '10px',
                    }}
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.262 1.00725C13.7143 0.936682 13.2648 1.39099 13.2648 1.94327V8.54813C13.2648 8.65858 13.3543 8.74813 13.4648 8.74813L20.0696 8.74813C20.6219 8.74813 21.0762 8.29861 21.0056 7.75085C20.9178 7.06863 20.7399 6.39954 20.4755 5.76134C20.0833 4.81441 19.5084 3.95401 18.7836 3.22926C18.0589 2.50452 17.1985 1.92961 16.2516 1.53738C15.6134 1.27303 14.9443 1.09514 14.262 1.00725ZM8.92191 3.22922C9.47073 3.16744 9.91983 3.62095 9.91983 4.17323V10.5931C9.91983 11.4215 10.5914 12.0931 11.4198 12.0931H17.8397C18.3919 12.0931 18.8455 12.5422 18.7837 13.091C18.6248 14.5021 18.1307 15.86 17.3364 17.0487C16.3563 18.5155 14.9632 19.6588 13.3333 20.3339C11.7034 21.009 9.90994 21.1857 8.17966 20.8415C6.44938 20.4973 4.86002 19.6478 3.61256 18.4003C2.3651 17.1529 1.51557 15.5635 1.1714 13.8332C0.827222 12.103 1.00386 10.3095 1.67899 8.67959C2.35411 7.04971 3.49738 5.65662 4.96424 4.67649C6.15292 3.88224 7.51083 3.38809 8.92191 3.22922Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M14.262 1.00725L14.1662 1.7511V1.7511L14.262 1.00725ZM13.4648 8.74813V7.99813V8.74813ZM20.0696 8.74813V9.49813V8.74813ZM21.0056 7.75085L20.2618 7.84668V7.84669L21.0056 7.75085ZM20.4755 5.76134L21.1684 5.47433V5.47433L20.4755 5.76134ZM18.7836 3.22926L18.2533 3.75959L18.2533 3.75959L18.7836 3.22926ZM16.2516 1.53738L15.9645 2.23029V2.23029L16.2516 1.53738ZM8.92191 3.22922L8.838 2.48393L8.92191 3.22922ZM18.7837 13.091L18.0384 13.0071L18.7837 13.091ZM17.3364 17.0487L17.96 17.4653L17.3364 17.0487ZM13.3333 20.3339L13.6203 21.0268H13.6203L13.3333 20.3339ZM8.17966 20.8415L8.32598 20.1059L8.17966 20.8415ZM3.61256 18.4003L4.14289 17.87H4.14289L3.61256 18.4003ZM1.1714 13.8332L1.90698 13.6869L1.1714 13.8332ZM1.67899 8.67959L0.986076 8.39258H0.986076L1.67899 8.67959ZM4.96424 4.67649L5.38092 5.3001L4.96424 4.67649ZM14.0148 1.94327C14.0148 1.87084 14.0442 1.81459 14.0777 1.78247C14.1068 1.75448 14.1338 1.74693 14.1662 1.7511L14.3579 0.263399C13.2965 0.126664 12.5148 1.00689 12.5148 1.94327H14.0148ZM14.0148 8.54813V1.94327H12.5148V8.54813H14.0148ZM13.4648 7.99813C13.7685 7.99813 14.0148 8.24437 14.0148 8.54813H12.5148C12.5148 9.0728 12.9401 9.49813 13.4648 9.49813V7.99813ZM20.0696 7.99813L13.4648 7.99813V9.49813L20.0696 9.49813V7.99813ZM20.2618 7.84669C20.266 7.8791 20.2584 7.9061 20.2304 7.93523C20.1983 7.96865 20.142 7.99813 20.0696 7.99813V9.49813C21.006 9.49813 21.8862 8.71635 21.7495 7.65502L20.2618 7.84669ZM19.7826 6.04835C20.0216 6.62523 20.1823 7.23002 20.2618 7.84668L21.7495 7.65502C21.6532 6.90724 21.4582 6.17386 21.1684 5.47433L19.7826 6.04835ZM18.2533 3.75959C18.9084 4.4147 19.4281 5.19242 19.7826 6.04835L21.1684 5.47433C20.7385 4.43641 20.1084 3.49333 19.314 2.69893L18.2533 3.75959ZM15.9645 2.23029C16.8205 2.58483 17.5982 3.10449 18.2533 3.75959L19.314 2.69893C18.5196 1.90454 17.5765 1.2744 16.5386 0.844475L15.9645 2.23029ZM14.1662 1.7511C14.7829 1.83055 15.3877 1.99134 15.9645 2.23029L16.5386 0.844475C15.839 0.554719 15.1057 0.359738 14.3579 0.263399L14.1662 1.7511ZM10.6698 4.17323C10.6698 3.23249 9.88808 2.36571 8.838 2.48393L9.00581 3.97452C9.04281 3.97035 9.07434 3.98018 9.10566 4.01043C9.14064 4.04421 9.16983 4.10113 9.16983 4.17323H10.6698ZM10.6698 10.5931V4.17323H9.16983V10.5931H10.6698ZM11.4198 11.3431C11.0056 11.3431 10.6698 11.0073 10.6698 10.5931H9.16983C9.16983 11.8357 10.1772 12.8431 11.4198 12.8431V11.3431ZM17.8397 11.3431H11.4198V12.8431H17.8397V11.3431ZM19.529 13.1749C19.6472 12.1248 18.7804 11.3431 17.8397 11.3431V12.8431C17.9118 12.8431 17.9687 12.8723 18.0025 12.9072C18.0327 12.9386 18.0425 12.9701 18.0384 13.0071L19.529 13.1749ZM17.96 17.4653C18.821 16.1767 19.3567 14.7046 19.529 13.1749L18.0384 13.0071C17.8929 14.2995 17.4403 15.5432 16.7128 16.632L17.96 17.4653ZM13.6203 21.0268C15.3872 20.2949 16.8975 19.0555 17.96 17.4653L16.7128 16.632C15.8151 17.9755 14.5391 19.0226 13.0463 19.641L13.6203 21.0268ZM8.03334 21.5771C9.90911 21.9502 11.8534 21.7587 13.6203 21.0268L13.0463 19.641C11.5534 20.2594 9.91077 20.4211 8.32598 20.1059L8.03334 21.5771ZM3.08223 18.9307C4.43458 20.283 6.15758 21.204 8.03334 21.5771L8.32598 20.1059C6.74119 19.7907 5.28546 19.0126 4.14289 17.87L3.08223 18.9307ZM0.435807 13.9796C0.808919 15.8553 1.72988 17.5783 3.08223 18.9307L4.14289 17.87C3.00032 16.7274 2.22222 15.2717 1.90698 13.6869L0.435807 13.9796ZM0.986076 8.39258C0.25419 10.1595 0.0626945 12.1038 0.435807 13.9796L1.90698 13.6869C1.59175 12.1021 1.75354 10.4594 2.3719 8.9666L0.986076 8.39258ZM4.54756 4.05289C2.95737 5.11543 1.71796 6.62565 0.986076 8.39258L2.3719 8.9666C2.99025 7.47376 4.0374 6.19781 5.38092 5.3001L4.54756 4.05289ZM8.838 2.48393C7.30828 2.65615 5.8362 3.19186 4.54756 4.05289L5.38092 5.3001C6.46965 4.57263 7.71338 4.12002 9.00581 3.97452L8.838 2.48393Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <i className="fa fa-envelope-o fa-lg"></i>
                  <span className="nav-text">Stats</span>
                </a>
              </li>

              <li>
                <a href="http://startific.com">
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 18 18"
                    width="20"
                    transform=""
                    style={{
                      width: '23px',
                      height: '23px',
                      marginLeft: '10px',
                    }}
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.0315 0.0880719C14.1482 -0.347735 16.1572 0.878565 16.8449 2.77802C16.1141 2.475 15.3126 2.30775 14.4721 2.30775H4.93375C2.92122 2.30775 1.13265 3.26665 0 4.75249C0.726098 3.2594 2.1143 2.12984 3.82777 1.77707L12.0315 0.0880719ZM0.164307 8.50778C0.164307 5.87383 2.29955 3.73859 4.93351 3.73859H14.4719C17.0142 3.73859 19.0919 5.72782 19.2334 8.23472H14.9488C13.2176 8.23472 11.8142 9.63813 11.8142 11.3693C11.8142 13.1005 13.2176 14.5039 14.9488 14.5039H19.2334C19.0919 17.0108 17.0142 19 14.4719 19H4.93351C2.29955 19 0.164307 16.8648 0.164307 14.2308V8.50778ZM19.2411 9.73472H14.9488C14.046 9.73472 13.3142 10.4666 13.3142 11.3693C13.3142 12.2721 14.046 13.0039 14.9488 13.0039H19.2411V9.73472ZM4.07968 14.7077C4.07968 14.2106 4.48262 13.8077 4.97968 13.8077H8.97968C9.47673 13.8077 9.87967 14.2106 9.87967 14.7077C9.87967 15.2048 9.47673 15.6077 8.97968 15.6077H4.97968C4.48262 15.6077 4.07968 15.2048 4.07968 14.7077ZM14.1988 11.3693C14.1988 10.9551 14.5346 10.6193 14.9488 10.6193H15.1395C15.5538 10.6193 15.8895 10.9551 15.8895 11.3693C15.8895 11.7835 15.5538 12.1193 15.1395 12.1193H14.9488C14.5346 12.1193 14.1988 11.7835 14.1988 11.3693Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <i className="fa fa-envelope-o fa-lg"></i>
                  <span className="nav-text">Wallet Info</span>
                </a>
              </li>
          <div className="scrollbar" id="style-1">
            <ul className="nav-menu">
              <li className="dextboard">
                <a href="http://startific.com"><HomeIcon className="icon" style={{ color: 'rgb(161, 170, 181)' }}/>
                  <i className="fa fa-user fa-lg"></i>
                  <span className="nav-text">DEXTboard</span>
                </a>
              </li>

              <li>
                <a href="http://startific.com"><AnalyticsIcon />
                  <i className="fa fa-user fa-lg"></i>
                  <span className="nav-text">Pair Explorer</span>
                </a>
              </li>


              <li>
                <a href="http://startific.com"><RocketLaunchIcon />
                  <i className="fa fa-envelope-o fa-lg"></i>
                  <span className="nav-text">Live New Pairs</span>
                </a>
              </li>

              <li>
                <a href="http://startific.com"><AutoModeIcon />
                  <i className="fa fa-envelope-o fa-lg"></i>
                  <span className="nav-text">Big Swap Explorer</span>
                </a>
              </li>

              <li>
                <a href="http://startific.com"><DatasetLinkedIcon />
                  <i className="fa fa-envelope-o fa-lg"></i>
                  <span className="nav-text">Multichart</span>
                </a>
              </li>

              <li>
                <a href="http://startific.com"><AutorenewIcon />
                  <i className="fa fa-envelope-o fa-lg"></i>
                  <span className="nav-text">Multiswap</span>
                </a>
              </li>

              <li>
                <a href="http://startific.com"><RocketLaunchIcon />
                  <i className="fa fa-envelope-o fa-lg"></i>
                  <span className="nav-text">Stats</span>
                </a>
              </li>

              <li>
                <a href="http://startific.com"><AccountBalanceWalletIcon />
                  <i className="fa fa-envelope-o fa-lg"></i>
                  <span className="nav-text">Wallet Info</span>
                </a>
              </li>

              <li>
                <a href="http://startific.com"><PersonIcon />
                  <i className="fa fa-envelope-o fa-lg"></i>
                  <span className="nav-text">User Area</span>
                </a>
              </li>

              <li>
                <h5 className="extra-heading">EXTRA</h5>
                <a href="http://startific.com"><AddCircleIcon />
                  <i className="fa fa-envelope-o fa-lg"></i>
                  <span className="nav-text">Products</span>
                </a>
              </li>

              <li>
                <a href="http://startific.com"><QueryStatsIcon />
                  <i className="fa fa-envelope-o fa-lg"></i>
                  <span className="nav-text">Simulator</span>
                </a>
              </li>

              <li>
                <a href="http://startific.com"><DisplaySettingsIcon />
                  <i className="fa fa-envelope-o fa-lg"></i>
                  <span className="nav-text">DEXTswap</span>
                </a>
              </li>

              <li>
                <a href="http://startific.com"><LocalFireDepartmentIcon />
                  <i className="fa fa-envelope-o fa-lg"></i>
                  <span className="nav-text">Burn</span>
                </a>
              </li>

              <li>
                <a href="http://startific.com"><YouTubeIcon />
                  <i className="fa fa-envelope-o fa-lg"></i>
                  <span className="nav-text">DEXTools Academy</span>
                </a>
              </li>
              <li>
                <a href="http://startific.com"><LanguageIcon />
                  <i className="fa fa-envelope-o fa-lg"></i>
                  <span className="nav-text">Web</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </main>
    </div>
  );
}

function GlobalNavItem({
  item,
  close,
}: {
  item: Item;
  close: () => false | void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        'block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300',
        {
          'text-gray-400 hover:bg-gray-800': !isActive,
          'text-white': isActive,
        },
      )}
    >
      {item.name}
    </Link>
  );
}
