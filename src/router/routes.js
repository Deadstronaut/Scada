const routes = [{
        path: "/",
        component: () =>
            import ("layouts/MainLayout.vue"),
        children: [{
                path: "",
                name: "Savronik Scada",
                component: () =>
                    import ("pages/Dashboard.vue")
            },
            {
                path: "/messenger",
                name: "Messenger",
                component: () =>
                    import ("pages/Messenger.vue")
            },
            {
                path: "/usermanagement",
                name: "User Management",
                component: () =>
                    import ("pages/UserManagement.vue")
            },
            {
                path: "/projectmanagement",
                name: "Project Management",
                component: () =>
                    import ("pages/ProjectManagement.vue")
            },
            {
                path: "/accessmanagement",
                name: "Access Management",
                component: () =>
                    import ("pages/AccessManagement.vue")
            },
            {
                path: "/alarmmanagement",
                name: "Alarm Management",
                component: () =>
                    import ("pages/AlarmManagement.vue")
            },
            {
                path: "/sceneriomanagement",
                name: "Scenerio Management",
                component: () =>
                    import ("pages/ScenerioManagement.vue")
            },
            {
                path: "/calculationmanagement",
                name: "Calcuation Management",
                component: () =>
                    import ("pages/CalculationManagement.vue")
            },
            {
                path: "/dataviewer",
                name: "Data Viewer",
                component: () =>
                    import ("pages/DataViewer.vue")
            },
            {
                path: "/alarmclock",
                name: "Alarm Clock",
                component: () =>
                    import ("pages/AlarmClock.vue")
            },
            {
                path: "/deneme1",
                name: "Deneme I",
                component: () =>
                    import ("pages/Deneme1.vue")
            },
            {
                path: "/deneme2",
                name: "Deneme II",
                component: () =>
                    import ("pages/Deneme2.vue")
            },
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: "*",
        component: () =>
            import ("pages/Error404.vue")
    }
];

export default routes;