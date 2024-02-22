## React Routing

## Pre-reqs :

- Single Page Application.
- Client Side bundle.
- Client Side Route.


- SPA : Single page Application : `A Single Page Application is a type of web application that dynamically updates a single HTML page without requiring full page reloads. In SPAs, the initial HTML, CSS, and JavaScript are loaded once, and subsequent interactions (such as navigating between different views or fetching data) happen without refreshing the entire page.`

- Client Side Routing : `Client-side routing refers to managing navigation within a web application on the client side (in the browser) without making additional requests to the server. In traditional multi-page applications, each route corresponds to a separate HTML page. In contrast, client-side routing allows changing the URL and rendering different components based on the URL without reloading the entire page.`

- Client Side Bundle : `When you build a React application, it generates a bundle of JavaScript files that contain all the necessary code for your app to run. The client-side bundle refers to this compiled JavaScript bundle that gets sent to the user’s browser.`

    The bundle includes:

            React components.
            Third-party libraries (if used).
            Application-specific logic.


## Client Side Routing 

- under `components` folder created 

    - Dashboard
    - Landing
    - Title {AppBar}

Implemented client side routing without any extra re-renders.

## lazy loading 

- using lazy library to load pages lazily {only load when they are called}.

        const Dashboard = lazy(()=>import('./components/Dashboard'))
        const Landing = lazy(()=>import('./components/Landing'))
        const Title = lazy(()=>import('./components/Title'))

        Note: use Suspense :- Suspense is a powerful feature in React that allows developers to handle asynchronous data fetching and code splitting more elegantly.


Purpose of Suspense:
- Displaying a Fallback: When your application needs to load data (e.g., from an API) or dynamically import components (e.g., using React.lazy), Suspense lets you display a temporary or “fallback” UI while waiting for the data or components to load. Seamless Transition: Once the data or components are ready, React seamlessly transitions from the fallback UI to rendering the actual content.

        <Route path='/Dashboard' element={<Suspense fallback={"loading..."} ><Dashboard /></Suspense> } ></Route>
        <Route path="/" element={<Suspense fallback={"loading..."} >< Landing /></Suspense> } ></Route>


