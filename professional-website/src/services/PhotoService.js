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
                alt: "Screen shot of login page of Backpacker's Toolbox",
                title: "Welcome Page"
            },
            {
                itemImageSrc: "/src/assets/BPT_Screenshots/HomeGator.png",
                alt: "Screen shot of home page of Backpacker's Toolbox",
                title: "Home Page"
            },            
            {
                itemImageSrc: "/src/assets/BPT_Screenshots/GatorGroups.png",
                alt: "Screenshot of group page with list of groups",
                title: "Groups Page"
            },            
            {
                itemImageSrc: "/src/assets/BPT_Screenshots/NewGroup.png",
                alt: "Screen shot of create a group page",
                title: "New Group Page"
            },
            {
                itemImageSrc: "/src/assets/BPT_Screenshots/JoinAGroup.png",
                alt: "Screen shot of join a group page",
                title: "Join a Group Page"
            },            
            {
                itemImageSrc: "/src/assets/BPT_Screenshots/RosterPDF.png",
                alt: "Screen shot of a PDF roster",
                title: "Group Roster as a PDF"
            },                 
            {
                itemImageSrc: "/src/assets/BPT_Screenshots/MapAnAfternoonStroll.png",
                alt: "Screen shot of a mapped route",
                title: "Sample Route"
            },            
            {
                itemImageSrc: "/src/assets/BPT_Screenshots/EditMyRoute.png",
                alt: "Screen shot of route editing page",
                title: "Edit an existing Route"
            },            
            {
                itemImageSrc: "/src/assets/BPT_Screenshots/DirectionsPDF.png",
                alt: "Screen shot of PDF containing directions",
                title: "Directions as a PDF"
            },            
            {
                itemImageSrc: "/src/assets/BPT_Screenshots/HikesGator.png",
                alt: "Screen shot of list of hikes",
                title: "List of Hikes"
            },            
            {
                itemImageSrc: "/src/assets/BPT_Screenshots/NewHike.png",
                alt: "Screen shot of create a hike page",
                title: "New hike"
            },            
            {
                itemImageSrc: "/src/assets/BPT_Screenshots/AccountGator.png",
                alt: "Screen shot of account page",
                title: "Account page"
            },
            {
                itemImageSrc: "/src/assets/BPT_Screenshots/cstemmPoster.jpg",
                alt: "Poster from CSTEMM Fair",
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
                alt: "Home page of SpaceBox",
                title: "SpaceBox Home"
            },
            {
                itemImageSrc: "/src/assets/Spacebox_Screenshots/UserSystems.png",
                alt: "Screen shot of list of user made solar systems",
                title: "User Systems"
            },
            {
                itemImageSrc: "/src/assets/Spacebox_Screenshots/GuestView.png",
                alt: "Screen shot of guest view of a solar system",
                title: "Guest View"
            },
            {
                itemImageSrc: "/src/assets/Spacebox_Screenshots/Login.png",
                alt: "Screen shot of login page",
                title: "Login"
            },
            {
                itemImageSrc: "/src/assets/Spacebox_Screenshots/CreateSystem.png",
                alt: "Screen shot of the user's systems and a create system button",
                title: "New System"
            },
            {
                itemImageSrc: "/src/assets/Spacebox_Screenshots/AddObject.png",
                alt: "Screen shot of add object tool",
                title: "Add Object"
            },
            {
                itemImageSrc: "/src/assets/Spacebox_Screenshots/EditObject.png",
                alt: "Scren shot of edit object tool",
                title: "Edit Object"
            },
            {
                itemImageSrc: "/src/assets/Spacebox_Screenshots/Account.png",
                alt: "Screen shot of account page",
                title: "Account"
            },
        ];
    },

    getSpaceboxImages(){
        return Promise.resolve(this.getSpaceboxData());
    },
};

