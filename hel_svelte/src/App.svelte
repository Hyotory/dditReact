<script>
    import { Router, Link, Route } from "svelte-routing";
    import RouteHome from "./lib/RouteHome.svelte";
    import RouteAbout from "./lib/RouteAbout.svelte";
    import EmpList from "./lib/EmpList.svelte";
    import EmpDetail from "./lib/EmpDetail.svelte";
    import EmpMod from "./lib/EmpMod.svelte";
    import EmpAdd from "./lib/EmpAdd.svelte";
    
</script>

<Router>
    <Link to="/">홈</Link>
    <Link to="/about">소개</Link>
    <Link to="/emp_list.do">사원관리</Link>
    <br />
    <Route path="/" > <RouteHome/> </Route>
    <Route path="/about"  >  <RouteAbout/> </Route>
    <Route path="/emp_list.do"  >  <EmpList/> </Route>
    <Route path="/emp_detail.do"  >  <EmpDetail/> </Route>
    <Route path="/emp_mod.do"  >  <EmpMod/> </Route>
    <Route path="/emp_add.do"  >  <EmpAdd/> </Route>
</Router>
