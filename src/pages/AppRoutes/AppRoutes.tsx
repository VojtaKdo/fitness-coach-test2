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
import { Achievements } from "../Achievements/Achievements";
import { Exercises } from "../Exercises/Exercises";
import { Dishes } from "../Dishes/Dishes";
import { Programs } from "../Programs/Programs";
import Friends from "../Friends/Friends";
import { Notifications } from "../Notifications/Notifications";
import { Policies } from "../Policies/Policies";
import { Friend } from "../Friends/Friend";
import { Program } from "../Programs/Program";
import { Dish } from "../Dishes/Dish";
import { AppReview } from "../AppReview/AppReview";

export function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="*" element={<NotFound />} />
                <Route path="/aboutus" element={<AboutUs/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/timetable" element={<Timetable/>}/>
                <Route path="/notes" element={<Notes/>}/>
                <Route path="/achievements" element={<Achievements/>}/>
                <Route path="/exercises" element={<Exercises/>}/>
                <Route path="/dishes" element={<Dishes/>}/>
                <Route path="/programs" element={<Programs/>}/>
                <Route path="/friends" element={<Friends/>}/>
                <Route path="/notifications" element={<Notifications/>}/>
                <Route path="/policies" element={<Policies/>}/>
                <Route path="/friend" element={<Friend/>}/>
                <Route path="/program" element={<Program/>}/>
                <Route path="/dish" element={<Dish/>}/>
                <Route path="/appreview" element={<AppReview/>}/>
            </Routes>
        </HashRouter>
    )
}