export const PhotoService = {
    getOldWebsiteData() {
        return [
            {
                itemImageSrc: '/src/assets/OldWebsiteScreenshots/homeSreenshot.png',
                alt: 'Screenshot of original home page',
                title: 'Original Home Page'
            },
            {
                itemImageSrc: '/src/assets/OldWebsiteScreenshots/resumeScreenshot.png',
                alt: 'Screenshot of original resume page',
                title: 'Original Resume Page'
            },
            {
                itemImageSrc: '/src/assets/OldWebsiteScreenshots/aboutScreenshot.png',
                alt: 'Screenshot of original about this site page',
                title: 'Original About this Site page'
            },
            {
                itemImageSrc: '/src/assets/OldWebsiteScreenshots/contactScreenshot.png',
                alt: 'Screenshot of original contact page',
                title: 'Original contact page'
            },
        ];
    },

    getOldWebsiteImages() {
        return Promise.resolve(this.getOldWebsiteData());
    },

    getBPTData(){
        return[
            {
                itemImageSrc: "/src/assets/BPT_Screenshots/WelcomePage.png",
                alt: "",
                title: "Welcome Page"
            },
            {
                itemImageSrc: "/src/assets/BPT_Screenshots/HomeGator.png",
                alt: "",
                title: "Home Page"
            },            
            {
                itemImageSrc: "/src/assets/BPT_Screenshots/GatorGroups.png",
                alt: "",
                title: "Groups Page"
            },            
            {
                itemImageSrc: "/src/assets/BPT_Screenshots/NewGroup.png",
                alt: "",
                title: "New Group Page"
            },
            {
                itemImageSrc: "/src/assets/BPT_Screenshots/JoinAGroup.png",
                alt: "",
                title: "Join a Group Page"
            },            
            {
                itemImageSrc: "/src/assets/BPT_Screenshots/RosterPDF.png",
                alt: "",
                title: "Group Roster as a PDF"
            },                 
            {
                itemImageSrc: "/src/assets/BPT_Screenshots/MapAnAfternoonStroll.png",
                alt: "",
                title: "Sample Route"
            },            
            {
                itemImageSrc: "/src/assets/BPT_Screenshots/EditMyRoute.png",
                alt: "",
                title: "Edit an existing Route"
            },            
            {
                itemImageSrc: "/src/assets/BPT_Screenshots/DirectionsPDF.png",
                alt: "",
                title: "Directions as a PDF"
            },            
            {
                itemImageSrc: "/src/assets/BPT_Screenshots/HikesGator.png",
                alt: "",
                title: "List of Hikes"
            },            
            {
                itemImageSrc: "/src/assets/BPT_Screenshots/NewHike.png",
                alt: "",
                title: "New hike"
            },            
            {
                itemImageSrc: "/src/assets/BPT_Screenshots/AccountGator.png",
                alt: "",
                title: "Account page"
            },
            {
                itemImageSrc: "/src/assets/BPT_Screenshots/cstemmPoster.jpg",
                alt: "",
                title: "CSTEMM Poster"
            }
        ];
    },
    
    getBPTImages(){
        return Promise.resolve(this.getBPTData());
    },

    getSpaceboxData(){
        return[
            {
                itemImageSrc: "/src/assets/Spacebox_Screenshots/Home.png",
                alt: "",
                title: ""
            },
            {
                itemImageSrc: "/src/assets/Spacebox_Screenshots/UserSystems.png",
                alt: "",
                title: ""
            },
            {
                itemImageSrc: "/src/assets/Spacebox_Screenshots/GuestView.png",
                alt: "",
                title: ""
            },
            {
                itemImageSrc: "/src/assets/Spacebox_Screenshots/Login.png",
                alt: "",
                title: ""
            },
            {
                itemImageSrc: "/src/assets/Spacebox_Screenshots/CreateSystem.png",
                alt: "",
                title: ""
            },
            {
                itemImageSrc: "/src/assets/Spacebox_Screenshots/AddObject.png",
                alt: "",
                title: ""
            },
            {
                itemImageSrc: "/src/assets/Spacebox_Screenshots/EditObject.png",
                alt: "",
                title: ""
            },
            {
                itemImageSrc: "/src/assets/Spacebox_Screenshots/Account.png",
                alt: "",
                title: ""
            },
        ];
    },

    getSpaceboxImages(){
        return Promise.resolve(this.getSpaceboxData());
    },
};

