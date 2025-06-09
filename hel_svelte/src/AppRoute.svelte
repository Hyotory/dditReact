<script>
    import { Router, Link, Route } from "svelte-routing";
    import RouteHome from "./lib/RouteHome.svelte";
    import RouteAbout from './lib/RouteAbout.svelte';

</script>

<Router>
    <Link to="/">홈</Link>
    <Link to="/about">소개</Link>
    <br />
    <Route path="/" > <RouteHome/> </Route>
    <Route path="/about"  >  <RouteAbout/> </Route>
</Router>
