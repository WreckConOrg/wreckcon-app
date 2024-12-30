import {
  isMobile as rddIsMobile,
  BrowserView as rddBrowserView,
  MobileView as rddMobileView,
} from "react-device-detect";

export const isMobile: boolean = rddIsMobile;

export const MobileView = rddMobileView;

export const BrowserView = rddBrowserView;
