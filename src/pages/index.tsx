import { Navigate, Route, Routes } from 'react-router';
import { lazy } from 'react';

const Main = lazy(() => import('./main'));
const Shedule = lazy(() => import('./Shedule'));
const Teachers = lazy(() => import('./Teachers'));
const StudPlan = lazy(() => import('./StudPlan'));
const SheduleByGrouop = lazy(() => import('./SheduleByGroup'));
export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/shedule" element={<Shedule />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/studplan" element={<StudPlan />} />
      <Route path="/shedule-group/:id" element={<SheduleByGrouop />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
