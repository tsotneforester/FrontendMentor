import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import Planet from './pages/Planet';
import planetsData from './data.json';

const Router = () => {
  const activePlanet = 'Venus';

  let onlyPlanets = planetsData.map((e) => e.name);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={<Navigate to={`/${activePlanet.toLowerCase()}`} replace />}
          />
          {onlyPlanets.map((planet, i) => {
            return (
              <Route
                key={i}
                path={`/${planet.toLocaleLowerCase()}`}
                element={<Planet />}
              />
            );
          })}
          )
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
