import type { ReactElement } from 'react';
import HomePage from './pages/HomePage';
import MinistriesPage from './pages/MinistriesPage';
import MissionariesPage from './pages/MissionariesPage';
import ContactPage from './pages/ContactPage';
import GivingPage from './pages/GivingPage';
import ImNewHerePage from './pages/ImNewHerePage';
import SmallGroupsPage from './pages/SmallGroupsPage';
import LiveStreamingPage from './pages/LiveStreamingPage';
import SermonArchivesPage from './pages/SermonArchivesPage';
import VideoBibleLessonsPage from './pages/VideoBibleLessonsPage';
import SitbPage from './pages/SitbPage';
import SummerLearningCampPage from './pages/SummerLearningCampPage';
import EldersPage from './pages/EldersPage';
import DeaconsPage from './pages/DeaconsPage';
import MinistersPage from './pages/MinistersPage';
import StaffPage from './pages/StaffPage';
import CalendarPage from './pages/CalendarPage';
import PrivacyPage from './pages/PrivacyPage';

/**
 * Every page on the site. This is the single list used by the router, the
 * build-time prerender, and the sitemap: add new pages here.
 */
export const routes: { path: string; element: ReactElement }[] = [
  { path: '/', element: <HomePage /> },
  { path: '/ministries', element: <MinistriesPage /> },
  { path: '/missionaries', element: <MissionariesPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/giving', element: <GivingPage /> },
  { path: '/imnewhere', element: <ImNewHerePage /> },
  { path: '/smallgroups', element: <SmallGroupsPage /> },
  { path: '/livestreaming', element: <LiveStreamingPage /> },
  { path: '/sermonarchives', element: <SermonArchivesPage /> },
  { path: '/videobiblelessons', element: <VideoBibleLessonsPage /> },
  { path: '/sitb', element: <SitbPage /> },
  { path: '/summerlearningcamp', element: <SummerLearningCampPage /> },
  { path: '/elders', element: <EldersPage /> },
  { path: '/deacons', element: <DeaconsPage /> },
  { path: '/ministers', element: <MinistersPage /> },
  { path: '/staff', element: <StaffPage /> },
  { path: '/calendar', element: <CalendarPage /> },
  { path: '/privacy', element: <PrivacyPage /> },
];
