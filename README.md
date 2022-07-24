# Lesson 6
#### 1. Part - 1
1. CreateContext (provide, consumer)  - method can provide obj
      to any component directly in project tre instead of
      property drilling
#### 2. Part - 2
1. Class Components
   1. Life Cycle of components
      1. ComponentDidMount - same like useEffect, will work after render of component
#### 3. Part - 3
1. Life Cycle of components
   1. ComponentWillUnmount - same like return in useEffect, work before component die.
   2. Cycle: constructor, render, componentDidMount, componentWillUnmount.
      1. ComponentDidUpdate - update some prop in rendered component.
      2. ComponentDidCatch - catch ERROR if during render component appeared wrong data ect.

# Lesson 5
#### 1. react-router-dom v.6
1. Link, Routes, Route, Outlet, BrowserRouter
   1. structure of routes tree
   2. nestedRoute - route in father route
   3. url parameters between route-sun and father-route
2. Hooks
   1. useParams - catch dynamic url parameters
   2. useNavigate - create url
   3. useLocation (state) - for state which can contain info about previous item
3. Two methods how receive info
   1. useLocation (state) - throw info with component to the child
      1. work only after all url path
      2. do`nt "ddos" server
   2. another new fetch
      1. url will be work without additional moves
      2. create load for server - coz "ddos" server


# Lesson 4
#### 1. Hook
1. useForm - can create control form
   1. method - register - create input name:
      1. include additional options for input - as example required field ect.
   2. method - handleSubmit - follow to register and back value all inputs
   3. options - add some options:
      1. control errors ect.
2. useForm with:
   1. form
   2. input
   3. select (dynamic creating)
3. fetch to api jsonplaceholder from Postman:
   1. post - create user
   2. get - all users
   3. get - single users

# Lesson 3
#### 1. Services
1. Axios
2. StateLifting vs Fetch

# Lesson 2
#### 1. Hooks:
1. useEffect
2. useState

#### 2. StateLifting
#### 3. Fetch to API

# Lesson 1
1. Git base - create empty project:
   1. Deleted all useless from src(all except index.js,
      app,js), fixed index.js;
   2. Force deleted dir idea from commit;
> git rm -rf .idea/

> git commit -m "fix gitignore"

2. Simple components