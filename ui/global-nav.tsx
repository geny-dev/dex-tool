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
