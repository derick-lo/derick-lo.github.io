import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import 'normalize.css';
import { router } from './routes';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     errorElement: <ErrorPage />,
//     Component: () => {
//       const navigation = useNavigation();
//       const loading = useMemo(
//         () => navigation.state === 'loading',
//         [navigation.state]
//       );

//       return loading ? (
//         <h1>loading</h1>
//       ) : (
//         <div style={{ display: 'flex', width: '100vw' }}>
//           <div
//             style={{
//               flexShrink: 1,
//               backgroundColor: 'lightgray',
//               padding: '0 20px',
//             }}
//           >
//             <h2>Navigate</h2>
//             <div>
//               <NavLink
//                 style={({ isActive }) => ({
//                   color: isActive ? 'green' : 'inherit',
//                 })}
//                 to="home"
//               >
//                 Home
//               </NavLink>
//             </div>
//             <div>
//               <NavLink
//                 style={({ isActive }) => ({
//                   color: isActive ? 'green' : 'inherit',
//                 })}
//                 to="about"
//               >
//                 About
//               </NavLink>
//             </div>
//             <div>
//               <NavLink
//                 style={({ isActive }) => ({
//                   color: isActive ? 'green' : 'inherit',
//                 })}
//                 to="projects/1"
//               >
//                 projects/1
//               </NavLink>
//             </div>
//             <div>
//               <NavLink
//                 style={({ isActive }) => ({
//                   color: isActive ? 'green' : 'inherit',
//                 })}
//                 to="projects/news"
//               >
//                 projects/news
//               </NavLink>
//             </div>
//             <div>
//               <NavLink
//                 style={({ isActive }) => ({
//                   color: isActive ? 'green' : 'inherit',
//                 })}
//                 to="throw"
//               >
//                 throw
//               </NavLink>
//             </div>
//           </div>
//           <div
//             style={{
//               flexGrow: 1,
//               backgroundColor: '#f9f9f9',
//               padding: '0 20px 20px 20px',
//             }}
//           >
//             <Outlet />
//           </div>
//         </div>
//       );
//     },
//     children: [
//       {
//         index: true,
//         loader: async (...rest) => {
//           console.log('rest: ', rest);
//           throw redirect('/home');
//         },
//       },
//       {
//         path: 'home',
//         element: <h1>Home</h1>,
//       },
//       {
//         path: 'about',
//         element: <h1>About</h1>,
//       },
//       {
//         path: 'projects/:projectId',
//         loader: async ({ params, request }) =>
//           await {
//             data: [1, 2, 3, 4, 5, 6, 7].map(
//               (el) => `${params.projectId}-${el}`
//             ),
//             request,
//           },
//         children: [
//           {
//             path: 'items/:itemId',
//             Component: () => {
//               const { itemId } = useParams();
//               return <div style={{ padding: '20px 0' }}>Item{itemId}</div>;
//             },
//           },
//         ],
//         Component: () => {
//           const navigate = useNavigate();
//           const location = useLocation();
//           const { projectId } = useParams();
//           const { data, request } = useLoaderData();

//           useLayoutEffect(() => {
//             navigate(`items/${data[0]}`);
//           }, []);

//           const isActive = (path) => location.pathname.includes(path);
//           // eslint-disable-next-line no-console
//           console.log('request: ', request);
//           return (
//             <div>
//               <h1>project</h1>
//               <h2>project{projectId}</h2>
//               <div>
//                 {data.map((el) => (
//                   <span
//                     key={el}
//                     style={{
//                       borderWidth: 0,
//                       borderBottomWidth: 2,
//                       borderStyle: 'solid',
//                       borderColor: isActive(`items/${el}`)
//                         ? 'inherit'
//                         : 'transparent',
//                       fontWeight: isActive(`items/${el}`) ? 'bold' : 'normal',
//                       padding: '4px',
//                       marginRight: '20px',
//                       cursor: 'pointer',
//                       transition: 'all 0.3s',
//                     }}
//                     onClick={() => {
//                       navigate(`items/${el}`);
//                     }}
//                   >
//                     {el}
//                   </span>
//                 ))}
//               </div>
//               <Outlet />
//             </div>
//           );
//         },
//       },
//       {
//         path: 'projects/news',
//         element: <h1>news</h1>,
//       },
//       {
//         path: 'throw',
//         loader: () => {
//           throw new Response('something', {
//             status: 404,
//             statusText: 'something',
//           });
//         },
//         Component: () => {
//           const data = useLoaderData();
//           // eslint-disable-next-line no-console
//           console.log('data: ', data);
//           return <h1>throw</h1>;
//         },
//       },
//     ],
//   },
// ]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
