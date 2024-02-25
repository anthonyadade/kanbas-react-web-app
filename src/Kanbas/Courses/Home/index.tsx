import ModuleList from "../Modules/List";

function Home() {
    return (
        <div>
            <h2>Home</h2>
            <ModuleList />
            <h1>Course Status</h1>
            <button>Unpublish</button>
            <button>Published</button><br/>
            <ul>
                <li><a href="/Kanbas/Courses/Home/index.html">Import Existing Content</a></li>
                <li><a href="/Kanbas/Courses/Home/index.html">Import From Commons</a></li>
                <li><a href="/Kanbas/Courses/Home/index.html">Choose Home Page</a></li>
                <li><a href="/Kanbas/Courses/Home/index.html">View Course Stream</a></li>
                <li><a href="/Kanbas/Courses/Home/index.html">New Announcement</a></li>
                <li><a href="/Kanbas/Courses/Home/index.html">New Analytics</a></li>
                <li><a href="/Kanbas/Courses/Home/index.html">View Course Notifications</a></li>
            </ul>
            <h1>Coming Up</h1>
            <a href="/Kanbas/Courses/Home/index.html">View Calendar</a>
            <ul>
                <li><a href="/Kanbas/Courses/Home/index.html">Lec 1</a></li>
                <li><a href="/Kanbas/Courses/Home/index.html">Lec 2</a></li>
                <li><a href="/Kanbas/Courses/Home/index.html">Lec 3</a></li>
            </ul>
        </div>
    );
}
export default Home;