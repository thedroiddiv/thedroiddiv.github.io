export interface Project {
    title :string;
    desc: string;
    link:string;
    image:string;
}

export const projects : Project[] = [
    {
        title : "Shoponn",
        desc:"A simple online shopping website with different versions for users and admin",
        link:"https://shoponn.herokuapp.com/",
        image:"https://raw.githubusercontent.com/divyansh-dxn/Shoponn/master/samples/img_1.png"   
    },
    {
        title : "Walley",
        desc:"An android wallpaper application",
        link:"https://play.google.com/store/apps/details?id=com.dxn.walley2",
        image:"https://raw.githubusercontent.com/divyansh-dxn/Photos/main/Screenshot%20from%202021-08-29%2020-56-05.png"   
    },
    {
        title : "MLKit-Analyzer",
        desc:"A simple application based on Google MLKit",
        link:"https://github.com/divyansh-dxn/MLKit-Analyzer",
        image:""   
    },
]