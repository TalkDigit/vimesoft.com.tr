import Vue from "vue";
import VueRouter from "vue-router";
import VueBodyClass from 'vue-body-class';

import Homepage from "./pages/Homepage";
import Packages from "./pages/front/Packages";
import Contact from "./pages/front/Contact";
import Premium from "./pages/front/Premium";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Verification from "./pages/auth/Verification";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/dashboard/Profile";
import Info from "./pages/dashboard/profileInformation/Info";
import ProfilePacket from "./pages/dashboard/profileInformation/ProfilePacket";

import AdditionalTab from "./pages/dashboard/profileInformation/profileTabs/AdditionalTab";
import AddressTab from "./pages/dashboard/profileInformation/profileTabs/AddressTab";
import BillTab from "./pages/dashboard/profileInformation/profileTabs/BillTab";
import PacketTab from "./pages/dashboard/profileInformation/profileTabs/PacketTab";
import Plan from "./pages/dashboard/meeting/Plan";
import store from "./store";
import Forgot from "./pages/auth/Forgot";
import RegisterPackage from "./pages/register/Register";
import Meetings from "./pages/dashboard/meeting/Meetings";
import PlannedMeetings from "./pages/dashboard/meeting/PlannedMeetings";
import PastMeetings from "./pages/dashboard/meeting/PastMeetings";
import PersonalRoom from "./pages/dashboard/meeting/PersonalRoom";
import MeetingRecords from "./pages/dashboard/meeting/MeetingRecords";
import MeetingReports from "./pages/dashboard/meeting/MeetingReports";
import Settings from "./pages/dashboard/Settings";
import MeetingSettings from "./pages/dashboard/meeting/components/MeetingSettings";
import ParticipiantSettings from "./pages/dashboard/meeting/components/ParticipiantSettings";
import JoinMeeting from "./pages/dashboard/JoinMeeting";

Vue.use(VueRouter);
var className = false;
if (localStorage.getItem('userInfo') != null) {
    if (JSON.parse(localStorage.getItem('userInfo'))[0].package == 'Ücretsiz') {
        className = true
    }
    console.log(JSON.parse(localStorage.getItem('userInfo'))[0].package)
    console.log(className)
}
const routes = [
    {
        //Anasayfa
        path: "/",
        component: Homepage,
        name: "anasayfa",
        meta: {
            dashboard: false,
            bodyClass: 'bg-still'
        },

    },
    {
        //Anasayfa
        path: "/vimesoft-basvur",
        component: Premium,
        name: "premium",
        meta: {
            dashboard: false,
            bodyClass: 'bg-still'
        },

    },
    {
        //Paketler
        path: "/paketler",
        component: Packages,
        name: "paketler",
        meta: {
            dashboard: false,
            bodyClass: 'bg-still'
        },
    },
    {
        //Kayıt Ol
        path: "/kayit-ol",
        component: Register,
        meta: {
            dashboard: false,
            bodyClass: 'bg-still'
        },
        name: "register",

    },
    {
        //Giriş Yap
        path: "/giris-yap",
        component: Login,
        name: "login",
        meta: {
            dashboard: false,
            bodyClass: 'bg-still'
        },
    },
    {
        //Şifremi unuttum
        path: "/sifremi-unuttum",
        component: Forgot,
        name: "forgot",
        meta: {
            dashboard: false,
            bodyClass: 'bg-still'
        },
    },
    {
        //Giriş Yap
        path: "/verification",
        component: Verification,
        name: "verificationRoute",
        meta: {
            dashboard: false,
            bodyClass: 'bg-still'
        },
    },

    {
        //Giriş Yap
        path: "/satin-al",
        component: RegisterPackage,
        name: "buyStart",
        meta: {
            dashboard: true,

        },
    },
    {
        //İletişim
        path: "/iletisim",
        component: Contact,
        name: "contact",
        meta: {
            dashboard: false,
            bodyClass: 'bg-still'
        },
    },

    //DASHBOARD GRUBU
    {
        path: '/dashboard',
        component: Dashboard,
        meta: {
            dashboard: true,
            bodyClass: 'bg-still'
        }, name: "dashboard",
        beforeEnter(to, from, next) {
            if (store.getters.isAuthenticated) {
                console.log(store.getters.isAuthenticated)
                next();
            } else {
                next({name: "login"});
            }
        },
    },
    {
        path: '/dashboard/toplantiya-katil',
        component: JoinMeeting,
        meta: {
            dashboard: true,
            bodyClass: 'bg-still'
        }, name: "JoinMeeting",
        beforeEnter(to, from, next) {
            if (store.getters.isAuthenticated) {
                console.log(store.getters.isAuthenticated)
                next();
            } else {
                next({name: "login"});
            }
        },
    },
    {
        path: '/dashboard/hesabim',
        component: Profile,
        meta: {
            dashboard: true,
            background: false,
        }, name: "profile",
        children: [
            {
                path: '',
                component: ProfilePacket,
                meta: {
                    dashboard: true,
                    narrow: false,
                },
                children: [
                    {
                        path: '',
                        component: PacketTab,
                        name: "PacketTab",
                        meta: {
                            dashboard: true,
                            narrow: false,
                        },
                    },
                    {
                        path: 'faturalar',
                        component: BillTab,
                        name: "BillTab",
                        meta: {
                            dashboard: true,
                            narrow: false,
                        },
                    },
                    {
                        path: 'odeme-bilgileri',
                        component: AddressTab,
                        name: "AddressTab",
                        meta: {
                            dashboard: true,
                            narrow: false,
                        },
                    },
                    {
                        path: 'ek-alim',
                        component: AdditionalTab,
                        name: "AdditionalTab",
                        meta: {
                            dashboard: true,
                            narrow: false,
                        },
                    }
                ]
            },
            {
                path: 'hesap-detaylari',
                component: Info,
                name: "profileinfo",
                meta: {
                    dashboard: true,
                    narrow: true
                },
            },

        ],
        beforeEnter(to, from, next) {
            if (store.getters.isAuthenticated) {
                console.log(store.getters.isAuthenticated)
                next();
            } else {
                next({name: "login"});
            }
        },
    },
    {
        path: '/dashboard/toplanti-planla',
        component: Plan,
        meta: {
            dashboard: true,
            background: true,
            bodyClass: 'bg-still'
        }, name: "meetingPlan",
        beforeEnter(to, from, next) {
            if (store.getters.isAuthenticated) {
                console.log(store.getters.isAuthenticated)
                next();
            } else {
                next({name: "login"});
            }
        },
    },
    {
        path: '/dashboard/toplantilar',
        component: Meetings,
        name: "meetings",
        meta: {
            dashboard: true,
            background: true,
            bodyClass: 'bg-still'
        },
        beforeEnter(to, from, next) {
            if (store.getters.isAuthenticated) {
                console.log(store.getters.isAuthenticated)
                next();
            } else {
                next({name: "login"});
            }
        },
        children: [
            {
                path: '',
                meta: {
                    dashboard: true,
                    background: true,
                    bodyClass: 'bg-still'
                },
                component: PlannedMeetings,
            },
            {
                path: 'planlananlar',
                name: 'PlannedMeetings',
                meta: {
                    dashboard: true,
                    background: true,
                    bodyClass: 'bg-still'
                },
                component: PlannedMeetings,
            },
            {
                path: 'gecmis',
                name: 'PastMeetings',
                meta: {
                    dashboard: true,
                    background: true,
                    bodyClass: 'bg-still'
                },
                component: PastMeetings,
            },
            {
                path: 'kisisel-odalar',
                name: 'PersonalRoom',
                meta: {
                    dashboard: true,
                    background: true,
                    bodyClass: 'bg-still'
                },
                component: PersonalRoom,
            }
        ]
    },
    {
        path: '/dashboard/toplantilar/toplanti-kayitlari',
        name: 'MeetingRecords',
        meta: {
            dashboard: true,
            background: true,
            bodyClass: className ? 'bg-still' : ''
        },
        component: MeetingRecords,
    },
    {
        path: '/dashboard/toplantilar/toplanti-raporlari',
        name: 'MeetingReports',
        meta: {
            dashboard: true,
            background: true,
            bodyClass: 'bg-still'
        },
        component: MeetingReports,
    },
    {
        path: '/dashboard/ayarlar',
        name: 'Settings',
        meta: {
            dashboard: true,
            background: true,

        },
        component: Settings,
        children: [
            {
                path: '',
                name: 'settings',
                meta: {
                    dashboard: true,
                    background: true,

                },
                component: MeetingSettings,
            }, {
                path: 'toplanti',
                name: 'MeetingSettings',
                meta: {
                    dashboard: true,
                    background: true,

                },
                component: MeetingSettings,
            }, {
                path: 'Kullanici',
                name: 'ParticipiantSettings',
                meta: {
                    dashboard: true,
                    background: true,

                },
                component: ParticipiantSettings,
            }
        ]
    }
]
export const router = new VueRouter({
    routes,
    mode: "history",
});

const vueBodyClass = new VueBodyClass(routes);
router.beforeEach((to, from, next) => {
    vueBodyClass.guard(to, next)
});