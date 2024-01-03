import { HashRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "../MainPage/MainPage";
import Dashboard from "../Dashboard/Dashboard";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import NotFound from "../NotFound/NotFound";
import { AboutUs } from "../AboutUs/AboutUs";
import { Settings } from "../Settings/Settings";
import { Profile } from "../Profile/Profile";
import { Timetable } from "../Timetable/Timetable";
import { Notes } from "../Notes/Notes";
import { Stats } from "../Stats/Stats";
import { Exercises } from "../Exercises/Exercises";
import { Dishes } from "../Dishes/Dishes";
import { Programs } from "../Programs/Programs";
import { Friends } from "../Friends/Friends";
import { Notifications } from "../Notifications/Notifications";
import { Policies } from "../Policies/Policies";

export function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/signin" element={<SignIn />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="*" element={<NotFound />} />
                <Route path="/aboutus" element={<AboutUs/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/timetable" element={<Timetable/>}/>
                <Route path="/notes" element={<Notes/>}/>
                <Route path="/stats" element={<Stats/>}/>
                <Route path="/exercises" element={<Exercises/>}/>
                <Route path="/dishes" element={<Dishes/>}/>
                <Route path="/programs" element={<Programs/>}/>
                <Route path="/friends" element={<Friends/>}/>
                <Route path="/notifications" element={<Notifications/>}/>
                <Route path="/policies" element={<Policies/>}/>
            </Routes>
        </HashRouter>
    )
}