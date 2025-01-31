import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

import CalendarSVG from '../assets/icon-calendar.svg?react';
import TodoSVG from '../assets/icon-todo.svg?react';
import PlanningSVG from '../assets/icon-planning.svg?react';
import RemindersSVG from '../assets/icon-reminders.svg?react';

const menuData = [
  {
    title: 'features',
    submenu: [
      { title: 'todo list', icon: <TodoSVG /> },
      { title: 'calendar', icon: <CalendarSVG /> },
      { title: 'reminders', icon: <RemindersSVG /> },
      { title: 'planning', icon: <PlanningSVG /> },
    ],
  },
  {
    title: 'company',
    submenu: ['history', 'our team', 'blog'],
  },
  {
    title: 'careers',
  },
  {
    title: 'about',
    align: 'right',
  },
];

export default function SharedLayout() {
  return (
    <S.Container>
      <Navbar menu={menuData} />
      <Outlet />
    </S.Container>
  );
}
const S = {};
S.Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  min-height: 100svh;
  background-color: ${({ theme }) => theme.colors.white1};
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    background-color: ${({ theme }) => theme.colors.white2};
  }
`;
