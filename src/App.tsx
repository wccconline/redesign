import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import NotFoundPage from './pages/NotFoundPage';
import { routes } from './routes';
import { LANGS, localizedPath } from './utils/i18n';

/** The site's layout and routes, shared by the browser and the build-time prerender. */
export function AppRoutes() {
  return (
    <Layout>
      <Routes>
        {LANGS.flatMap((lang) =>
          routes.map(({ path, element }) => {
            const full = localizedPath(path, lang);
            return <Route key={full} path={full} element={element} />;
          }),
        )}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
